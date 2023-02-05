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
              return queryInterface.createTable("Products", {
                productId: {
                  type: Sequelize.UUID,
                  primaryKey: true,
                  defaultValue: Sequelize.UUIDV4,
                  allowNull: false
                },
                companyId: {
                  type: Sequelize.UUID,
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                  references: {
                    model: "Companies",
                    key: "companyId",
                    as: "Company"
                  }
                },
                productName: {
                  type: Sequelize.STRING
                },
                price: {
                  type: Sequelize.DECIMAL(8, 2)
                },
                full_price: {
                  type: Sequelize.DECIMAL(8, 2)
                },
                description: {
                  type: Sequelize.TEXT
                },
                size: {
                  type: Sequelize.STRING
                },
                images: {
                  type: Sequelize.ARRAY(Sequelize.STRING)
                },
                imagesId: {
                  type: Sequelize.ARRAY(Sequelize.STRING)
                },
                brand: {
                  type: Sequelize.STRING
                },
                ISBN: {
                  type: Sequelize.BIGINT
                },
                releaseDate: {
                  type: Sequelize.DATE
                },
                countInStock: {
                  type: Sequelize.INTEGER
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
              return queryInterface.dropTable("Products");

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};