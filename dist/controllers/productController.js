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

var productModel = _models["default"].Product;
var classTwoModel = _models["default"].subCategoryTwo;

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, productName, price, catTwoId, existCatTwo;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, productName = _req$body.productName, price = _req$body.price, catTwoId = _req$body.catTwoId;
            _context.next = 4;
            return classTwoModel.findOne({
              where: {
                catTwoId: catTwoId
              }
            });

          case 4:
            existCatTwo = _context.sent;

            if (existCatTwo) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: "This class does not exist!"
            }));

          case 7:
            if (!req.file) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return (0, _fileUpload.fileUpload)(req);

          case 10:
            req.body.productImage = _context.sent;
            _context.next = 14;
            break;

          case 13:
            req.body.productImage = "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";

          case 14:
            if (!(!productName && !price)) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Please make sure you include the product name and price!"
            }));

          case 18:
            productModel.findOne({
              where: {
                productName: productName,
                catTwoId: catTwoId
              }
            }).then(function (exist) {
              if (exist) {
                return res.status(409).send({
                  message: "this product already exists"
                });
              } else {
                return productModel.create({
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
                  return res.status(201).send({
                    message: "Success!",
                    data: data
                  });
                })["catch"](function (err) {
                  return res.status(400).send({
                    message: "ERR",
                    err: err
                  });
                });
              }
            });

          case 19:
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
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
            _context2.prev = 0;
            _context2.next = 3;
            return productModel.findAll({
              // attributes: {exclude: [
              //     "categoryId", "classOneId"
              // ]},
              include: [{
                model: _models["default"].ProductComment,
                as: "ProductComments",
                attributes: ["comment"]
              }]
            }).then(function (data) {
              return res.status(200).send({
                message: "List of all fruits available!",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(400).send(err);
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
            _context3.prev = 0;
            id = req.params.id;

            if (!req.file) {
              _context3.next = 6;
              break;
            }

            _context3.next = 5;
            return (0, _fileUpload.fileUpload)(req);

          case 5:
            req.body.picture = _context3.sent;

          case 6:
            _context3.next = 8;
            return productModel.update(req.body, {
              where: {
                productId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.status(200).send({
                  message: "Updated product successfully!"
                });
              } else {
                return res.status(400).send({
                  message: "Cannot update product ".concat(id, "!")
                });
              }
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERR",
                err: err
              });
            });

          case 8:
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
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
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return productModel.destroy({
              where: {
                productId: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Deleted product successfully!",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "error!",
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
      }
    }, _callee4, null, [[0, 6]]);
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
            _context5.prev = 0;
            _context5.next = 3;
            return productModel.destroy({
              where: {}
            }).then(function (data) {
              if (data === 1) {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " product successfully!")
                });
              } else if (data === 0) {
                return res.status(403).send({
                  message: "You don't have any more products to delete!"
                });
              } else {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " products successfully!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              return res.status(400).send({
                message: "You got an error@!",
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
      }
    }, _callee5, null, [[0, 5]]);
  }));

  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;