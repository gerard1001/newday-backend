"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAssignment = exports.getAssignments = exports.deleteOneAssignment = exports.deleteAllAssignments = exports.assignProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var cpModel = _models["default"].Class_Product;
var classModel = _models["default"].Class;
var productModel = _models["default"].Product;
var assignProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var existingClass, myTuts, checker, makeup, i, existingProduct, existingRelation, getBulkArr;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return classModel.findOne({
            where: {
              classId: req.body.classId
            }
          });
        case 3:
          existingClass = _context.sent;
          if (existingClass) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            error: "The Class you are trying assign doesn't exist."
          }));
        case 6:
          myTuts = req.body.productId.split(", ");
          checker = [];
          makeup = [];
          i = 0;
        case 10:
          if (!(i < myTuts.length)) {
            _context.next = 23;
            break;
          }
          _context.next = 13;
          return productModel.findOne({
            where: {
              productId: myTuts[i]
            }
          });
        case 13:
          existingProduct = _context.sent;
          _context.next = 16;
          return cpModel.findOne({
            where: {
              classId: req.body.classId,
              productId: myTuts[i]
            }
          })["catch"](function (err) {
            console.log("".concat(err));
          });
        case 16:
          existingRelation = _context.sent;
          console.log(existingRelation, "*11111111111111*");
          if (!existingRelation && existingProduct) {
            makeup.push(i);
          }
          checker.push(existingRelation);
        case 20:
          i++;
          _context.next = 10;
          break;
        case 23:
          console.log(checker, "*CHECKER*");
          console.log(makeup, "*MAKEUP*");
          if (!(makeup == "")) {
            _context.next = 27;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            error: "All these relations have already been made."
          }));
        case 27:
          // console.log(checkIfRelationExists(myTuts), "*22222222222*");
          // if (existingRelation) {
          //   return res.status(409).send({
          //     error: "This relation has aready been established.",
          //   });
          // }
          getBulkArr = function getBulkArr(myTuts) {
            var arr = [];
            var newArr = [];
            for (var _i = 0; _i < myTuts.length; _i++) {
              var obj = {};
              obj["classId"] = req.body.classId;
              obj["productId"] = myTuts[_i];
              arr.push(obj);
            }
            console.log(arr, "*2222222222222*");
            for (var _i2 = 0; _i2 < arr.length; _i2++) {
              if (makeup.includes(_i2)) {
                newArr.push(arr[_i2]);
              }
            }
            console.log(newArr, "*252525*");
            return newArr;
          };
          console.log(getBulkArr(myTuts), "*333333333333333*");
          _context.next = 31;
          return cpModel.bulkCreate(
          //   {
          //   classId: req.body.classId,
          //   productId: req.body.productId,
          //   where: {
          //     classId: req.body.classId,
          //     productId: req.body.productId,
          //   },
          // }
          getBulkArr(myTuts)).then(function (data) {
            return res.status(200).send({
              message: "Link made between the class and product successfully.",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        case 31:
          _context.next = 38;
          break;
        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          console.log(req.body, "&&&&&&&");
          return _context.abrupt("return", res.status(400).send({
            error: "Fill all the fields ".concat(_context.t0, ".")
          }));
        case 38:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 33]]);
  }));
  return function assignProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.assignProduct = assignProduct;
var getAssignments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return cpModel.findAndCountAll({}).then(function (data) {
            return res.status(200).send({
              message: "Fetched all the assigned classes and products!!!",
              body: data.rows
            });
          })["catch"](function (err) {
            return res.status(400).send({
              error: "ERR",
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
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return cpModel.findOne({
            where: {
              classProductId: id
            }
          }).then(function (data) {
            return res.status(200).send({
              message: "Fetched one assignment!!!",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send({
              error: "ERR",
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
            error: "".concat(_context3.t0)
          }));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function getOneAssignment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneAssignment = getOneAssignment;
var deleteOneAssignment = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return cpModel.destroy({
            where: {
              categoryClassId: id
            }
          }).then(function (data) {
            return res.status(200).send({
              message: "Deleted one assignment!!!",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 4:
          _context4.next = 9;
          break;
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function deleteOneAssignment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteOneAssignment = deleteOneAssignment;
var deleteAllAssignments = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return cpModel.destroy({
            where: {}
          }).then(function (data) {
            return res.status(200).send({
              message: "Deleted all assignments!!!",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 3:
          _context5.next = 8;
          break;
        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return function deleteAllAssignments(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAllAssignments = deleteAllAssignments;