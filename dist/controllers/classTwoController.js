"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassTwo = exports.getOneClassTwo = exports.getClassTwo = exports.deleteClassTwo = exports.createClassTwo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var classTwoRoutes = _models["default"].subCategoryTwo;

var createClassTwo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, catTwoName, catOneId;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, catTwoName = _req$body.catTwoName, catOneId = _req$body.catOneId;

            if (!catTwoName && !catOneId) {
              res.send({
                message: "Please make sure you include both sub category two Name and catOneId"
              });
            }

            _context.next = 4;
            return classTwoRoutes.findOrCreate({
              where: {
                catTwoName: req.body.catTwoName,
                catOneId: req.body.catOneId
              }
            }).then(function (data) {
              if (data[1]) {
                res.status(201).send({
                  message: "successfully created!",
                  body: {
                    data: data
                  }
                });
              } else {
                res.send({
                  message: "This class already exists!"
                });
              }
            })["catch"](function (err) {
              res.status(500).send("err");
              console.log(err);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
            _context2.next = 2;
            return classTwoRoutes.findAll({
              order: [["catOneId", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: 'Products',
                attributes: ['productName', 'price'],
                order: [["productName", "ASC"]]
              }]
            }).then(function (data) {
              res.status(200).send({
                message: "Fetched all classOne elements",
                body: {
                  data: data
                }
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
            id = req.params.id;
            _context3.next = 3;
            return classTwoRoutes.findAll({
              order: [["catOneId", "ASC"]],
              include: [{
                model: _models["default"].Product,
                as: 'Products',
                attributes: ['productName', 'price'],
                order: [["productName", "ASC"]]
              }],
              where: {
                catTwoName: id
              }
            }).then(function (data) {
              res.status(200).send({
                message: "Fetched all classOne elements",
                body: {
                  data: data
                }
              });
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
            id = req.params.id;
            _context4.next = 3;
            return classTwoRoutes.update(req.body, {
              where: {
                catTwoId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.send({
                  message: "Updated class 2 successfully!"
                });
              } else {
                return res.send({
                  message: "Cannot update class 2 ".concat(id, "!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              console.log(err);
              return res.send({
                message: "Product updated successfully!"
              });
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
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
            _context5.next = 2;
            return classTwoRoutes.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                res.status(200).send({
                  message: "Deleted ".concat(data, " class one element successfully!")
                });
              } else {
                res.status(200).send({
                  message: "Deleted ".concat(data, " class one elements successfully!")
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

  return function deleteClassTwo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClassTwo = deleteClassTwo;