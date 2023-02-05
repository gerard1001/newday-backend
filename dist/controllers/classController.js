"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClass = exports.getOneClass = exports.getClasses = exports.getClassProducts = exports.deleteOneClass = exports.deleteClasses = exports.createClass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var classModel = _models["default"].Class;

var createClass = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var className;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            className = req.data.className; // if (req.file) {
            //   req.data.coverImage = await fileUpload(req);
            // } else {
            //   req.data.coverImage =
            //     "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";
            // }

            if (className) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: "Please make sure you include the className."
            }));

          case 4:
            _context.next = 6;
            return classModel.findOrCreate({
              where: {
                className: req.data.className,
                coverImage: req.data.coverImage
              }
            }).then(function (data) {
              if (data[1]) {
                return res.status(201).send({
                  message: "successfully created!",
                  body: {
                    data: data
                  }
                });
              } else {
                return res.status(409).send({
                  error: "This class already exists!"
                });
              }
            })["catch"](function (err) {
              console.log("******************", err);
              return res.status(403).send(err);
            });

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              error: "".concat(_context.t0)
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function createClass(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClass = createClass;

var getClasses = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return classModel.findAndCountAll({
              order: [["className", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                order: [["productName", "ASC"]]
              }, {
                model: _models["default"].Category,
                as: "Categories",
                order: [["categoryName", "ASC"]]
              }]
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all class elements",
                body: data.rows,
                count: data.count
              });
            })["catch"](function (err) {
              return res.status(403).send({
                message: "ERROR",
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

  return function getClasses(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClasses = getClasses;

var getOneClass = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return classModel.findOne({
              order: [["className", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                order: [["productName", "ASC"]]
              }],
              where: {
                classId: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched one class",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(403).send({
                message: "ERROR ",
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

  return function getOneClass(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneClass = getOneClass;

var getClassProducts = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return classModel.findOne({
              order: [["className", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                order: [["productName", "ASC"]]
              }],
              where: {
                classId: id
              }
            }).then(function (datas) {
              var data = datas.Products;
              console.log(data.Products);
              return res.status(200).send({
                message: "Fetched class's products",
                data: data
              });
            })["catch"](function (err) {
              return res.status(403).send({
                message: "ERROR ",
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

  return function getClassProducts(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getClassProducts = getClassProducts;

var updateClass = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;

            if (!req.file) {
              _context5.next = 8;
              break;
            }

            _context5.next = 5;
            return (0, _fileUpload.fileUpload)(req);

          case 5:
            req.body.coverImage = _context5.sent;
            _context5.next = 9;
            break;

          case 8:
            req.body.coverImage = "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";

          case 9:
            _context5.next = 11;
            return classModel.update(req.body, {
              where: {
                classId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.status(200).send({
                  message: "Updated class 1 successfully!"
                });
              } else {
                return res.status(400).send({
                  message: "Cannot update class 1 ".concat(id, "!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              return res.status(403).send({
                message: "error while trying to update!"
              });
            });

          case 11:
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).send({
              message: "".concat(_context5.t0)
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function updateClass(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateClass = updateClass;

var deleteClasses = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return classModel.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " class one element successfully!")
                });
              } else {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " class one elements successfully!")
                });
              }
            })["catch"](function (err) {
              return res.status(400).send({
                message: "An error occured while deleting category!"
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

  return function deleteClasses(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteClasses = deleteClasses;

var deleteOneClass = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return classModel.destroy({
              where: {
                classId: id
              },
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " class element successfully!")
                });
              } else {
                return res.status(200).send({
                  message: "Deleted ".concat(data, " class elements successfully!")
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
      }
    }, _callee7, null, [[0, 6]]);
  }));

  return function deleteOneClass(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteOneClass = deleteOneClass;