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
var companyModel = _models["default"].Company;

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$data, productName, price, companyId, existCompany;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$data = req.data, productName = _req$data.productName, price = _req$data.price, companyId = _req$data.companyId;
            _context.next = 4;
            return companyModel.findOne({
              where: {
                companyId: companyId
              }
            })["catch"](function (err) {
              console.log(err, "**");
              return res.send({
                error: "".concat(err)
              });
            });

          case 4:
            existCompany = _context.sent;
            console.log(existCompany, "&&");

            if (existCompany) {
              _context.next = 9;
              break;
            }

            console.log("You can't do this!");
            return _context.abrupt("return", res.status(400).send({
              error: "This company you are trying to use is note registered!"
            }));

          case 9:
            if (!(!productName && !price)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: "Please make sure you include the product name and price!"
            }));

          case 13:
            productModel.findOne({
              where: {
                productName: productName
              }
            }).then(function (exist) {
              if (exist) {
                return res.status(409).send({
                  error: "this product already exists"
                });
              } else {
                return productModel.create({
                  productName: req.data.productName,
                  companyId: req.data.companyId,
                  price: req.data.price,
                  full_price: req.data.full_price,
                  description: req.data.description,
                  size: req.data.size,
                  images: req.data.images,
                  imagesId: req.data.imagesId,
                  brand: req.data.brand,
                  ISBN: req.data.ISBN,
                  releaseDate: req.data.releaseDate,
                  where: {
                    productName: req.data.productName,
                    companyId: req.data.companyId,
                    price: req.data.price,
                    full_price: req.data.full_price,
                    description: req.data.description,
                    images: req.data.images,
                    imagesId: req.data.imagesId,
                    size: req.data.size,
                    brand: req.data.brand,
                    ISBN: req.data.ISBN,
                    releaseDate: req.data.releaseDate
                  }
                }).then(function (data) {
                  return res.status(201).send({
                    message: "Success!",
                    data: data
                  });
                })["catch"](function (err) {
                  return res.status(400).send({
                    error: "".concat(err.message),
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
              error: "".concat(_context.t0.message)
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

            size = 100;

            if (!Number.isNaN(sizeASNbr) && sizeASNbr > 0 && size < 100) {
              size = sizeASNbr;
            }

            _context2.next = 9;
            return productModel.findAndCountAll({
              limit: size,
              offset: page * size,
              include: [{
                model: _models["default"].ProductImage,
                as: "ProductImages"
              }, {
                model: _models["default"].Class,
                as: "Classes",
                include: [{
                  model: _models["default"].Category,
                  as: "Categories"
                }]
              }, {
                model: _models["default"].Company,
                as: "Company"
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
              include: [{
                model: _models["default"].ProductImage,
                as: "ProductImages"
              }],
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
            _context4.next = 4;
            return productModel.update(req.data, {
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