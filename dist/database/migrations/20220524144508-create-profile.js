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
              return queryInterface.createTable("Profiles", {
                profileId: {
                  allowNull: false,
                  type: Sequelize.UUID,
                  primaryKey: true,
                  defaultValue: Sequelize.literal("uuid_generate_v4()")
                },
                userId: {
                  allowNull: true,
                  type: Sequelize.UUID,
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                  references: {
                    model: "Users",
                    key: "userId"
                  }
                },
                picture: {
                  type: Sequelize.STRING,
                  defaultValue: "https://s.pngkit.com/png/small/128-1280585_user-icon-fa-fa-user-circle.png",
                  allowNull: true
                },
                gender: {
                  type: Sequelize.ENUM("male", "female"),
                  allowNull: false
                },
                birthDate: {
                  type: Sequelize.DATE,
                  allowNull: false
                },
                phoneNumber: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                },
                updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                }
              });

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
              return queryInterface.dropTable("Profiles");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};