"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProduct = exports.deleteProduct = exports.deleteOneProduct = exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var productRoutes = _models["default"].Product;

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, productName, price;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, productName = _req$body.productName, price = _req$body.price;

            if (!req.file) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return (0, _fileUpload.fileUpload)(req);

          case 4:
            req.body.productImage = _context.sent;
            _context.next = 8;
            break;

          case 7:
            req.body.productImage = "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";

          case 8:
            if (!(!productName && !price)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.send({
              message: "Please make sure you include the product name and price!"
            }));

          case 12:
            productRoutes.findOne({
              where: {
                productName: productName
              }
            }).then(function (exist) {
              if (exist) {
                return res.send({
                  message: "this product already exists"
                });
              } else {
                return productRoutes.create({
                  productName: req.body.productName,
                  price: req.body.price,
                  catTwoId: req.body.catTwoId,
                  productImage: req.body.productImage,
                  where: {
                    productName: req.body.productName,
                    price: req.body.price,
                    catTwoId: req.body.catTwoId,
                    productImage: req.body.productImage
                  }
                }).then(function (data) {
                  res.status(201).send({
                    message: "Success!"
                  });
                });
              }
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return productRoutes.findAll({// attributes: {exclude: [
              //     "categoryId", "classOneId"
              // ]},
            }).then(function (data) {
              return res.status(200).send({
                message: "List of all fruits available!",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.send(err);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;

            if (!req.file) {
              _context3.next = 5;
              break;
            }

            _context3.next = 4;
            return (0, _fileUpload.fileUpload)(req);

          case 4:
            req.body.picture = _context3.sent;

          case 5:
            _context3.next = 7;
            return productRoutes.update(req.body, {
              where: {
                productId: id
              } // returning: true,

            }).then(function (data) {
              //    console.log(data);
              if (data == 1) {
                return res.send({
                  message: "Updated product successfully!"
                });
              } else {
                return res.send({
                  message: "Cannot update product ".concat(id, "!")
                });
              }
            })["catch"](function (err) {
              console.log(err);
              return res.send({
                message: ""
              });
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteOneProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return productRoutes.destroy({
              where: {
                productId: id
              }
            }).then(function (data) {
              return res.send({
                message: "Deleted product successfully!",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              console.log(err);
              return res.send({
                message: "error!"
              });
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteOneProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteOneProduct = deleteOneProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return productRoutes.destroy({
              where: {}
            }).then(function (data) {
              if (data === 1) {
                return res.send({
                  message: "Deleted ".concat(data, " product successfully!")
                });
              } else if (data === 0) {
                return res.send({
                  message: "You don't have any more products to delete!"
                });
              } else {
                return res.send({
                  message: "Deleted ".concat(data, " products successfully!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              console.log(err);
              res.send({
                message: "You got an error@!"
              });
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;