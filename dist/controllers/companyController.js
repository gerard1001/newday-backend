"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneCompany = exports.getCompanies = exports.deleteCompanies = exports.createCompany = void 0;

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
            console.log(req.data, "&&&&&"); // if (req.file) {
            //   req.body.companyLogo = await fileUpload(req);
            // } else {
            //   req.body.companyLogo =
            //     "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png";
            // }

            _context.next = 6;
            return companyModel.findOrCreate({
              userId: decode.userId,
              companyName: req.data.companyName,
              companyLogo: req.data.companyLogo,
              description: req.data.description,
              companyProducts: req.data.companyProducts,
              address: req.data.address,
              where: {
                userId: decode.userId,
                companyName: req.data.companyName,
                companyLogo: req.data.companyLogo,
                description: req.data.description,
                companyProducts: req.data.companyProducts,
                address: req.data.address
              }
            }).then(function (data) {
              if (data[1]) {
                console.log(data, req.data);
                return res.status(201).send({
                  message: "You have successully registered your company!!!",
                  data: data
                });
              } else {
                console.log(data, req.data);
                return res.status(409).send({
                  error: "This company name is already taken!"
                });
              }
            })["catch"](function (err) {
              console.log(req.data);
              return res.status(400).send(err);
            });

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(req.data);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
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
              }, {
                model: _models["default"].Product,
                as: "Products"
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

var getOneCompany = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return companyModel.findOne({
              where: {
                companyId: id
              }
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

          case 4:
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function getOneCompany(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneCompany = getOneCompany;

var deleteCompanies = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
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
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).send({
              error: "".concat(_context4.t0)
            }));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }));

  return function deleteCompanies(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteCompanies = deleteCompanies;