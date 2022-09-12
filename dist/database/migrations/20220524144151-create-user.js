"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var sequelize = require("sequelize");

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

            case 2:
              _context.next = 4;
              return queryInterface.createTable("Users", {
                userId: {
                  type: Sequelize.UUID,
                  primaryKey: true,
                  defaultValue: Sequelize.literal("uuid_generate_v4()"),
                  allowNull: false
                },
                roleId: {
                  allowNull: true,
                  type: Sequelize.INTEGER,
                  defaultValue: 4,
                  onDelete: "SET DEFAULT",
                  onUpdate: "CASCADE",
                  references: {
                    model: "Roles",
                    key: "roleId"
                  }
                },
                firstName: {
                  type: Sequelize.STRING
                },
                lastName: {
                  type: Sequelize.STRING
                },
                email: {
                  type: Sequelize.STRING,
                  validate: {
                    isEmail: true
                  }
                },
                password: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  validate: {
                    min: 8
                  }
                },
                userVerified: {
                  type: Sequelize.BOOLEAN,
                  defaultValue: false
                },
                isSubscribed: {
                  type: sequelize.BOOLEAN,
                  defaultValue: false
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

            case 4:
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
              return queryInterface.dropTable("Users");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};