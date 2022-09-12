"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTweet = exports.sendEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

require("dotenv/config");

var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(message, toEmail) {
    var transporter, mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transporter = _nodemailer["default"].createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
              }
            });
            mailOptions = {
              from: process.env.SENDER_EMAIL,
              to: toEmail,
              subject: "NEWDAY REGISTRATION",
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

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendEmail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendEmail = sendEmail;

var sendTweet = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(message, toEmail) {
    var transporter, mailOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            transporter = _nodemailer["default"].createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
              }
            });
            mailOptions = {
              from: process.env.SENDER_EMAIL,
              to: toEmail,
              subject: "TWEET FROM NEWDAY.",
              html: message
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                return console.log(error);
              }

              res.render("contact", {
                msg: "Tweet successfully sent!!!"
              });
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sendTweet(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendTweet = sendTweet;