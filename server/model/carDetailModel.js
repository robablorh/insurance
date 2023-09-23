/* eslint-disable no-undef */
const mongoose = require("mongoose");

const carDetailsSchema = mongoose.Schema(
  {
    carRegNo: {
      type: String,
      require: true,
    },
    make: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    fuelType: {
      type: String,
      require: true,
    },
    yearOfManufacture: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    chassisNo: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarDetails", carDetailsSchema);
