"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompanies = exports.deleteCompanies = exports.createCompany = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));

var _userHelper = require("../helpers/userHelper");

var _fileUpload = require("../helpers/fileUpload");

var companyModel = _models["default"].Company;

var createCompany = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = (0, _checkToken["default"])(req);
            decode = (0, _userHelper.decodeToken)(token);

            if (!req.file) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return (0, _fileUpload.fileUpload)(req);

          case 6:
            req.body.companyLogo = _context.sent;
            _context.next = 10;
            break;

          case 9:
            req.body.companyLogo = "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png";

          case 10:
            _context.next = 12;
            return companyModel.findOrCreate({
              userId: decode.userId,
              companyName: req.body.companyName,
              companyLogo: req.body.companyLogo,
              description: req.body.description,
              address: req.body.address,
              where: {
                userId: decode.userId,
                companyName: req.body.companyName,
                description: req.body.description,
                address: req.body.address
              }
            }).then(function (data) {
              if (data[1]) {
                return res.status(201).send({
                  message: "You have successully registered your company!!!",
                  data: data
                });
              } else {
                return res.status(409).send({
                  error: "This company name is already taken!"
                });
              }
            })["catch"](function (err) {
              return res.status(400).send(err);
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

  return function createCompany(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCompany = createCompany;

var getCompanies = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return companyModel.findAll({
              include: [{
                model: _models["default"].User,
                as: "owner"
              }]
            }).then(function (data) {
              return res.send({
                message: "success",
                data: data
              });
            })["catch"](function (err) {
              return res.status(500).send({
                message: "".concat(err)
              });
            });

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

  return function getCompanies(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCompanies = getCompanies;

var deleteCompanies = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return companyModel.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " company successfully!")
                });
              } else {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " companies successfully!")
                });
              }
            })["catch"](function (err) {
              return res.status(403).send({
                error: "An error occured while deleting company!"
              });
            });

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              error: "".concat(_context3.t0)
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 5]]);
  }));

  return function deleteCompanies(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteCompanies = deleteCompanies;