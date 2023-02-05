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
                userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
                firstName: "Manzi",
                lastName: "Valentin",
                email: "val@gmail.com",
                roleId: 1,
                password: _context.t1,
                userVerified: true,
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
                userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
                firstName: "Ruta",
                lastName: "gerard",
                email: "gerard@gmail.com",
                roleId: 2,
                password: _context.t5,
                userVerified: true,
                createdAt: _context.t6,
                updatedAt: _context.t7
              };
              _context.next = 15;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 15:
              _context.t9 = _context.sent;
              _context.t10 = new Date();
              _context.t11 = new Date();
              _context.t12 = {
                userId: "42b130fd-41f7-45db-ad2f-50e3eec363d3",
                firstName: "TY",
                lastName: "Patrick",
                email: "patrick@gmail.com",
                roleId: 3,
                password: _context.t9,
                userVerified: true,
                createdAt: _context.t10,
                updatedAt: _context.t11
              };
              _context.next = 21;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 21:
              _context.t13 = _context.sent;
              _context.t14 = new Date();
              _context.t15 = new Date();
              _context.t16 = {
                userId: "74f21682-2ba4-4818-b838-7f5dcf35d2ff",
                firstName: "Shema",
                lastName: "Alain",
                email: "alain@gmail.com",
                roleId: 4,
                password: _context.t13,
                userVerified: true,
                createdAt: _context.t14,
                updatedAt: _context.t15
              };
              _context.next = 27;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 27:
              _context.t17 = _context.sent;
              _context.t18 = new Date();
              _context.t19 = new Date();
              _context.t20 = {
                userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
                firstName: "Kamana",
                lastName: "Deo",
                email: "deo@gmail.com",
                roleId: 5,
                password: _context.t17,
                userVerified: true,
                createdAt: _context.t18,
                updatedAt: _context.t19
              };
              _context.next = 33;
              return _bcryptjs["default"].hash("ruta1001", 12);

            case 33:
              _context.t21 = _context.sent;
              _context.t22 = new Date();
              _context.t23 = new Date();
              _context.t24 = {
                userId: "49710ec2-a533-42ba-b190-247fd023e98c",
                firstName: "Miss",
                lastName: "Adele",
                email: "adele@gmail.com",
                roleId: 6,
                password: _context.t21,
                userVerified: true,
                createdAt: _context.t22,
                updatedAt: _context.t23
              };
              _context.t25 = [_context.t4, _context.t8, _context.t12, _context.t16, _context.t20, _context.t24];
              _context.t26 = {};
              _context.next = 41;
              return _context.t0.bulkInsert.call(_context.t0, "Users", _context.t25, _context.t26);

            case 41:
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