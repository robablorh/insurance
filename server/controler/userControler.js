/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const usermodel = require("../model/userSignup");
const {secret} = require("../util/tokenkey");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");

const signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    //checking if the user exits in the database
    const checkIfEmaiexist = await usermodel.findOne({ email });
    if (checkIfEmaiexist) {
      return res.status(401).send({
        message: "email already exist",
        success: false,
      });
    }

    if (password !== confirmPassword) {
      return res.status(406).send({
        message: "password dont match",
        success: false,
      });
    }
    // create new user
    const newUser = await usermodel.create({
      name,
      email,
      password,
      confirmPassword,
    });

    //generate token
    const token = secret(newUser._id);

    //save token in cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).send({
      message: "User signed up successfully",
      success: true,
      data: newUser,
    });
    next();
  } catch (error) {
    return res.status(500).send({
      message: `Error at user creation`,
      success: false,
      //newUser,
    });
    console.error(error);
  }
};
/*
const allusers = async (req,res) => {
    try {
        const user = usermodel.find()
        res.send({
            message: "user Retrieve"
        })
    } catch (error) {
        
    }
}
*/



module.exports = signup;
