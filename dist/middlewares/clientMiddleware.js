"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
function cov_1t2zdbm98() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\clientMiddleware.js";
  var hash = "83ddf15260c41a06d3b86fb1c597156d4a7ebd58";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\clientMiddleware.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 33
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 9,
          column: 5
        }
      },
      "4": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 74
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 11
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 45
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 9,
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
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "83ddf15260c41a06d3b86fb1c597156d4a7ebd58"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t2zdbm98 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1t2zdbm98();
cov_1t2zdbm98().s[0]++;
var ClientAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_1t2zdbm98().f[0]++;
          cov_1t2zdbm98().s[1]++;
          _context.prev = 2;
          token = (cov_1t2zdbm98().s[2]++, (0, _checkToken["default"])(req));
          cov_1t2zdbm98().s[3]++;
          if (token) {
            _context.next = 11;
            break;
          }
          cov_1t2zdbm98().b[0][0]++;
          cov_1t2zdbm98().s[4]++;
          return _context.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 11:
          cov_1t2zdbm98().b[0][1]++;
        case 12:
          cov_1t2zdbm98().s[5]++;
          next();
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          cov_1t2zdbm98().s[6]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 16]]);
  }));
  return function ClientAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = ClientAuth;
exports["default"] = _default;