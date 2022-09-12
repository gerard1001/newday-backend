"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.seeProfile = exports.createProfile = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var profileModel = _models["default"].Profile;

var createProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, userId, gender, picture, age, phoneNumber;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, userId = _req$body.userId, gender = _req$body.gender, picture = _req$body.picture, age = _req$body.age, phoneNumber = _req$body.phoneNumber;

            if (!req.file) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return fileUpload(req);

          case 5:
            req.body.picture = _context.sent;
            _context.next = 10;
            break;

          case 8:
            if (gender === "female") {
              req.body.picture = "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
            }

            req.body.picture = "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";

          case 10:
            _context.next = 12;
            return profileModel.create({
              where: {
                userId: userId,
                picture: picture,
                age: age,
                gender: gender,
                phoneNumber: phoneNumber
              }
            }).then(function (data) {
              return res.status(201).send({
                message: "Profile created successfully",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "You have an error!",
                err: err
              });
            });

          case 12:
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

  return function createProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProfile = createProfile;

var seeProfile = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return profileModel.get({});

          case 3:
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              message: "".concat(_context2.t0)
            }));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function seeProfile(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.seeProfile = seeProfile;

var updateProfile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return profileModel.update();

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 5]]);
  }));

  return function updateProfile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateProfile = updateProfile;