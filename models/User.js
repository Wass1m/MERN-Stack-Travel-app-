const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,

    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  avatar: {
    type: String,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("userstravel", UserSchema);
