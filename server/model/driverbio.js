/* eslint-disable no-undef */
 const mongoose = require("mongoose")

 const driverBioModel = mongoose.Schema(
   {
     fname: {
       type: String,
       require: true,
     },
     lname: {
       type: String,
       require: true,
     },
     insurerEmail: {
       type: String,
       require: true,
     },
     homeAddress: {
       type: String,
       require: true,
     },
     contact: {
       type: String,
       require: true,
     },
     email: {
       type: String,
       require: true,
     },
   },
   { timestamps: true }
 );


 module.exports = mongoose.model("driverBio", driverBioModel);