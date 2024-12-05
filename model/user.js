const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("api", userSchema);

module.exports = User;
