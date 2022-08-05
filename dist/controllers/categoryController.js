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
            _context.next = 2;
            return categoryRoutes.findOrCreate({
              categoryName: req.body.categoryName,
              where: {
                categoryName: req.body.categoryName
              }
            }).then(function (created) {
              if (created[1]) {
                res.status(201).send({
                  message: "successfully created!",
                  created: created
                });
              } else {
                res.send({
                  message: "This category already exists!"
                });
              }
            })["catch"](function (err) {
              res.status(500).send({
                message: "You got an error: ".concat(err)
              });
              console.log(err);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
            _context2.next = 2;
            return categoryRoutes.findAll({
              order: [["categoryName", "ASC"]],
              include: [{
                model: _models["default"].subCategoryOne,
                as: "subCategoryOnes",
                attributes: ["catOneName"],
                order: [["catOneName", "ASC"]]
              }]
            }).then(function (data) {
              res.status(200).send({
                message: "Fetched all categories",
                data: data
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
            id = req.params.id;
            _context3.next = 3;
            return categoryRoutes.findOne({
              attributes: ["categoryName"],
              order: [["categoryName", "ASC"]],
              include: [{
                model: _models["default"].User,
                as: "Users",
                attributes: ["firstName", "lastName", "email"],
                include: [{
                  model: _models["default"].Role,
                  as: "Roles",
                  attributes: ["role"]
                }]
              }, {
                model: _models["default"].subCategoryOne,
                as: "subCategoryOnes",
                attributes: ["catOneName"],
                order: [["catOneName", "ASC"]],
                include: [{
                  model: _models["default"].subCategoryTwo,
                  as: "subCategoryTwos",
                  attributes: ["catTwoName"],
                  order: [["catTwoName", "ASC"]],
                  include: [{
                    model: _models["default"].Product,
                    as: "Products",
                    attributes: ["productName", "price", "productImage"],
                    order: [["productName", "ASC"]]
                  }]
                }]
              }],
              where: {
                categoryName: id
              }
            }).then(function (data) {
              res.status(200).send({
                message: "Fetched all categories",
                data: data
              });
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
            id = req.params.id;
            _context4.next = 3;
            return categoryRoutes.update(req.body, {
              where: {
                categoryName: id
              }
            }).then(function (data) {
              res.status(200).send({
                message: "Category updated successfylly!"
              });
            })["catch"](function (err) {
              res.status(500).send({
                message: "An error occured while updated category!"
              });
              console.log(err);
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
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
            _context5.next = 2;
            return categoryRoutes.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                res.status(200).send({
                  message: "Deleted ".concat(data, " category successfully!")
                });
              } else {
                res.status(200).send({
                  message: "Deleted ".concat(data, " categories successfully!")
                });
              }
            })["catch"](function (err) {
              res.status(500).send({
                message: "An error occured while deleting category!"
              });
              console.log(err);
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteCategory(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCategory = deleteCategory;