"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getOneCategory = exports.getCategory = exports.deleteCategory = exports.createCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var categoryRoutes = _models["default"].Category;

var createCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
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
                return res.status(403).send({
                  message: "This category already exists!"
                });
              }
            })["catch"](function (err) {
              return res.status(500).send({
                message: "You got an error: ".concat(err)
              });
            });

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log("++++++++++++++++++=", _context.t0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function createCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCategory = createCategory;

var getCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
      while (1) {
        switch (_context3.prev = _context3.next) {
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
                categoryName: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all categories",
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
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function getOneCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneCategory = getOneCategory;

var updateCategory = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
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
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function updateCategory(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCategory = updateCategory;

var deleteCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
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
                message: "An error occured while deleting category!"
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
      }
    }, _callee5, null, [[0, 5]]);
  }));

  return function deleteCategory(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCategory = deleteCategory;