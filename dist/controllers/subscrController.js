"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeMsg = exports.subscribe = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _userHelper = require("../helpers/userHelper");
var _nodemailer = require("../helpers/nodemailer");
var _checkToken = _interopRequireDefault(require("../../dist/helpers/checkToken"));
function cov_z8j9avcu9() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\subscrController.js";
  var hash = "9c729f600ca4153b82569792dd3723b23a73e3f7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\subscrController.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 28
        }
      },
      "1": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "3": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 13,
          column: 37
        }
      },
      "4": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 41
        }
      },
      "5": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 30
        }
      },
      "6": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 28
        }
      },
      "7": {
        start: {
          line: 18,
          column: 18
        },
        end: {
          line: 18,
          column: 53
        }
      },
      "8": {
        start: {
          line: 20,
          column: 20
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "9": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 30
        }
      },
      "10": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "11": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "12": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "13": {
        start: {
          line: 37,
          column: 25
        },
        end: {
          line: 55,
          column: 1
        }
      },
      "14": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "15": {
        start: {
          line: 39,
          column: 22
        },
        end: {
          line: 39,
          column: 32
        }
      },
      "16": {
        start: {
          line: 40,
          column: 21
        },
        end: {
          line: 40,
          column: 39
        }
      },
      "17": {
        start: {
          line: 41,
          column: 19
        },
        end: {
          line: 41,
          column: 34
        }
      },
      "18": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 23
        }
      },
      "19": {
        start: {
          line: 45,
          column: 17
        },
        end: {
          line: 45,
          column: 63
        }
      },
      "20": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 73
        }
      },
      "21": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "22": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 48
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 25
          },
          end: {
            line: 37,
            column: 26
          }
        },
        loc: {
          start: {
            line: 37,
            column: 45
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {},
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
      "22": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9c729f600ca4153b82569792dd3723b23a73e3f7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_z8j9avcu9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_z8j9avcu9();
var userModel = (cov_z8j9avcu9().s[0]++, _models["default"].User);
cov_z8j9avcu9().s[1]++;
var subscribeMsg = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userToken, decode, email, id, token, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_z8j9avcu9().f[0]++;
          cov_z8j9avcu9().s[2]++;
          _context.prev = 2;
          userToken = (cov_z8j9avcu9().s[3]++, (0, _checkToken["default"])(req));
          decode = (cov_z8j9avcu9().s[4]++, (0, _userHelper.decodeToken)(userToken));
          email = (cov_z8j9avcu9().s[5]++, decode.email);
          id = (cov_z8j9avcu9().s[6]++, decode.userId);
          token = (cov_z8j9avcu9().s[7]++, (0, _userHelper.generateToken)({
            userId: id
          }, "1d"));
          message = (cov_z8j9avcu9().s[8]++, "\n        <h2>Got subscription token.</h2>\n        <p>Copy the following token::: <em>".concat(token, "</em></p>\n        "));
          cov_z8j9avcu9().s[9]++;
          (0, _nodemailer.sendTweet)(message, email);
          cov_z8j9avcu9().s[10]++;
          console.log(email);
          cov_z8j9avcu9().s[11]++;
          return _context.abrupt("return", res.send({
            msg: "Sent subscr..."
          }));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          cov_z8j9avcu9().s[12]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 17]]);
  }));
  return function subscribeMsg(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.subscribeMsg = subscribeMsg;
cov_z8j9avcu9().s[13]++;
var subscribe = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _ref3, token, userInfo, userId, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_z8j9avcu9().f[1]++;
          cov_z8j9avcu9().s[14]++;
          _context2.prev = 2;
          _ref3 = (cov_z8j9avcu9().s[15]++, req.params), token = _ref3.token;
          userInfo = (cov_z8j9avcu9().s[16]++, (0, _userHelper.decodeToken)(token));
          userId = (cov_z8j9avcu9().s[17]++, userInfo.userId);
          cov_z8j9avcu9().s[18]++;
          console.log(token);
          cov_z8j9avcu9().s[19]++;
          _context2.next = 11;
          return userModel.findOne({
            where: {
              userId: userId
            }
          });
        case 11:
          user = _context2.sent;
          cov_z8j9avcu9().s[20]++;
          _context2.next = 15;
          return user.update({
            isSubscribed: true
          }, {
            where: {
              id: userId
            }
          });
        case 15:
          cov_z8j9avcu9().s[21]++;
          return _context2.abrupt("return", res.status(200).send({
            message: "You have successfully subscribed to our page."
          }));
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](2);
          cov_z8j9avcu9().s[22]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 19]]);
  }));
  return function subscribe(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.subscribe = subscribe;