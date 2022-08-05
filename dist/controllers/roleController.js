"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.getRole = exports.getOneRole = exports.deleteRole = exports.createRole = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var roleRoutes = _models["default"].Role;

var createRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return roleRoutes.findOrCreate({
              role: req.body.role,
              where: {
                role: req.body.role
              }
            }).then(function (created) {
              if (created[1]) {
                res.status(201).send({
                  message: "successfully created!",
                  created: created
                });
              } else {
                res.send({
                  message: "This role already exists!"
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

  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var getRole = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return roleRoutes.findAll({
              order: [["role", "ASC"]]
            }).then(function (data) {
              res.status(200).send({
                message: "Fetched all roles",
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

  return function getRole(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRole = getRole;

var getOneRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return roleRoutes.findOne({
              attributes: ['role'],
              order: [["role", "ASC"]],
              include: [{
                model: _models["default"].User,
                as: 'Users',
                attributes: ['email'],
                order: [["email", "ASC"]]
              }],
              where: {
                role: id
              }
            }).then(function (data) {
              var role = data.role;
              res.status(200).send({
                message: "Fetched list of ".concat(role, "s"),
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

  return function getOneRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneRole = getOneRole;

var updateRole = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return roleRoutes.update(req.body, {
              where: {
                roleId: id
              }
            }).then(function (data) {
              res.status(200).send({
                message: "role updated successfylly!"
              });
            })["catch"](function (err) {
              res.status(500).send({
                message: "An error occured while updating role!"
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

  return function updateRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRole = updateRole;

var deleteRole = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return roleRoutes.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              if (data === 1) {
                res.status(200).send({
                  message: "Deleted ".concat(data, " role successfully!")
                });
              } else {
                res.status(200).send({
                  message: "Deleted ".concat(data, " roles successfully!")
                });
              }
            })["catch"](function (err) {
              res.status(500).send({
                message: "An error occured while deleting role!"
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

  return function deleteRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRole = deleteRole;