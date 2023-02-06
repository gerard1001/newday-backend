"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function cov_2pzs3qaktq() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220804185716-demo-profile.js";
  var hash = "1ddb25239ae44e41ba0e011de9bf5e9cdef5490e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\seeders\\20220804185716-demo-profile.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 83,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 77,
          column: 6
        }
      },
      "2": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 58
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
            line: 78,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 3
          }
        },
        loc: {
          start: {
            line: 80,
            column: 40
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 80
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
    hash: "1ddb25239ae44e41ba0e011de9bf5e9cdef5490e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pzs3qaktq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2pzs3qaktq();
cov_2pzs3qaktq().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_2pzs3qaktq().f[0]++;
            cov_2pzs3qaktq().s[1]++;
            _context.next = 4;
            return queryInterface.bulkInsert("Profiles", [{
              profileId: "fa1a5ff5-6853-4165-a7fc-1fe39a26691a",
              userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180000,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "a8a1ab60-4d61-4b8d-8c46-f2de4d3c9ec1",
              userId: "42b130fd-41f7-45db-ad2f-50e3eec363d3",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180999,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "3af956d3-ee2f-4823-b2a6-6243d5fa3c91",
              userId: "74f21682-2ba4-4818-b838-7f5dcf35d2ff",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 788180525,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "1df916ed-8de3-4fa1-adde-b5a5b1246a78",
              userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
              picture: "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
              gender: "female",
              birthDate: "2010-01-11",
              phoneNumber: 788273111,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "6a9b7d6f-55c4-49f7-b6a7-632f3925deb9",
              userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
              picture: "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
              gender: "male",
              birthDate: "1999-11-24",
              phoneNumber: 789944560,
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              profileId: "da672281-23d2-40af-97f9-a0d20609636a",
              userId: "49710ec2-a533-42ba-b190-247fd023e98c",
              picture: "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
              gender: "female",
              birthDate: "1999-11-24",
              phoneNumber: 788147067,
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
            cov_2pzs3qaktq().f[1]++;
            cov_2pzs3qaktq().s[2]++;
            _context2.next = 4;
            return queryInterface.bulkDelete("Profiles", null, {});
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};