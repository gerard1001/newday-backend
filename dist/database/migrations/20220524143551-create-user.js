"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function cov_x1ipxs9ll() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524143551-create-user.js";
  var hash = "4c003307e8618eac4b1a22ee05817f462240b295";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524143551-create-user.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 38
        }
      },
      "1": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 78,
          column: 2
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 9,
          column: 6
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 73,
          column: 7
        }
      },
      "4": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 74,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 40
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 75
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c003307e8618eac4b1a22ee05817f462240b295"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x1ipxs9ll = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_x1ipxs9ll();
var sequelize = (cov_x1ipxs9ll().s[0]++, require("sequelize"));
cov_x1ipxs9ll().s[1]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_x1ipxs9ll().f[0]++;
            cov_x1ipxs9ll().s[2]++;
            _context.next = 4;
            return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
          case 4:
            cov_x1ipxs9ll().s[3]++;
            _context.next = 7;
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
                  key: "roleId",
                  as: "Role"
                }
              },
              managerId: {
                allowNull: true,
                type: Sequelize.UUID,
                references: {
                  model: "Users",
                  key: "userId",
                  as: "Manager"
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
          case 7:
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
            cov_x1ipxs9ll().f[1]++;
            cov_x1ipxs9ll().s[4]++;
            _context2.next = 4;
            return queryInterface.dropTable("Users");
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};