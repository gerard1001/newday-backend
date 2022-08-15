'use strict';

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
                  type: Sequelize.INTEGER,
                  autoIncrement: true,
                  primaryKey: true,
                  defaultValue: Sequelize.INTEGER,
                  allowNull: false
                },
                catTwoId: {
                  allowNull: true,
                  type: Sequelize.INTEGER,
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                  references: {
                    model: "subCategoryTwos",
                    key: "catTwoId"
                  }
                },
                productName: {
                  type: Sequelize.STRING
                },
                price: {
                  type: Sequelize.INTEGER
                },
                productImage: {
                  type: Sequelize.STRING,
                  defaultValue: "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png"
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
              return queryInterface.dropTable('Products');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};