"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function cov_1gmb1qf3uz() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524144426-create-product.js";
  var hash = "73fdb2123f51cf438272f12e9d0d4e77a40ab7db";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524144426-create-product.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 67,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 62,
          column: 7
        }
      },
      "2": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 3,
            column: 3
          }
        },
        loc: {
          start: {
            line: 3,
            column: 38
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        loc: {
          start: {
            line: 64,
            column: 40
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 64
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "73fdb2123f51cf438272f12e9d0d4e77a40ab7db"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gmb1qf3uz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1gmb1qf3uz();
cov_1gmb1qf3uz().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_1gmb1qf3uz().f[0]++;
            cov_1gmb1qf3uz().s[1]++;
            _context.next = 4;
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
          case 4:
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
            cov_1gmb1qf3uz().f[1]++;
            cov_1gmb1qf3uz().s[2]++;
            _context2.next = 4;
            return queryInterface.dropTable("Products");
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};