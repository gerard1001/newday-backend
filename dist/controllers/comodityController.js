"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComodities = exports.deleteComodities = exports.createComodity = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var comodityModel = _models["default"].Comodity;

var createComodity = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return comodityModel.findOrCreate({
              comodityName: req.body.comodityName,
              description: req.body.description,
              where: {
                comodityName: req.body.comodityName // description: req.body.description,

              }
            }).then(function (data) {
              if (data[1]) {
                return res.status(201).send({
                  message: "You have successully added a new comodity!!!",
                  data: data
                });
              } else {
                return res.status(409).send({
                  error: "This comodity name is already taken!"
                });
              }
            })["catch"](function (err) {
              return res.status(400).send(err);
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function createComodity(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createComodity = createComodity;

var getComodities = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return comodityModel.findAll({// include: [{ model: model.User, as: "Users", attributes: ["email"] }],
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

  return function getComodities(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getComodities = getComodities;

var deleteComodities = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return comodityModel.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " comodity successfully!")
                });
              } else {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " comodities successfully!")
                });
              }
            })["catch"](function (err) {
              return res.status(403).send({
                error: "An error occured while deleting comodity!"
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

  return function deleteComodities(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteComodities = deleteComodities;