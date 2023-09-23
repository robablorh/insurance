/* eslint-disable no-undef */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Field cannot be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Field cannot be empty"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Field cannot be empty"],
  }

}, {timestamps: true});

userSchema.pre("save", async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
        next()
    } catch (error) {
        next(error)
    }
  
});

module.exports = mongoose.model("User", userSchema);
