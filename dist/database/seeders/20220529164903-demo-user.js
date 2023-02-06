"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function cov_286g64w7h() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220529164903-demo-user.js";
  var hash = "9628c7a2d564cf401132fef586148f7c3b9e5260";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220529164903-demo-user.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 88,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 82,
          column: 6
        }
      },
      "2": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 38
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 85,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        loc: {
          start: {
            line: 85,
            column: 40
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 85
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
    hash: "9628c7a2d564cf401132fef586148f7c3b9e5260"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_286g64w7h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_286g64w7h();
cov_286g64w7h().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_286g64w7h().f[0]++;
            cov_286g64w7h().s[1]++;
            _context.t0 = queryInterface;
            _context.next = 5;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 5:
            _context.t1 = _context.sent;
            _context.t2 = new Date();
            _context.t3 = new Date();
            _context.t4 = {
              userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
              firstName: "Manzi",
              lastName: "Valentin",
              email: "val@gmail.com",
              roleId: 1,
              password: _context.t1,
              userVerified: true,
              createdAt: _context.t2,
              updatedAt: _context.t3
            };
            _context.next = 11;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 11:
            _context.t5 = _context.sent;
            _context.t6 = new Date();
            _context.t7 = new Date();
            _context.t8 = {
              userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
              firstName: "Ruta",
              lastName: "gerard",
              email: "gerard@gmail.com",
              roleId: 2,
              password: _context.t5,
              userVerified: true,
              createdAt: _context.t6,
              updatedAt: _context.t7
            };
            _context.next = 17;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 17:
            _context.t9 = _context.sent;
            _context.t10 = new Date();
            _context.t11 = new Date();
            _context.t12 = {
              userId: "42b130fd-41f7-45db-ad2f-50e3eec363d3",
              firstName: "TY",
              lastName: "Patrick",
              email: "patrick@gmail.com",
              roleId: 3,
              password: _context.t9,
              userVerified: true,
              createdAt: _context.t10,
              updatedAt: _context.t11
            };
            _context.next = 23;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 23:
            _context.t13 = _context.sent;
            _context.t14 = new Date();
            _context.t15 = new Date();
            _context.t16 = {
              userId: "74f21682-2ba4-4818-b838-7f5dcf35d2ff",
              firstName: "Shema",
              lastName: "Alain",
              email: "alain@gmail.com",
              roleId: 4,
              password: _context.t13,
              userVerified: true,
              createdAt: _context.t14,
              updatedAt: _context.t15
            };
            _context.next = 29;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 29:
            _context.t17 = _context.sent;
            _context.t18 = new Date();
            _context.t19 = new Date();
            _context.t20 = {
              userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
              firstName: "Kamana",
              lastName: "Deo",
              email: "deo@gmail.com",
              roleId: 5,
              password: _context.t17,
              userVerified: true,
              createdAt: _context.t18,
              updatedAt: _context.t19
            };
            _context.next = 35;
            return _bcryptjs["default"].hash("ruta1001", 12);
          case 35:
            _context.t21 = _context.sent;
            _context.t22 = new Date();
            _context.t23 = new Date();
            _context.t24 = {
              userId: "49710ec2-a533-42ba-b190-247fd023e98c",
              firstName: "Miss",
              lastName: "Adele",
              email: "adele@gmail.com",
              roleId: 6,
              password: _context.t21,
              userVerified: true,
              createdAt: _context.t22,
              updatedAt: _context.t23
            };
            _context.t25 = [_context.t4, _context.t8, _context.t12, _context.t16, _context.t20, _context.t24];
            _context.t26 = {};
            _context.next = 43;
            return _context.t0.bulkInsert.call(_context.t0, "Users", _context.t25, _context.t26);
          case 43:
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
            cov_286g64w7h().f[1]++;
            cov_286g64w7h().s[2]++;
            _context2.next = 4;
            return queryInterface.bulkDelete("Users", null, {});
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};