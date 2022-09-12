"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeMsg = exports.subscribe = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _userHelper = require("../helpers/userHelper");

var _nodemailer = require("../helpers/nodemailer");

var _checkToken = _interopRequireDefault(require("../../dist/helpers/checkToken"));

var userModel = _models["default"].User;

var subscribeMsg = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userToken, decode, email, id, token, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userToken = (0, _checkToken["default"])(req);
            decode = (0, _userHelper.decodeToken)(userToken);
            email = decode.email;
            id = decode.userId;
            token = (0, _userHelper.generateToken)({
              userId: id
            }, "1d");
            message = "\n        <h2>Got subscription token.</h2>\n        <p>Copy the following token::: <em>".concat(token, "</em></p>\n        ");
            (0, _nodemailer.sendTweet)(message, email);
            console.log(email);
            return _context.abrupt("return", res.send({
              msg: "Sent subscr..."
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function subscribeMsg(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.subscribeMsg = subscribeMsg;

var subscribe = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var token, userInfo, userId, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            token = req.params.token;
            userInfo = (0, _userHelper.decodeToken)(token);
            userId = userInfo.userId;
            console.log(token);
            _context2.next = 7;
            return userModel.findOne({
              where: {
                userId: userId
              }
            });

          case 7:
            user = _context2.sent;
            _context2.next = 10;
            return user.update({
              isSubscribed: true
            }, {
              where: {
                id: userId
              }
            });

          case 10:
            return _context2.abrupt("return", res.status(200).send({
              message: "You have successfully subscribed to our page."
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              message: "".concat(_context2.t0)
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function subscribe(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.subscribe = subscribe;