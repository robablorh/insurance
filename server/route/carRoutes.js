/* eslint-disable no-undef */
const express = require("express");
const {
  createCarDetails,
  getAllCarDetails,
  getUsersCar,
  deleteCar,
  carValue,
  getUserCarValueData,
  getAllCarValueDetails,
  driverBio,
  deletCarValueDet,
  getChassisNo,
  history
} = require("../controler/carDetailsController");

const router = express.Router();

router.post("/createCar", createCarDetails);
router.get("/getAllCars", getAllCarDetails);
router.post("/getIndividualCars", getUsersCar);
router.delete("/deleteCar", deleteCar);
router.post("/carValue", carValue);
router.post("/driverBio", driverBio)
router.get("/getAllCarValueDetaila", getAllCarValueDetails);
router.get("/getCarValueData/:email", getUserCarValueData);
router.delete("/delCarValueDet", deletCarValueDet);
router.get("/getChassisNo/:chassisNumber", getChassisNo);
router.get("/history", history);


module.exports = router;
