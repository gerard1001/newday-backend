"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassTwo = exports.getOneClassTwo = exports.getClassTwo = exports.deleteClassTwo = exports.createClassTwo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var classTwoModel = _models["default"].subCategoryTwo;
var classOneModel = _models["default"].subCategoryOne;

var createClassTwo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, catTwoName, catOneId, existCatOne;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, catTwoName = _req$body.catTwoName, catOneId = _req$body.catOneId;
            _context.next = 4;
            return classOneModel.findOne({
              where: {
                catOneId: req.body.catOneId
              }
            });

          case 4:
            existCatOne = _context.sent;

            if (existCatOne) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: "This class does not exist!"
            }));

          case 7:
            if (!(!catTwoName && !catOneId)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Please make sure you include both sub category two Name and catOneId"
            }));

          case 9:
            _context.next = 11;
            return classTwoModel.findOrCreate({
              where: {
                catTwoName: req.body.catTwoName,
                catOneId: req.body.catOneId
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
              return res.status(400).send("err");
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

  return function createClassTwo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClassTwo = createClassTwo;

var getClassTwo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return classTwoModel.findAll({
              order: [["catOneId", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                attributes: ["productName", "price"],
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
              return res.status(400).send({
                message: "ERR",
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

  return function getClassTwo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClassTwo = getClassTwo;

var getOneClassTwo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return classTwoModel.findAll({
              order: [["catOneId", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                attributes: ["productName", "price"],
                order: [["productName", "ASC"]]
              }],
              where: {
                catTwoName: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all classOne elements",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERR",
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

  return function getOneClassTwo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneClassTwo = getOneClassTwo;

var updateClassTwo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return classTwoModel.update(req.body, {
              where: {
                catTwoId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.status(200).send({
                  message: "Updated class 2 successfully!"
                });
              } else {
                return res.status(400).send({
                  message: "Cannot update class 2 ".concat(id, "!"),
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

  return function updateClassTwo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateClassTwo = updateClassTwo;

var deleteClassTwo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return classTwoModel.destroy({
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
                message: "An error occured while deleting category!",
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

  return function deleteClassTwo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClassTwo = deleteClassTwo;