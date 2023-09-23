/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
const usermodel = require("../model/userSignup")
const bcrypt = require("bcrypt")
const { secret } = require("../util/tokenkey");

const login  = async (req, res) => {
   try {
    const { email, password } = req.body

    if(!email || !password){
        return res.send({
            message: "All fields are required",
            success:false
        })
    }
    
    const user = await usermodel.findOne({email})
    if(!user){
        return res.send({
            message: "email does not exist",
            success: false
        })
    }

     //console.log(user)
    const userpassword = await bcrypt.compare(password,user.password)
    if(!userpassword){
        return res.send({
            message: "Invalid password",
            success: false
        })
    }

    const token = secret(user._id)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: false,
      sameSite:"Lax",
    });
    res.status(201).send(
        { 
            message: "User logged in successfully", 
            success: true,
            user: {
                name: user.name,
                email: user.email
            }
        }
    );
    //next();
   } catch (error) {
    return res.send({
        message: "Network Error",
        success: false
    })
    console.error(error);
   }
}

module.exports = login