const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");

dotenv.config()


module.exports.secret = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};