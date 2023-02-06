"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function cov_jpehq3246() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220529163701-demo-role.js";
  var hash = "97803dc03ea7bc5c8c3039221812a9c5e3863966";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220529163701-demo-role.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 52,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 46,
          column: 6
        }
      },
      "2": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 40
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 49
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
    hash: "97803dc03ea7bc5c8c3039221812a9c5e3863966"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jpehq3246 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_jpehq3246();
cov_jpehq3246().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_jpehq3246().f[0]++;
            cov_jpehq3246().s[1]++;
            _context.next = 4;
            return queryInterface.bulkInsert("Roles", [{
              roleId: 1,
              role: "super-admin",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              roleId: 2,
              role: "owner",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              roleId: 3,
              role: "admin",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              roleId: 4,
              role: "manager",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              roleId: 5,
              role: "worker",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              roleId: 6,
              role: "client",
              createdAt: new Date(),
              updatedAt: new Date()
            }], {});
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
            cov_jpehq3246().f[1]++;
            cov_jpehq3246().s[2]++;
            _context2.next = 4;
            return queryInterface.bulkDelete("Roles", null, {});
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};