"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyAuth = exports.ComodityAuth = exports.Auth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userHelper = require("../helpers/userHelper");
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_1tv32ynmtv() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\productMiddleware.js";
  var hash = "025460481f8e8ed085e9ab97e3da1a080055ad36";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\productMiddleware.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 28
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "3": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "5": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 73
        }
      },
      "6": {
        start: {
          line: 15,
          column: 19
        },
        end: {
          line: 15,
          column: 37
        }
      },
      "7": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 24,
          column: 6
        }
      },
      "8": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "9": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 34,
          column: 9
        }
      },
      "10": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 23
        }
      },
      "11": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 11
        }
      },
      "12": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "13": {
        start: {
          line: 47,
          column: 27
        },
        end: {
          line: 81,
          column: 1
        }
      },
      "14": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 80,
          column: 3
        }
      },
      "15": {
        start: {
          line: 49,
          column: 18
        },
        end: {
          line: 49,
          column: 33
        }
      },
      "16": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "17": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 73
        }
      },
      "18": {
        start: {
          line: 55,
          column: 19
        },
        end: {
          line: 55,
          column: 37
        }
      },
      "19": {
        start: {
          line: 56,
          column: 20
        },
        end: {
          line: 64,
          column: 6
        }
      },
      "20": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "21": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 70,
          column: 9
        }
      },
      "22": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 23
        }
      },
      "23": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 11
        }
      },
      "24": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 79,
          column: 7
        }
      },
      "25": {
        start: {
          line: 83,
          column: 28
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "26": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 116,
          column: 3
        }
      },
      "27": {
        start: {
          line: 85,
          column: 18
        },
        end: {
          line: 85,
          column: 33
        }
      },
      "28": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "29": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 73
        }
      },
      "30": {
        start: {
          line: 91,
          column: 19
        },
        end: {
          line: 91,
          column: 37
        }
      },
      "31": {
        start: {
          line: 92,
          column: 20
        },
        end: {
          line: 100,
          column: 6
        }
      },
      "32": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "33": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 106,
          column: 9
        }
      },
      "34": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 109,
          column: 23
        }
      },
      "35": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 11
        }
      },
      "36": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 115,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 46
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 47,
            column: 27
          },
          end: {
            line: 47,
            column: 28
          }
        },
        loc: {
          start: {
            line: 47,
            column: 53
          },
          end: {
            line: 81,
            column: 1
          }
        },
        line: 47
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 83,
            column: 28
          },
          end: {
            line: 83,
            column: 29
          }
        },
        loc: {
          start: {
            line: 83,
            column: 54
          },
          end: {
            line: 117,
            column: 1
          }
        },
        line: 83
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 30,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 27,
            column: 26
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 26
          }
        }, {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 26
          }
        }, {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 26
          }
        }],
        line: 27
      },
      "3": {
        loc: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 51
      },
      "4": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 66
      },
      "5": {
        loc: {
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 66,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 66,
            column: 28
          }
        }, {
          start: {
            line: 66,
            column: 32
          },
          end: {
            line: 66,
            column: 52
          }
        }],
        line: 66
      },
      "6": {
        loc: {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 87
      },
      "7": {
        loc: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 102
      },
      "8": {
        loc: {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 102,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 102,
            column: 28
          }
        }, {
          start: {
            line: 102,
            column: 32
          },
          end: {
            line: 102,
            column: 52
          }
        }, {
          start: {
            line: 102,
            column: 56
          },
          end: {
            line: 102,
            column: 76
          }
        }],
        line: 102
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "025460481f8e8ed085e9ab97e3da1a080055ad36"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1tv32ynmtv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1tv32ynmtv();
var userModel = (cov_1tv32ynmtv().s[0]++, _models["default"].User);
cov_1tv32ynmtv().s[1]++;
var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_1tv32ynmtv().f[0]++;
          cov_1tv32ynmtv().s[2]++;
          _context.prev = 2;
          token = (cov_1tv32ynmtv().s[3]++, (0, _checkToken["default"])(req));
          cov_1tv32ynmtv().s[4]++;
          if (token) {
            _context.next = 11;
            break;
          }
          cov_1tv32ynmtv().b[0][0]++;
          cov_1tv32ynmtv().s[5]++;
          return _context.abrupt("return", res.status(401).send({
            error: "You are not logged in!!!"
          }));
        case 11:
          cov_1tv32ynmtv().b[0][1]++;
        case 12:
          decode = (cov_1tv32ynmtv().s[6]++, (0, _userHelper.decodeToken)(token));
          cov_1tv32ynmtv().s[7]++;
          _context.next = 16;
          return userModel.findByPk(decode.userId, {
            include: [{
              model: _models["default"].Role,
              as: "Roles",
              attributes: ["role"]
            }]
          });
        case 16:
          newUser = _context.sent;
          cov_1tv32ynmtv().s[8]++;
          if (!((cov_1tv32ynmtv().b[2][0]++, newUser.roleId !== 1) && (cov_1tv32ynmtv().b[2][1]++, newUser.roleId !== 2) && (cov_1tv32ynmtv().b[2][2]++, newUser.roleId !== 3) && (cov_1tv32ynmtv().b[2][3]++, newUser.roleId !== 4))) {
            _context.next = 24;
            break;
          }
          cov_1tv32ynmtv().b[1][0]++;
          cov_1tv32ynmtv().s[9]++;
          return _context.abrupt("return", res.status(401).send({
            error: "This action can only be performed by the admin or manager !!"
          }));
        case 24:
          cov_1tv32ynmtv().b[1][1]++;
        case 25:
          cov_1tv32ynmtv().s[10]++;
          req.user = newUser;
          cov_1tv32ynmtv().s[11]++;
          next();
          _context.next = 35;
          break;
        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](2);
          cov_1tv32ynmtv().s[12]++;
          return _context.abrupt("return", res.status(500).send({
            error: "".concat(_context.t0)
          }));
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 31]]);
  }));
  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.Auth = Auth;
