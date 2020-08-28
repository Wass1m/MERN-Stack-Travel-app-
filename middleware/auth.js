const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // get the token

  const token = req.header("x-auth-token");

  // test if there is a token

  if (!token) {
    return res.status(401).json({ errors: [{ msg: "Not authorized " }] });
  }

  // if there is a token we verify it

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: [{ msg: "Invalid token " }] });
  }
};
