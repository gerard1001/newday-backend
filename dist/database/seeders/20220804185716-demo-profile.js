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
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.bulkInsert("Profiles", [{
              profileId: "fa1a5ff5-6853-4165-a7fc-1fe39a26691a",
              userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180000,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "a8a1ab60-4d61-4b8d-8c46-f2de4d3c9ec1",
              userId: "42b130fd-41f7-45db-ad2f-50e3eec363d3",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180999,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "3af956d3-ee2f-4823-b2a6-6243d5fa3c91",
              userId: "74f21682-2ba4-4818-b838-7f5dcf35d2ff",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180525,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "1df916ed-8de3-4fa1-adde-b5a5b1246a78",
              userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
              picture: "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
              gender: "female",
              birthDate: "2010-01-11",
              phoneNumber: 788273111,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "6a9b7d6f-55c4-49f7-b6a7-632f3925deb9",
              userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 789944560,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "da672281-23d2-40af-97f9-a0d20609636a",
              userId: "49710ec2-a533-42ba-b190-247fd023e98c",
              picture: "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
              gender: "female",
              birthDate: "1999-11-24",
              phoneNumber: 788147067,
              createdAt: new Date(),
              updatedAt: new Date()
            }], {});
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.bulkDelete("Profiles", null, {});
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};