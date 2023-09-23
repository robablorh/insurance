/* eslint-disable no-undef */
const express = require("express");
const sendMail = require("../controler/sendMailController")

const router = express.Router();

router.post("/sendmail", sendMail);

module.exports = router