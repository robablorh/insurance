/* eslint-disable no-undef */
const mongoose = require("mongoose")

const carValueDetails = mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  insurancetype: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  calcAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("CarValue", carValueDetails);
