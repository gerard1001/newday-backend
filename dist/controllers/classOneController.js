"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassOne = exports.getOneClassOne = exports.getClassOne = exports.deleteOneClassOne = exports.deleteClassOne = exports.createClassOne = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var classOneModel = _models["default"].subCategoryOne;
var categoryModel = _models["default"].Category;

var createClassOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, catOneName, categoryId, existCategory;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, catOneName = _req$body.catOneName, categoryId = _req$body.categoryId;
            _context.next = 4;
            return categoryModel.findOne({
              where: {
                categoryId: req.body.categoryId
              }
            });

          case 4:
            existCategory = _context.sent;

            if (existCategory) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: "This category does not exist!"
            }));

          case 7:
            if (!(!catOneName && !categoryId)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Please make sure you include both catOneName and category"
            }));

          case 9:
            _context.next = 11;
            return classOneModel.findOrCreate({
              where: {
                catOneName: req.body.catOneName,
                categoryId: req.body.categoryId
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
                  message: "This class already exists!"
                });
              }
            })["catch"](function (err) {
              return res.status(403).send(err);
            });

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createClassOne(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClassOne = createClassOne;

var getClassOne = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return classOneModel.findAll({
              order: [["catOneName", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                order: [["productName", "ASC"]]
              }]
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all classOne elements",
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

  return function getClassOne(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClassOne = getClassOne;

var getOneClassOne = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return classOneModel.findAll({
              order: [["catOneName", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                order: [["productName", "ASC"]]
              }],
              where: {
                catOneName: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all classOne elements",
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

  return function getOneClassOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneClassOne = getOneClassOne;

var updateClassOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return classOneModel.update(req.body, {
              where: {
                catOneName: id
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

  return function updateClassOne(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateClassOne = updateClassOne;

var deleteClassOne = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return classOneModel.destroy({
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

  return function deleteClassOne(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClassOne = deleteClassOne;

var deleteOneClassOne = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return classOneModel.destroy({
              where: {
                catOneName: id
              },
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
                message: "An error occured while deleting category!",
                err: err
              });
            });

          case 4:
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).send({
              message: "".concat(_context6.t0)
            }));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));

  return function deleteOneClassOne(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteOneClassOne = deleteOneClassOne;