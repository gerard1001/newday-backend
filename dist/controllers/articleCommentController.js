"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComment = exports.getComments = exports.createReply = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
function cov_2b6s0c6ki() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\articleCommentController.js";
  var hash = "e250a13f1b1ae701463ece84a9ac4569fe5de665";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\articleCommentController.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 38
        }
      },
      "1": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 30
        }
      },
      "2": {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "4": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 33
        }
      },
      "5": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 37
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "7": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 24,
          column: 11
        }
      },
      "8": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 38
        }
      },
      "9": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 7
        }
      },
      "10": {
        start: {
          line: 36,
          column: 27
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "11": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "12": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 43,
          column: 9
        }
      },
      "13": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "14": {
        start: {
          line: 52,
          column: 27
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "15": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 78,
          column: 3
        }
      },
      "16": {
        start: {
          line: 54,
          column: 18
        },
        end: {
          line: 54,
          column: 33
        }
      },
      "17": {
        start: {
          line: 55,
          column: 19
        },
        end: {
          line: 55,
          column: 37
        }
      },
      "18": {
        start: {
          line: 57,
          column: 15
        },
        end: {
          line: 57,
          column: 28
        }
      },
      "19": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 73,
          column: 9
        }
      },
      "20": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 69,
          column: 11
        }
      },
      "21": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 52
        }
      },
      "22": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 77,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 28
          }
        },
        loc: {
          start: {
            line: 8,
            column: 47
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 22
          },
          end: {
            line: 25,
            column: 7
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 14
          }
        },
        loc: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 28,
            column: 7
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 36,
            column: 28
          }
        },
        loc: {
          start: {
            line: 36,
            column: 47
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 36
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 39,
            column: 10
          },
          end: {
            line: 39,
            column: 11
          }
        },
        loc: {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 44,
            column: 5
          }
        },
        line: 39
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 45,
            column: 11
          },
          end: {
            line: 45,
            column: 12
          }
        },
        loc: {
          start: {
            line: 45,
            column: 20
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 45
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 52,
            column: 27
          },
          end: {
            line: 52,
            column: 28
          }
        },
        loc: {
          start: {
            line: 52,
            column: 47
          },
          end: {
            line: 79,
            column: 1
          }
        },
        line: 52
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 13
          }
        },
        loc: {
          start: {
            line: 65,
            column: 22
          },
          end: {
            line: 70,
            column: 7
          }
        },
        line: 65
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 71,
            column: 13
          },
          end: {
            line: 71,
            column: 14
          }
        },
        loc: {
          start: {
            line: 71,
            column: 22
          },
          end: {
            line: 73,
            column: 7
          }
        },
        line: 71
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
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e250a13f1b1ae701463ece84a9ac4569fe5de665"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2b6s0c6ki = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2b6s0c6ki();
var commentModel = (cov_2b6s0c6ki().s[0]++, _models["default"].UserComment);
var replyModel = (cov_2b6s0c6ki().s[1]++, _models["default"].Reply);
cov_2b6s0c6ki().s[2]++;
var postComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_2b6s0c6ki().f[0]++;
          cov_2b6s0c6ki().s[3]++;
          _context.prev = 2;
          token = (cov_2b6s0c6ki().s[4]++, (0, _checkToken["default"])(req));
          decode = (cov_2b6s0c6ki().s[5]++, (0, _userHelper.decodeToken)(token));
          cov_2b6s0c6ki().s[6]++;
          _context.next = 8;
          return commentModel.create({
            userId: decode.userId,
            userArticleId: req.body.userArticleId,
            comment: req.body.comment
          }).then(function (data) {
            cov_2b6s0c6ki().f[1]++;
            cov_2b6s0c6ki().s[7]++;
            return res.status(200).send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_2b6s0c6ki().f[2]++;
            cov_2b6s0c6ki().s[8]++;
            res.status(400).send({
              err: err
            });
          });
        case 8:
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          cov_2b6s0c6ki().s[9]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 10]]);
  }));
  return function postComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.postComment = postComment;
cov_2b6s0c6ki().s[10]++;
var getComments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_2b6s0c6ki().f[3]++;
          cov_2b6s0c6ki().s[11]++;
          _context2.next = 4;
          return commentModel.findAll({}).then(function (data) {
            cov_2b6s0c6ki().f[4]++;
            cov_2b6s0c6ki().s[12]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_2b6s0c6ki().f[5]++;
            cov_2b6s0c6ki().s[13]++;
            return res.status(500).send({
              message: "".concat(err)
            });
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getComments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getComments = getComments;
cov_2b6s0c6ki().s[14]++;
var createReply = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var token, decode, id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_2b6s0c6ki().f[6]++;
          cov_2b6s0c6ki().s[15]++;
          _context3.prev = 2;
          token = (cov_2b6s0c6ki().s[16]++, (0, _checkToken["default"])(req));
          decode = (cov_2b6s0c6ki().s[17]++, (0, _userHelper.decodeToken)(token));
          id = (cov_2b6s0c6ki().s[18]++, decode.userId);
          cov_2b6s0c6ki().s[19]++;
          _context3.next = 9;
          return replyModel.create({
            userId: id,
            commentId: req.body.commentId,
            reply: req.body.reply
          }).then(function (data) {
            cov_2b6s0c6ki().f[7]++;
            cov_2b6s0c6ki().s[20]++;
            return res.status(201).send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_2b6s0c6ki().f[8]++;
            cov_2b6s0c6ki().s[21]++;
            res.status(400).send({
              message: "".concat(err)
            });
          });
        case 9:
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          cov_2b6s0c6ki().s[22]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function createReply(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createReply = createReply;