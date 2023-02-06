"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAssignment = exports.getAssignments = exports.assignClass = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_23rfxk00gz() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\categoryClassController.js";
  var hash = "7bd017fdfc7bf8927ba686572ae38739f46f6640";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\categoryClassController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 3,
          column: 36
        }
      },
      "1": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 36
        }
      },
      "2": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 30
        }
      },
      "3": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "5": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 13,
          column: 6
        }
      },
      "6": {
        start: {
          line: 15,
          column: 29
        },
        end: {
          line: 19,
          column: 6
        }
      },
      "7": {
        start: {
          line: 21,
          column: 29
        },
        end: {
          line: 23,
          column: 6
        }
      },
      "8": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "9": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 29,
          column: 9
        }
      },
      "10": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "11": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 34,
          column: 9
        }
      },
      "12": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 53,
          column: 9
        }
      },
      "13": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 49,
          column: 11
        }
      },
      "14": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 41
        }
      },
      "15": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "16": {
        start: {
          line: 61,
          column: 30
        },
        end: {
          line: 82,
          column: 1
        }
      },
      "17": {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 81,
          column: 3
        }
      },
      "18": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 76,
          column: 9
        }
      },
      "19": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 69,
          column: 11
        }
      },
      "20": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 75,
          column: 11
        }
      },
      "21": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 7
        }
      },
      "22": {
        start: {
          line: 84,
          column: 32
        },
        end: {
          line: 111,
          column: 1
        }
      },
      "23": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 110,
          column: 3
        }
      },
      "24": {
        start: {
          line: 86,
          column: 15
        },
        end: {
          line: 86,
          column: 28
        }
      },
      "25": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 105,
          column: 9
        }
      },
      "26": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 98,
          column: 11
        }
      },
      "27": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 104,
          column: 11
        }
      },
      "28": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 109,
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
            column: 27
          },
          end: {
            line: 7,
            column: 28
          }
        },
        loc: {
          start: {
            line: 7,
            column: 47
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 45,
            column: 12
          },
          end: {
            line: 45,
            column: 13
          }
        },
        loc: {
          start: {
            line: 45,
            column: 22
          },
          end: {
            line: 50,
            column: 7
          }
        },
        line: 45
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 51,
            column: 13
          },
          end: {
            line: 51,
            column: 14
          }
        },
        loc: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 53,
            column: 7
          }
        },
        line: 51
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 61,
            column: 30
          },
          end: {
            line: 61,
            column: 31
          }
        },
        loc: {
          start: {
            line: 61,
            column: 50
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 61
      },
      "4": {
        name: "(anonymous_4)",
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
      "5": {
        name: "(anonymous_5)",
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
            line: 76,
            column: 7
          }
        },
        line: 71
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 84,
            column: 32
          },
          end: {
            line: 84,
            column: 33
          }
        },
        loc: {
          start: {
            line: 84,
            column: 52
          },
          end: {
            line: 111,
            column: 1
          }
        },
        line: 84
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 94,
            column: 12
          },
          end: {
            line: 94,
            column: 13
          }
        },
        loc: {
          start: {
            line: 94,
            column: 22
          },
          end: {
            line: 99,
            column: 7
          }
        },
        line: 94
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 100,
            column: 13
          },
          end: {
            line: 100,
            column: 14
          }
        },
        loc: {
          start: {
            line: 100,
            column: 22
          },
          end: {
            line: 105,
            column: 7
          }
        },
        line: 100
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 30,
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
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 25
          }
        }, {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 43
          }
        }],
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 31,
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
            line: 31,
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
        line: 31
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
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7bd017fdfc7bf8927ba686572ae38739f46f6640"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23rfxk00gz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_23rfxk00gz();
var ccModel = (cov_23rfxk00gz().s[0]++, _models["default"].Category_Class);
var categoryModel = (cov_23rfxk00gz().s[1]++, _models["default"].Category);
var classModel = (cov_23rfxk00gz().s[2]++, _models["default"].Class);
cov_23rfxk00gz().s[3]++;
var assignClass = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var existingClass, existingCategory, existingRelation;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_23rfxk00gz().f[0]++;
          cov_23rfxk00gz().s[4]++;
          _context.prev = 2;
          cov_23rfxk00gz().s[5]++;
          _context.next = 6;
          return classModel.findOne({
            where: {
              classId: req.body.classId
            }
          });
        case 6:
          existingClass = _context.sent;
          cov_23rfxk00gz().s[6]++;
          _context.next = 10;
          return categoryModel.findOne({
            where: {
              categoryId: req.body.categoryId
            }
          });
        case 10:
          existingCategory = _context.sent;
          cov_23rfxk00gz().s[7]++;
          _context.next = 14;
          return ccModel.findOne({
            where: {
              classId: req.body.classId,
              categoryId: req.body.categoryId
            }
          });
        case 14:
          existingRelation = _context.sent;
          cov_23rfxk00gz().s[8]++;
          if (!((cov_23rfxk00gz().b[1][0]++, !existingCategory) || (cov_23rfxk00gz().b[1][1]++, !existingClass))) {
            _context.next = 22;
            break;
          }
          cov_23rfxk00gz().b[0][0]++;
          cov_23rfxk00gz().s[9]++;
          return _context.abrupt("return", res.status(404).send({
            message: "The category or Class you are trying assign no longer exists."
          }));
        case 22:
          cov_23rfxk00gz().b[0][1]++;
        case 23:
          cov_23rfxk00gz().s[10]++;
          if (!existingRelation) {
            _context.next = 30;
            break;
          }
          cov_23rfxk00gz().b[2][0]++;
          cov_23rfxk00gz().s[11]++;
          return _context.abrupt("return", res.status(409).send({
            error: "This relation has aready been established."
          }));
        case 30:
          cov_23rfxk00gz().b[2][1]++;
        case 31:
          cov_23rfxk00gz().s[12]++;
          _context.next = 34;
          return ccModel.create({
            classId: req.body.classId,
            categoryId: req.body.categoryId,
            where: {
              classId: req.body.classId,
              categoryId: req.body.categoryId
            }
          }).then(function (data) {
            cov_23rfxk00gz().f[1]++;
            cov_23rfxk00gz().s[13]++;
            return res.status(200).send({
              message: "Success. Link made btn the class and category.",
              data: data
            });
          })["catch"](function (err) {
            cov_23rfxk00gz().f[2]++;
            cov_23rfxk00gz().s[14]++;
            return res.status(400).send(err);
          });
        case 34:
          _context.next = 40;
          break;
        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](2);
          cov_23rfxk00gz().s[15]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 40:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 36]]);
  }));
  return function assignClass(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.assignClass = assignClass;
cov_23rfxk00gz().s[16]++;
var getAssignments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_23rfxk00gz().f[3]++;
          cov_23rfxk00gz().s[17]++;
          _context2.prev = 2;
          cov_23rfxk00gz().s[18]++;
          _context2.next = 6;
          return ccModel.findAndCountAll({}).then(function (data) {
            cov_23rfxk00gz().f[4]++;
            cov_23rfxk00gz().s[19]++;
            return res.status(200).send({
              message: "Fetched all the assigned classes and categories.",
              body: data.rows
            });
          })["catch"](function (err) {
            cov_23rfxk00gz().f[5]++;
            cov_23rfxk00gz().s[20]++;
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_23rfxk00gz().s[21]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getAssignments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAssignments = getAssignments;
cov_23rfxk00gz().s[22]++;
var getOneAssignment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_23rfxk00gz().f[6]++;
          cov_23rfxk00gz().s[23]++;
          _context3.prev = 2;
          id = (cov_23rfxk00gz().s[24]++, req.params.id);
          cov_23rfxk00gz().s[25]++;
          _context3.next = 7;
          return ccModel.findOne({
            where: {
              categoryClassId: id
            }
          }).then(function (data) {
            cov_23rfxk00gz().f[7]++;
            cov_23rfxk00gz().s[26]++;
            return res.status(200).send({
              message: "Fetched one assignment.",
              data: data
            });
          })["catch"](function (err) {
            cov_23rfxk00gz().f[8]++;
            cov_23rfxk00gz().s[27]++;
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_23rfxk00gz().s[28]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneAssignment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneAssignment = getOneAssignment;