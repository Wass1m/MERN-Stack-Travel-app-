const express = require("express");
const { check, validationResult } = require("express-validator");

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
// model
const User = require("../../models/User");

const router = express.Router();

// @router POST /api/user
// @desc  register a user
// @access public

router.post(
  "/",
  [
    check("email", "Email is invalid").isEmail(),
    check("password", "Please insert a valid password > 6 car").isLength({
      min: 6,
    }),
    check("name", "Please Enter a name").not().isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // see if user exists

      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist" }] });
      }

      // get users gravatar

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // crypt the password

      user = new User({
        name,
        email,
        password,
        avatar,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // return the jsonwebtoken

      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };

      await jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
