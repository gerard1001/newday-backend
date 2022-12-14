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
              _context.next = 2;
              return queryInterface.bulkInsert("Profiles", [{
                userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
                picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
                gender: "male",
                birthDate: "1999-11-24",
                phoneNumber: 788180000,
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
                picture: "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
                gender: "female",
                birthDate: "2010-01-11",
                phoneNumber: 788273111,
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
                picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
                gender: "male",
                birthDate: "1999-11-24",
                phoneNumber: 789944560,
                createdAt: new Date(),
                updatedAt: new Date()
              }, {
                userId: "49710ec2-a533-42ba-b190-247fd023e98c",
                picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
                gender: "male",
                birthDate: "1999-11-24",
                phoneNumber: 788147067,
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
              return queryInterface.bulkDelete("Profiles", null, {});

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};