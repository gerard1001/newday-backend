"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTweets = exports.deleteTweets = exports.createTweet = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
var _fileUpload = require("../helpers/fileUpload");
var _nodemailer = require("../helpers/nodemailer");
var tweetModel = _models["default"].Tweet;
var userModel = _models["default"].User;
var createTweet = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode, users, subscribedUsers, subscribedUsersEmails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = (0, _checkToken["default"])(req);
          decode = (0, _userHelper.decodeToken)(token);
          _context.next = 5;
          return userModel.findAll({});
        case 5:
          users = _context.sent;
          subscribedUsers = users.filter(function (emails) {
            return emails.isSubscribed;
          });
          subscribedUsersEmails = subscribedUsers.map(function (item) {
            return item.email;
          });
          console.log(subscribedUsersEmails);
          if (!req.file) {
            _context.next = 13;
            break;
          }
          _context.next = 12;
          return (0, _fileUpload.fileUpload)(req);
        case 12:
          req.body.image = _context.sent;
        case 13:
          _context.next = 15;
          return tweetModel.create({
            userId: decode.userId,
            title: req.body.title,
            content: req.body.content,
            image: req.body.image
          }).then(function (data) {
            var image = data.image,
              title = data.title,
              content = data.content;
            var message = "\n\n    <div style=\"background:rgb(255, 191, 0); padding: 50px; width: 500px;display: block;margin: auto;\">\n      <h2 style=\"text-align: center; font-family:Arial, Helvetica, sans-serif; text-decoration: underline;text-transform: uppercase;\">".concat(title, "</h2>\n      <p><img width=\"240px\", height=\"240px\", style=\"display: block;margin: auto;\" src=\"").concat(image, "\"></img></p>\n      <p style=\"text-align: center; font-family:Arial, Helvetica, sans-serif;font-size: large;\">").concat(content, "</p>\n    </div>\n\n    ");
            (0, _nodemailer.sendTweet)(message, subscribedUsersEmails);
            return res.status(201).send({
              message: "success!!!",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        case 15:
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function createTweet(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createTweet = createTweet;
var getTweets = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return tweetModel.findAll({}).then(function (tweets) {
            return res.send({
              message: "Fetched all tweets",
              tweets: tweets
            });
          })["catch"](function (err) {
            return res.send({
              err: err
            });
          });
        case 3:
          _context2.next = 8;
          break;
        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          res.send({
            err: err
          });
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function getTweets(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getTweets = getTweets;
var deleteTweets = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return tweetModel.destroy({
            where: {}
          }).then(function (num) {
            if (num === 1) {
              return res.status(200).send({
                message: "Deleted ".concat(num, " tweet successfully!")
              });
            } else if (num === 0) {
              return res.status(403).send({
                message: "You don't have any more tweets to delete!"
              });
            } else {
              return res.status(200).send({
                message: "Deleted ".concat(num, " tweets successfully!")
              });
            }
          })["catch"](function (err) {
            return res.send({
              message: "ERROR",
              err: err
            });
          });
        case 3:
          _context3.next = 8;
          break;
        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          res.send(err);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return function deleteTweets(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.deleteTweets = deleteTweets;