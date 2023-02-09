"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getOneCategory = exports.getCategoryClasses = exports.getCategory = exports.deleteOneCategory = exports.deleteCategory = exports.createCategory = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var categoryRoutes = _models["default"].Category;
var createCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var categoryName;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          categoryName = req.body.categoryName;
          if (!(categoryName == "")) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            error: "Fill in the missing field please."
          }));
        case 4:
          _context.next = 6;
          return categoryRoutes.findOrCreate({
            categoryName: req.body.categoryName,
            where: {
              categoryName: req.body.categoryName
            }
          }).then(function (created) {
            if (created[1]) {
              return res.status(201).send({
                message: "successfully created!",
                created: created
              });
            } else {
              return res.status(409).send({
                error: "This category already exists!"
              });
            }
          })["catch"](function (err) {
            return res.status(400).send({
              error: "Please include the category name. ".concat(err)
            });
          });
        case 6:
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCategory = createCategory;
var getCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return categoryRoutes.findAndCountAll({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }]
          }).then(function (data) {
            console.log(data);
            return res.status(200).send({
              message: "Fetched all categories",
              body: data.rows,
              count: data.count
            });
          })["catch"](function (err) {
            console.log("++++++++++++++++++=", err.message);
            return res.status(403).send({
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
    }, _callee2, null, [[0, 5]]);
  }));
  return function getCategory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getCategory = getCategory;
var getOneCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return categoryRoutes.findOne({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }],
            where: {
              categoryId: id
            }
          }).then(function (data) {
            return res.status(200).send({
              message: "Fetched One category",
              data: data
            });
          })["catch"](function (err) {
            return res.status(403).send({
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
    }, _callee3, null, [[0, 6]]);
  }));
  return function getOneCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneCategory = getOneCategory;
var getCategoryClasses = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          if (!(id == "" || id == undefined)) {
            _context4.next = 5;
            break;
          }
          console.log("NOOOOO IDDDDDDD!!");
          return _context4.abrupt("return", res.send({
            message: "NOOOOO IDDDDDDD!!!"
          }));
        case 5:
          _context4.next = 7;
          return categoryRoutes.findOne({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }],
            where: {
              categoryId: id
            }
          }).then(function (datas) {
            var data = datas.Classes;
            console.log("````````               ````````````", id);
            return res.status(200).send({
              message: "Fetched all category classes",
              data: data
            });
          })["catch"](function (err) {
            return res.status(403).send({
              message: "".concat(err)
            });
          });
        case 7:
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function getCategoryClasses(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getCategoryClasses = getCategoryClasses;
var updateCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return categoryRoutes.update(req.body, {
            categoryName: req.body.categoryName,
            userId: req.body.userId,
            where: {
              categoryId: id
            }
          }).then(function (data) {
            return res.status(200).send({
              message: "Category updated successfully!"
            });
          })["catch"](function (err) {
            return res.status(403).send({
              message: "An error occured while updated category!"
            });
            console.log(err);
          });
        case 4:
          _context5.next = 9;
          break;
        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function updateCategory(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateCategory = updateCategory;
var deleteCategory = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return categoryRoutes.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            if (data === 1) {
              return res.status(200).send({
                message: "Deleted ".concat(data, " category successfully!")
              });
            } else {
              return res.status(200).send({
                message: "Deleted ".concat(data, " categories successfully!")
              });
            }
          })["catch"](function (err) {
            return res.status(403).send({
              error: "An error occured while deleting category!"
            });
          });
        case 3:
          _context6.next = 8;
          break;
        case 5:
          _context6.prev = 5;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send({
            error: "".concat(_context6.t0)
          }));
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 5]]);
  }));
  return function deleteCategory(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteCategory = deleteCategory;
var deleteOneCategory = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return categoryRoutes.destroy({
            where: {
              categoryId: id
            },
            truncate: false
          }).then(function (data) {
            if (data === 1) {
              return res.status(200).send({
                message: "Deleted ".concat(data, " category element successfully!")
              });
            } else {
              return res.status(200).send({
                message: "Deleted ".concat(data, " category elements successfully!")
              });
            }
          })["catch"](function (err) {
            return res.status(400).send({
              message: "An error occured while deleting category!",
              err: err
            });
          });
        case 4:
          _context7.next = 9;
          break;
        case 6:
          _context7.prev = 6;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).send({
            message: "".concat(_context7.t0)
          }));
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 6]]);
  }));
  return function deleteOneCategory(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteOneCategory = deleteOneCategory;