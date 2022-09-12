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
              return queryInterface.createTable("ProductComments", {
                pcId: {
                  type: Sequelize.UUID,
                  primaryKey: true,
                  defaultValue: Sequelize.UUIDV4
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
                productId: {
                  allowNull: true,
                  type: Sequelize.UUID,
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                  references: {
                    model: "Products",
                    key: "productId"
                  }
                },
                comment: {
                  type: Sequelize.TEXT
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
              return queryInterface.dropTable("ProductComments");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};