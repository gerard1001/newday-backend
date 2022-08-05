"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

// 'use strict';
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = queryInterface;
              _context.next = 3;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = new Date();
              _context.t3 = new Date();
              _context.t4 = {
                userId: 1,
                firstName: "Manzi",
                lastName: "Valentin",
                email: "val@gmail.com",
                roleId: 1,
                password: _context.t1,
                createdAt: _context.t2,
                updatedAt: _context.t3
              };
              _context.next = 9;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 9:
              _context.t5 = _context.sent;
              _context.t6 = new Date();
              _context.t7 = new Date();
              _context.t8 = {
                userId: 2,
                firstName: "Ruta",
                lastName: "Gerard",
                email: "ruta@gmail.com",
                roleId: 1,
                password: _context.t5,
                createdAt: _context.t6,
                updatedAt: _context.t7
              };
              _context.t9 = [_context.t4, _context.t8];
              _context.t10 = {};
              _context.next = 17;
              return _context.t0.bulkInsert.call(_context.t0, "Users", _context.t9, _context.t10);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.bulkDelete("Users", null, {});

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};