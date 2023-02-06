"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = exports.createArticle = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
var _fileUpload = require("../helpers/fileUpload");
function cov_12o0jxqat1() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\articleController.js";
  var hash = "66f532aa387d77dea65ecdc04cad7c9577eacff1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\articleController.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 38
        }
      },
      "1": {
        start: {
          line: 8,
          column: 29
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "3": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 33
        }
      },
      "4": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 37
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "6": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "7": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 18,
          column: 115
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "9": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 32,
          column: 11
        }
      },
      "10": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 41
        }
      },
      "11": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      "12": {
        start: {
          line: 44,
          column: 27
        },
        end: {
          line: 66,
          column: 1
        }
      },
      "13": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 65,
          column: 3
        }
      },
      "14": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 60,
          column: 9
        }
      },
      "15": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 54,
          column: 11
        }
      },
      "16": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 59,
          column: 11
        }
      },
      "17": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 64,
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
            column: 29
          },
          end: {
            line: 8,
            column: 30
          }
        },
        loc: {
          start: {
            line: 8,
            column: 49
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 13
          }
        },
        loc: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 33,
            column: 7
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 34,
            column: 13
          },
          end: {
            line: 34,
            column: 14
          }
        },
        loc: {
          start: {
            line: 34,
            column: 22
          },
          end: {
            line: 36,
            column: 7
          }
        },
        line: 34
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 27
          },
          end: {
            line: 44,
            column: 28
          }
        },
        loc: {
          start: {
            line: 44,
            column: 47
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 50,
            column: 13
          }
        },
        loc: {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 55,
            column: 7
          }
        },
        line: 50
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 56,
            column: 13
          },
          end: {
            line: 56,
            column: 14
          }
        },
        loc: {
          start: {
            line: 56,
            column: 22
          },
          end: {
            line: 60,
            column: 7
          }
        },
        line: 56
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 14
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "66f532aa387d77dea65ecdc04cad7c9577eacff1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12o0jxqat1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_12o0jxqat1();
var articleModel = (cov_12o0jxqat1().s[0]++, _models["default"].UserArticle);
cov_12o0jxqat1().s[1]++;
var createArticle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_12o0jxqat1().f[0]++;
          cov_12o0jxqat1().s[2]++;
          _context.prev = 2;
          token = (cov_12o0jxqat1().s[3]++, (0, _checkToken["default"])(req));
          decode = (cov_12o0jxqat1().s[4]++, (0, _userHelper.decodeToken)(token));
          cov_12o0jxqat1().s[5]++;
          if (!req.file) {
            _context.next = 14;
            break;
          }
          cov_12o0jxqat1().b[0][0]++;
          cov_12o0jxqat1().s[6]++;
          _context.next = 11;
          return (0, _fileUpload.fileUpload)(req);
        case 11:
          req.body.image = _context.sent;
          _context.next = 17;
          break;
        case 14:
          cov_12o0jxqat1().b[0][1]++;
          cov_12o0jxqat1().s[7]++;
          req.body.image = "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";
        case 17:
          cov_12o0jxqat1().s[8]++;
          _context.next = 20;
          return articleModel.create({
            userId: decode.userId,
            image: req.body.image,
            title: req.body.title,
            article: req.body.article
          }).then(function (data) {
            cov_12o0jxqat1().f[1]++;
            cov_12o0jxqat1().s[9]++;
            return res.status(201).send({
              message: "success!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_12o0jxqat1().f[2]++;
            cov_12o0jxqat1().s[10]++;
            return res.status(400).send(err);
          });
        case 20:
          _context.next = 26;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](2);
          cov_12o0jxqat1().s[11]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 22]]);
  }));
  return function createArticle(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createArticle = createArticle;
cov_12o0jxqat1().s[12]++;
var getArticles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_12o0jxqat1().f[3]++;
          cov_12o0jxqat1().s[13]++;
          _context2.prev = 2;
          cov_12o0jxqat1().s[14]++;
          _context2.next = 6;
          return articleModel.findAll({
            include: [{
              model: _models["default"].User,
              as: "User",
              attributes: ["email"]
            }]
          }).then(function (data) {
            cov_12o0jxqat1().f[4]++;
            cov_12o0jxqat1().s[15]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_12o0jxqat1().f[5]++;
            cov_12o0jxqat1().s[16]++;
            return res.status(500).send({
              message: "".concat(err)
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_12o0jxqat1().s[17]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getArticles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getArticles = getArticles;