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
              return queryInterface.createTable("Companies", {
                companyId: {
                  type: Sequelize.UUID,
                  primaryKey: true,
                  defaultValue: Sequelize.UUIDV4,
                  allowNull: false
                },
                userId: {
                  type: Sequelize.UUID,
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                  references: {
                    model: "Users",
                    key: "userId",
                    as: "Owner"
                  }
                },
                companyName: {
                  type: Sequelize.STRING
                },
                companyLogo: {
                  type: Sequelize.STRING,
                  defaultValue: "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png",
                  allowNull: true
                },
                description: {
                  type: Sequelize.TEXT
                },
                companyProducts: {
                  type: Sequelize.STRING
                },
                address: {
                  type: Sequelize.STRING
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
              return queryInterface.dropTable("Companies");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};