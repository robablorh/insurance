/* eslint-disable no-undef */
const nodemailer = require("nodemailer");

const sendMail = (req, res) => {

  const {email, content, attachment} = req.body

  if(!email){
    res.send({
        message: "No email was added to the body",
        success:false
    })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "robylex21@gmail.com",
      pass: "rfwepvtnyjjtvgju",
    },
  });

  const mailOptions = {
    from: "nba4everwanted@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    html: {content},
    attachment: [
      {
        filename: "sticker.png",
        content
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({
        message: "failed to send email",
        success: false,
      });
    } else {
      console.log("Email sent: " + info.response);
      res.send({
        message: `Email sent to ${email} successfully: ${info.response}`,
        success: true,
      });
    }
  });
};

module.exports = sendMail;
