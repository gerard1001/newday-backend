"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRating = exports.fetchRatings = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_2i8lv182bf() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\ratingController.js";
  var hash = "5bbbd921144962c57fa24d66a04b1dee33eaa4bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\ratingController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 32
        }
      },
      "1": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 4,
          column: 32
        }
      },
      "2": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "3": {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "5": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 36
        }
      },
      "6": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 12,
          column: 7
        }
      },
      "7": {
        start: {
          line: 14,
          column: 13
        },
        end: {
          line: 16,
          column: 4
        }
      },
      "8": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 23
        }
      },
      "9": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 13
        }
      },
      "10": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "11": {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 16
        }
      },
      "12": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "13": {
        start: {
          line: 21,
          column: 14
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "14": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "15": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 36
        }
      },
      "16": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 27
        }
      },
      "17": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 19
        }
      },
      "18": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 23
        }
      },
      "19": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 36
        }
      },
      "20": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "21": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "22": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "23": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 43,
          column: 9
        }
      },
      "24": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "25": {
        start: {
          line: 52,
          column: 28
        },
        end: {
          line: 66,
          column: 1
        }
      },
      "26": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 65,
          column: 7
        }
      },
      "27": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 59,
          column: 9
        }
      },
      "28": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 64,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 6,
            column: 26
          }
        },
        loc: {
          start: {
            line: 6,
            column: 45
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 49
          },
          end: {
            line: 30,
            column: 50
          }
        },
        loc: {
          start: {
            line: 30,
            column: 58
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
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
      "4": {
        name: "(anonymous_4)",
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
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 52,
            column: 28
          },
          end: {
            line: 52,
            column: 29
          }
        },
        loc: {
          start: {
            line: 52,
            column: 48
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 52
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 55,
            column: 10
          },
          end: {
            line: 55,
            column: 11
          }
        },
        loc: {
          start: {
            line: 55,
            column: 20
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 55
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 61,
            column: 11
          },
          end: {
            line: 61,
            column: 12
          }
        },
        loc: {
          start: {
            line: 61,
            column: 20
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 61
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 13,
            column: 3
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
        line: 8
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
      "28": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5bbbd921144962c57fa24d66a04b1dee33eaa4bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2i8lv182bf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2i8lv182bf();
var reviewModel = (cov_2i8lv182bf().s[0]++, _models["default"].Review);
var ratingModel = (cov_2i8lv182bf().s[1]++, _models["default"].Rating);
cov_2i8lv182bf().s[2]++;
var getRating = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rate, dt, sum, i, avg, new_avg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_2i8lv182bf().f[0]++;
          cov_2i8lv182bf().s[3]++;
          _context.next = 4;
          return reviewModel.findAll({});
        case 4:
          rate = _context.sent;
          cov_2i8lv182bf().s[4]++;
          if (!(rate == "")) {
            _context.next = 14;
            break;
          }
          cov_2i8lv182bf().b[0][0]++;
          cov_2i8lv182bf().s[5]++;
          console.log("'No ratings yet'");
          cov_2i8lv182bf().s[6]++;
          return _context.abrupt("return", res.send({
            message: "No ratings yet"
          }));
        case 14:
          cov_2i8lv182bf().b[0][1]++;
        case 15:
          dt = (cov_2i8lv182bf().s[7]++, rate.map(function (result) {
            cov_2i8lv182bf().f[1]++;
            cov_2i8lv182bf().s[8]++;
            return result.rate;
          }));
          sum = (cov_2i8lv182bf().s[9]++, 0);
          cov_2i8lv182bf().s[10]++;
          for (i = (cov_2i8lv182bf().s[11]++, 0); i < dt.length; i++) {
            cov_2i8lv182bf().s[12]++;
            sum = sum + Number(dt[i]);
          }
          avg = (cov_2i8lv182bf().s[13]++, sum / rate.length);
          new_avg = (cov_2i8lv182bf().s[14]++, avg.toFixed(1));
          cov_2i8lv182bf().s[15]++;
          console.log("``````````````````");
          cov_2i8lv182bf().s[16]++;
          console.log(rate.length);
          cov_2i8lv182bf().s[17]++;
          console.log(sum);
          cov_2i8lv182bf().s[18]++;
          console.log(new_avg);
          cov_2i8lv182bf().s[19]++;
          console.log("``````````````````");
          cov_2i8lv182bf().s[20]++;
          _context.next = 34;
          return ratingModel.destroy({
            where: {}
          })["catch"](function (err) {
            cov_2i8lv182bf().f[2]++;
            cov_2i8lv182bf().s[21]++;
            return res.send({
              message: "".concat(err)
            });
          });
        case 34:
          cov_2i8lv182bf().s[22]++;
          _context.next = 37;
          return ratingModel.create({
            rating: new_avg
          }).then(function (data) {
            cov_2i8lv182bf().f[3]++;
            cov_2i8lv182bf().s[23]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_2i8lv182bf().f[4]++;
            cov_2i8lv182bf().s[24]++;
            return res.send({
              message: "".concat(err)
            });
          });
        case 37:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getRating(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getRating = getRating;
cov_2i8lv182bf().s[25]++;
var fetchRatings = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_2i8lv182bf().f[5]++;
          cov_2i8lv182bf().s[26]++;
          _context2.next = 4;
          return ratingModel.findAll({}).then(function (data) {
            cov_2i8lv182bf().f[6]++;
            cov_2i8lv182bf().s[27]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_2i8lv182bf().f[7]++;
            cov_2i8lv182bf().s[28]++;
            return res.send({
              message: "".concat(err)
            });
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchRatings(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.fetchRatings = fetchRatings;