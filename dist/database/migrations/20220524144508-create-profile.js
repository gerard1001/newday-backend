"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function cov_2qixg1e6xi() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524144508-create-profile.js";
  var hash = "46d66f507c1a5fbad6650b7e83b32b4b3fdf7e14";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220524144508-create-profile.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 68,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 63,
          column: 7
        }
      },
      "2": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
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
            line: 64,
            column: 3
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 40
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 65
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
    hash: "46d66f507c1a5fbad6650b7e83b32b4b3fdf7e14"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qixg1e6xi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2qixg1e6xi();
cov_2qixg1e6xi().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_2qixg1e6xi().f[0]++;
            cov_2qixg1e6xi().s[1]++;
            _context.next = 4;
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
                  key: "userId",
                  as: "User"
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
                type: Sequelize.BIGINT,
                allowNull: false
              },
              status: {
                type: Sequelize.ENUM("full-time", "part-time"),
                allowNull: true,
                defaultValue: "full-time"
              },
              maritalStatus: {
                type: Sequelize.ENUM("single", "married", "divorced", "widowed"),
                allowNull: true,
                defaultValue: "single"
              },
              department: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "anonymous"
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
            cov_2qixg1e6xi().f[1]++;
            cov_2qixg1e6xi().s[2]++;
            _context2.next = 4;
            return queryInterface.dropTable("Profiles");
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};