"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

require("dotenv/config");

function sendEmail(message, toEmail) {
  var transporter = _nodemailer["default"].createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: toEmail,
    subject: "Registration Successfull",
    html: message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }

    res.render("contact", {
      msg: "Email successfully sent!!!"
    });
  });
}

var _default = sendEmail;
exports["default"] = _default;