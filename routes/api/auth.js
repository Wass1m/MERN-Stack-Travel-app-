const express = require("express");
const { check, validationResult } = require("express-validator");

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
// model
const User = require("../../models/User");
// auth middlware

const auth = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

const router = express.Router();

// @router GET /api/user
// @desc  get current user
// @access public

router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.response);
    res.status(500).send("SERVER ERROR");
  }
});

// @router POST /api/user
// @desc  login a user
// @access public

router.post(
  "/",
  [
    check("email", "Email is invalid").isEmail(),
    check("password", "Please insert a valid password > 6 car").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(405).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // see if user exists

      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "User doesnt exist" }] });
      }

      // check if password match

      let match = bcrypt.compare(password, user.password);

      if (!match) {
        return res
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      console.log("HERE");
      // return the jsonwebtoken

      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };

      console.log("HERE2");

      await jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      console.log("HERE3");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

// @router POST /api/user/admin
// @desc  admin route test
// @access private

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("ADMIN ROUTE");
});

module.exports = router;
