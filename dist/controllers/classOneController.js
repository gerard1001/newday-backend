"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassOne = exports.getOneClassOne = exports.getClassOne = exports.deleteOneClassOne = exports.deleteClassOne = exports.createClassOne = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var classOneRoutes = _models["default"].subCategoryOne;

var createClassOne = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, catOneName, categoryId;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, catOneName = _req$body.catOneName, categoryId = _req$body.categoryId;

            if (!catOneName && !categoryId) {
              res.send({
                message: "Please make sure you include both catOneName and category"
              });
            }

            _context.next = 4;
            return classOneRoutes.findOrCreate({
              where: {
                catOneName: req.body.catOneName,
                categoryId: req.body.categoryId
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
              res.status(500).send(err);
              console.log(err);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
            _context2.next = 2;
            return classOneRoutes.findAll({
              order: [["catOneName", "ASC"]],
              include: [{
                model: _models["default"].subCategoryTwo,
                as: 'subCategoryTwos',
                attributes: ['catTwoName'],
                order: [["catTwoName", "ASC"]]
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
            id = req.params.id;
            _context3.next = 3;
            return classOneRoutes.findAll({
              order: [["catOneName", "ASC"]],
              include: [{
                model: _models["default"].subCategoryTwo,
                as: 'subCategoryTwos',
                attributes: ['catTwoName'],
                order: [["catTwoName", "ASC"]]
              }],
              where: {
                catOneName: id
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
            id = req.params.id;
            _context4.next = 3;
            return classOneRoutes.update(req.body, {
              where: {
                catOneName: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.send({
                  message: "Updated class 1 successfully!"
                });
              } else {
                return res.send({
                  message: "Cannot update class 1 ".concat(id, "!"),
                  data: data
                });
              }
            })["catch"](function (err) {
              console.log(err);
              return res.send({
                message: "error while trying to update!"
              });
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
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
            _context5.next = 2;
            return classOneRoutes.destroy({
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
            id = req.params.id;
            _context6.next = 3;
            return classOneRoutes.destroy({
              where: {
                catOneName: id
              },
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

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteOneClassOne(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteOneClassOne = deleteOneClassOne;