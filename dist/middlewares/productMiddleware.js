"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyAuth = exports.ComodityAuth = exports.Auth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userHelper = require("../helpers/userHelper");

var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));

var _models = _interopRequireDefault(require("../database/models"));

var userModel = _models["default"].User;

var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              error: "You are not logged in!!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context.next = 7;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role"]
              }]
            });

          case 7:
            newUser = _context.sent;

            if (!(newUser.roleId !== 1 && newUser.roleId !== 2 && newUser.roleId !== 3 && newUser.roleId !== 4)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              error: "This action can only be performed by the admin or manager !!"
            }));

          case 10:
            req.user = newUser;
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              error: "".concat(_context.t0)
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.Auth = Auth;

var CompanyAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(401).send({
              error: "You are not logged in!!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context2.next = 7;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role"]
              }]
            });

          case 7:
            newUser = _context2.sent;

            if (!(newUser.roleId !== 1 && newUser.roleId !== 2)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).send({
              error: "This action can only be performed by the super-admin or a registered owner !!"
            }));

          case 10:
            req.user = newUser;
            next();
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              error: "".concat(_context2.t0)
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function CompanyAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CompanyAuth = CompanyAuth;

var ComodityAuth = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(401).send({
              error: "You are not logged in!!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context3.next = 7;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role"]
              }]
            });

          case 7:
            newUser = _context3.sent;

            if (!(newUser.roleId !== 1 && newUser.roleId !== 2 && newUser.roleId !== 3)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(401).send({
              error: "This action can only be performed by the super-admin, a registered owner or an admin!!"
            }));

          case 10:
            req.user = newUser;
            next();
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              error: "".concat(_context3.t0)
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function ComodityAuth(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.ComodityAuth = ComodityAuth;