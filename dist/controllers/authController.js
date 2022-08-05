"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = _interopRequireDefault(require("../database/models"));

var _appError = _interopRequireDefault(require("../utils/appError"));

var _util = require("util");

var signToken = function signToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, 'manzivalentin123', {
    //secret key
    expiresIn: '1d' // time to expire

  });
};

var createSendToken = function createSendToken(user, statusCode, res) {
  var token = signToken(user.id); //   //remove the password from the output
  //   user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token: token,
    data: {
      user: user
    }
  });
}; //FOR LOGIN


exports.login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, email, Password, user, correctPassword;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, Password = _req$body.Password; //1)Check if email & password exist.

            if (!email || !Password) {
              next(res.send({
                message: "Incorrect email or password"
              }));
            } //2)Check if user exist and password is correct


            _context2.next = 4;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 4:
            user = _context2.sent;

            correctPassword = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(candidatePassword, userPassword) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _bcrypt["default"].compare(candidatePassword, userPassword);

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function correctPassword(_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.t0 = !user;

            if (_context2.t0) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return correctPassword(Password, user.Password);

          case 10:
            _context2.t0 = !_context2.sent;

          case 11:
            if (!_context2.t0) {
              _context2.next = 13;
              break;
            }

            next(res.send({
              message: "Incorrect email or password"
            }));

          case 13:
            //3)if everything is ok, then send token to user
            createSendToken(user, 200, res);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //FOR PROTECTING ROUTES


exports.protect = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var token, decoded, freshUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //1 Getting token and check its there
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
              token = req.headers.authorization.split('')[1];
            } // console.log(token)


            if (token) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", next(new _appError["default"]('You are not logged in', 401)));

          case 3:
            _context3.next = 5;
            return (0, _util.promisify)(_jsonwebtoken["default"].verify)(token, 'manzivalentin123');

          case 5:
            decoded = _context3.sent;
            _context3.next = 8;
            return _models["default"].User.findOne({
              where: {
                id: decoded.id
              }
            });

          case 8:
            freshUser = _context3.sent;

            if (freshUser) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", next(new _appError["default"]('The token longer exist.', 401)));

          case 11:
            next();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();