cov_1tv32ynmtv().s[13]++;
var CompanyAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_1tv32ynmtv().f[1]++;
          cov_1tv32ynmtv().s[14]++;
          _context2.prev = 2;
          token = (cov_1tv32ynmtv().s[15]++, (0, _checkToken["default"])(req));
          cov_1tv32ynmtv().s[16]++;
          if (token) {
            _context2.next = 11;
            break;
          }
          cov_1tv32ynmtv().b[3][0]++;
          cov_1tv32ynmtv().s[17]++;
          return _context2.abrupt("return", res.status(401).send({
            error: "You are not logged in!!!"
          }));
        case 11:
          cov_1tv32ynmtv().b[3][1]++;
        case 12:
          decode = (cov_1tv32ynmtv().s[18]++, (0, _userHelper.decodeToken)(token));
          cov_1tv32ynmtv().s[19]++;
          _context2.next = 16;
          return userModel.findByPk(decode.userId, {
            include: [{
              model: _models["default"].Role,
              as: "Roles",
              attributes: ["role"]
            }]
          });
        case 16:
          newUser = _context2.sent;
          cov_1tv32ynmtv().s[20]++;
          if (!((cov_1tv32ynmtv().b[5][0]++, newUser.roleId !== 1) && (cov_1tv32ynmtv().b[5][1]++, newUser.roleId !== 2))) {
            _context2.next = 24;
            break;
          }
          cov_1tv32ynmtv().b[4][0]++;
          cov_1tv32ynmtv().s[21]++;
          return _context2.abrupt("return", res.status(401).send({
            error: "This action can only be performed by the super-admin or a registered owner !!"
          }));
        case 24:
          cov_1tv32ynmtv().b[4][1]++;
        case 25:
          cov_1tv32ynmtv().s[22]++;
          req.user = newUser;
          cov_1tv32ynmtv().s[23]++;
          next();
          _context2.next = 35;
          break;
        case 31:
          _context2.prev = 31;
          _context2.t0 = _context2["catch"](2);
          cov_1tv32ynmtv().s[24]++;
          return _context2.abrupt("return", res.status(500).send({
            error: "".concat(_context2.t0)
          }));
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 31]]);
  }));
  return function CompanyAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.CompanyAuth = CompanyAuth;
cov_1tv32ynmtv().s[25]++;
var ComodityAuth = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_1tv32ynmtv().f[2]++;
          cov_1tv32ynmtv().s[26]++;
          _context3.prev = 2;
          token = (cov_1tv32ynmtv().s[27]++, (0, _checkToken["default"])(req));
          cov_1tv32ynmtv().s[28]++;
          if (token) {
            _context3.next = 11;
            break;
          }
          cov_1tv32ynmtv().b[6][0]++;
          cov_1tv32ynmtv().s[29]++;
          return _context3.abrupt("return", res.status(401).send({
            error: "You are not logged in!!!"
          }));
        case 11:
          cov_1tv32ynmtv().b[6][1]++;
        case 12:
          decode = (cov_1tv32ynmtv().s[30]++, (0, _userHelper.decodeToken)(token));
          cov_1tv32ynmtv().s[31]++;
          _context3.next = 16;
          return userModel.findByPk(decode.userId, {
            include: [{
              model: _models["default"].Role,
              as: "Roles",
              attributes: ["role"]
            }]
          });
        case 16:
          newUser = _context3.sent;
          cov_1tv32ynmtv().s[32]++;
          if (!((cov_1tv32ynmtv().b[8][0]++, newUser.roleId !== 1) && (cov_1tv32ynmtv().b[8][1]++, newUser.roleId !== 2) && (cov_1tv32ynmtv().b[8][2]++, newUser.roleId !== 3))) {
            _context3.next = 24;
            break;
          }
          cov_1tv32ynmtv().b[7][0]++;
          cov_1tv32ynmtv().s[33]++;
          return _context3.abrupt("return", res.status(401).send({
            error: "This action can only be performed by the super-admin, a registered owner or an admin!!"
          }));
        case 24:
          cov_1tv32ynmtv().b[7][1]++;
        case 25:
          cov_1tv32ynmtv().s[34]++;
          req.user = newUser;
          cov_1tv32ynmtv().s[35]++;
          next();
          _context3.next = 35;
          break;
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](2);
          cov_1tv32ynmtv().s[36]++;
          return _context3.abrupt("return", res.status(500).send({
            error: "".concat(_context3.t0)
          }));
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 31]]);
  }));
  return function ComodityAuth(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.ComodityAuth = ComodityAuth;