const express = require("express");
const signup /*allusers*/  = require("../controler/userControler");
const login = require("../controler/loginControler")
const userVerification = require("../middleware/authMiddleWare")

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify", userVerification);
//router.get("/allusers", allusers);


module.exports = router;
