const usermodel = require("../model/userSignup");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");

dotenv.config();

const userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.send(
        { 
            message: "Access denied",
            success: false
        });
  }

  jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
    if (err) {
      return res.send(
        {   
            message: "error with token",
            status: false,
            success: false
        });
    } else {
      const user = await usermodel.findById(data.id);
      if(user){
        return res.send(
            { 
                message: "Success token",
                status: true, user: user.name,
                success: true 
            });
      } 
      else{
       return res.send(
        {   
            message: "access denied",
            status: false,
            success: false
        });
      } 
    }
  });
}

module.exports = userVerification;
