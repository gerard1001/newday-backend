"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProduct = exports.getOneProduct = exports.deleteProduct = exports.deleteOneProduct = exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var productModel = _models["default"].Product;

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, productName, price;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, productName = _req$body.productName, price = _req$body.price;

            if (!req.file) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return (0, _fileUpload.fileUpload)(req);

          case 5:
            req.body.productImage = _context.sent;
            _context.next = 9;
            break;

          case 8:
            req.body.productImage = "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";

          case 9:
            if (!(!productName && !price)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Please make sure you include the product name and price!"
            }));

          case 13:
            productModel.findOne({
              where: {
                productName: productName
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
                  description: req.body.description,
                  size: req.body.size,
                  productImage: req.body.productImage,
                  author: req.body.author,
                  ISBN: req.body.ISBN,
                  edition: req.body.edition,
                  releaseDate: req.body.releaseDate,
                  where: {
                    productName: req.body.productName,
                    price: req.body.price,
                    description: req.body.description,
                    size: req.body.size,
                    productImage: req.body.productImage,
                    author: req.body.author,
                    ISBN: req.body.ISBN,
                    edition: req.body.edition,
                    releaseDate: req.body.releaseDate
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

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pageAsNbr, sizeASNbr, page, size;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            pageAsNbr = Number.parseInt(req.query.page);
            sizeASNbr = Number.parseInt(req.query.size);
            page = 0;

            if (!Number.isNaN(pageAsNbr) && pageAsNbr > 0) {
              page = pageAsNbr;
            }

            size = 50;

            if (!Number.isNaN(sizeASNbr) && sizeASNbr > 0 && size < 100) {
              size = sizeASNbr;
            }

            _context2.next = 9;
            return productModel.findAndCountAll({
              limit: size,
              offset: page * size,
              include: [{
                model: _models["default"].ProductComment,
                as: "ProductComments" // attributes: ["comment"],

              }, {
                model: _models["default"].Class,
                as: "Classes",
                include: [{
                  model: _models["default"].Category,
                  as: "Categories"
                }]
              }]
            }).then(function (data) {
              return res.status(200).send({
                message: "List of all products available!",
                body: data.rows,
                totalPages: Math.ceil(data.count / size),
                currentPage: page + 1,
                count: data.count
              });
            })["catch"](function (err) {
              console.log(err);
              return res.status(400).send(err);
            });

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send({
              message: "".concat(_context2.t0)
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var getOneProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return productModel.findOne({
              where: {
                productId: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(403).send({
                message: "ERROR",
                err: err
              });
            });

          case 4:
            _context3.next = 10;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function getOneProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneProduct = getOneProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;

            if (!req.file) {
              _context4.next = 6;
              break;
            }

            _context4.next = 5;
            return (0, _fileUpload.fileUpload)(req);

          case 5:
            req.body.picture = _context4.sent;

          case 6:
            _context4.next = 8;
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
                  message: "Cannot update product ".concat(id, "!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERR",
                err: err
              });
            });

          case 8:
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).send({
              message: "".concat(_context4.t0)
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function updateProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteOneProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
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
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function deleteOneProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteOneProduct = deleteOneProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
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
            _context6.next = 8;
            break;

          case 5:
            _context6.prev = 5;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).send({
              message: "".concat(_context6.t0)
            }));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 5]]);
  }));

  return function deleteProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;