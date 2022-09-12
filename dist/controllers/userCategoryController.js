"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAssignment = exports.getAssignments = exports.assignUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var ucModel = _models["default"].User_Category;
var categoryModel = _models["default"].Category;
var userModel = _models["default"].User;

var assignUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var existingUser, existingCategory, existingRelation;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return userModel.findOne({
              where: {
                userId: req.body.userId
              }
            });

          case 3:
            existingUser = _context.sent;
            _context.next = 6;
            return categoryModel.findOne({
              where: {
                categoryId: req.body.categoryId
              }
            });

          case 6:
            existingCategory = _context.sent;
            _context.next = 9;
            return ucModel.findOne({
              where: {
                userId: req.body.userId,
                categoryId: req.body.categoryId
              }
            });

          case 9:
            existingRelation = _context.sent;

            if (!(!existingCategory || !existingUser)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: "The category or user you are trying assign no longer exists!!!"
            }));

          case 12:
            if (!(existingUser.roleId != 2 && existingUser.roleId != 3)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "You can't assign this category to client or admin."
            }));

          case 14:
            if (!existingRelation) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", res.status(409).send({
              message: "This relation has aready been established!!!"
            }));

          case 16:
            _context.next = 18;
            return ucModel.create({
              userId: req.body.userId,
              categoryId: req.body.categoryId,
              where: {
                userId: req.body.userId,
                categoryId: req.body.categoryId
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Success. Link made btn the user and category!!!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send(err);
            });

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function assignUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.assignUser = assignUser;

var getAssignments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return ucModel.findAll({}).then(function (data) {
              return res.status(200).send({
                message: "Fetched all the assigned users and categories!!!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERR",
                err: err
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

  return function getAssignments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAssignments = getAssignments;

var getOneAssignment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return ucModel.findOne({
              where: {
                ucId: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched one assignment!!!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERR",
                err: err
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

  return function getOneAssignment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneAssignment = getOneAssignment;