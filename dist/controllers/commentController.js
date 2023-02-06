"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
function cov_1rk1o2kl72() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\commentController.js";
  var hash = "b949f3a5554dff11025531d8682669ce7481ce96";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\commentController.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 41
        }
      },
      "1": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 34
        }
      },
      "2": {
        start: {
          line: 8,
          column: 29
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 48,
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
          line: 11,
          column: 28
        },
        end: {
          line: 15,
          column: 6
        }
      },
      "6": {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 37
        }
      },
      "7": {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 28
        }
      },
      "8": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 20
        }
      },
      "9": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "10": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "11": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 43,
          column: 9
        }
      },
      "12": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 37,
          column: 11
        }
      },
      "13": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 42,
          column: 11
        }
      },
      "14": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 47,
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
            line: 49,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 33,
            column: 13
          }
        },
        loc: {
          start: {
            line: 33,
            column: 22
          },
          end: {
            line: 38,
            column: 7
          }
        },
        line: 33
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 13
          },
          end: {
            line: 39,
            column: 14
          }
        },
        loc: {
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 43,
            column: 7
          }
        },
        line: 39
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
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
        line: 21
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b949f3a5554dff11025531d8682669ce7481ce96"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rk1o2kl72 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1rk1o2kl72();
var commentModel = (cov_1rk1o2kl72().s[0]++, _models["default"].ProductComment);
var productModel = (cov_1rk1o2kl72().s[1]++, _models["default"].Product);
cov_1rk1o2kl72().s[2]++;
var createComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, existingproduct, decode, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_1rk1o2kl72().f[0]++;
          cov_1rk1o2kl72().s[3]++;
          _context.prev = 2;
          token = (cov_1rk1o2kl72().s[4]++, (0, _checkToken["default"])(req));
          cov_1rk1o2kl72().s[5]++;
          _context.next = 7;
          return productModel.findOne({
            where: {
              productId: req.body.productId
            }
          });
        case 7:
          existingproduct = _context.sent;
          decode = (cov_1rk1o2kl72().s[6]++, (0, _userHelper.decodeToken)(token));
          id = (cov_1rk1o2kl72().s[7]++, decode.userId);
          cov_1rk1o2kl72().s[8]++;
          console.log(id);
          cov_1rk1o2kl72().s[9]++;
          if (existingproduct) {
            _context.next = 19;
            break;
          }
          cov_1rk1o2kl72().b[0][0]++;
          cov_1rk1o2kl72().s[10]++;
          return _context.abrupt("return", res.status(404).send({
            message: "You can not comment on a non existing product."
          }));
        case 19:
          cov_1rk1o2kl72().b[0][1]++;
        case 20:
          cov_1rk1o2kl72().s[11]++;
          _context.next = 23;
          return commentModel.create({
            productId: req.body.productId,
            userId: id,
            comment: req.body.comment
          }).then(function (data) {
            cov_1rk1o2kl72().f[1]++;
            cov_1rk1o2kl72().s[12]++;
            return res.status(201).send({
              message: "Comment posted successfully",
              data: data
            });
          })["catch"](function (err) {
            cov_1rk1o2kl72().f[2]++;
            cov_1rk1o2kl72().s[13]++;
            return res.status(400).send({
              message: "ERROR ".concat(err)
            });
          });
        case 23:
          _context.next = 29;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](2);
          cov_1rk1o2kl72().s[14]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 25]]);
  }));
  return function createComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createComment = createComment;