"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.bulkInsert("Roles", [{
                roleId: 1,
                role: "super-admin",
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                roleId: 2,
                role: "owner",
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                roleId: 3,
                role: "admin",
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                roleId: 4,
                role: "manager",
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                roleId: 5,
                role: "worker",
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                roleId: 6,
                role: "client",
                createdAt: new Date(),
                updatedAt: new Date()
              }], {});

            case 2:
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
              return queryInterface.bulkDelete("Roles", null, {});

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};