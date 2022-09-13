"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAuth = exports.reviewAuth = exports.deleteAuth = exports.authent = exports.Auth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userHelper = require("../helpers/userHelper");

var _models = _interopRequireDefault(require("../database/models"));

var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));

var userModel = _models["default"].User;

var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, legalUser;
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
              message: "Unauthorized to perform this action."
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context.next = 7;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role", "roleId"]
              }]
            });

          case 7:
            legalUser = _context.sent;

            if (!(legalUser.roleId != 1)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              message: "This action can only be performed by the admin!!!"
            }));

          case 10:
            req.user = legalUser;
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
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

var updateAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, token, decode, newUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(401).send({
              message: "you are not logged in!!"
            }));

          case 5:
            decode = (0, _userHelper.decodeToken)(token);
            _context2.next = 8;
            return userModel.findByPk(decode.userId, {});

          case 8:
            newUser = _context2.sent;

            if (!(id.id !== newUser.userId && newUser.roleId !== 1)) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).send({
              message: "You can not update someone else's data."
            }));

          case 11:
            next();
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              message: "".concat(_context2.t0)
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function updateAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateAuth = updateAuth;

var deleteAuth = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, token, decode, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(401).send({
              message: "you are not logged in!!"
            }));

          case 5:
            decode = (0, _userHelper.decodeToken)(token);
            _context3.next = 8;
            return userModel.findByPk(decode.userId, {});

          case 8:
            newUser = _context3.sent;

            if (!(id.id !== newUser.userId && newUser.roleId !== 1)) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(401).send({
              message: "You can not delete someone else's account."
            }));

          case 11:
            next();
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function deleteAuth(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteAuth = deleteAuth;

var authent = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var token, decode, exixtUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", res.status(401).send({
              message: "you are not logged in!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context4.next = 7;
            return userModel.findByPk(decode.userId, {});

          case 7:
            exixtUser = _context4.sent;

            if (exixtUser) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(401).send({
              message: "This user does not exist."
            }));

          case 10:
            next();
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).send({
              message: "".concat(_context4.t0)
            }));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function authent(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.authent = authent;

var reviewAuth = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            token = (0, _checkToken["default"])(req);

            if (token) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(401).send({
              message: "You are not logged in!!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context5.next = 7;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role"]
              }]
            });

          case 7:
            newUser = _context5.sent;

            if (!(newUser.roleId !== 1 && newUser.roleId !== 2)) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", res.status(401).send({
              message: "This action can only be performed by the admin or manager !!"
            }));

          case 10:
            req.user = newUser;
            next();
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).send({
              message: "".concat(_context5.t0)
            }));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));

  return function reviewAuth(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.reviewAuth = reviewAuth;