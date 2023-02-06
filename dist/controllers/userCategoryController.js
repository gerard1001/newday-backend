"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAssignment = exports.getAssignments = exports.assignUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_wstzpibme() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\userCategoryController.js";
  var hash = "a28e03a3860034a2ab35ed8d787a6462ac3b3b1b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\userCategoryController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 3,
          column: 35
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
          column: 18
        },
        end: {
          line: 5,
          column: 28
        }
      },
      "3": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 63,
          column: 3
        }
      },
      "5": {
        start: {
          line: 9,
          column: 25
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
          line: 40,
          column: 5
        }
      },
      "13": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "14": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 58,
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
          line: 57,
          column: 41
        }
      },
      "17": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 62,
          column: 7
        }
      },
      "18": {
        start: {
          line: 66,
          column: 30
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "19": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 86,
          column: 3
        }
      },
      "20": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 81,
          column: 9
        }
      },
      "21": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 74,
          column: 11
        }
      },
      "22": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 80,
          column: 11
        }
      },
      "23": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 85,
          column: 7
        }
      },
      "24": {
        start: {
          line: 89,
          column: 32
        },
        end: {
          line: 116,
          column: 1
        }
      },
      "25": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "26": {
        start: {
          line: 91,
          column: 15
        },
        end: {
          line: 91,
          column: 28
        }
      },
      "27": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 110,
          column: 9
        }
      },
      "28": {
        start: {
          line: 100,
          column: 8
        },
        end: {
          line: 103,
          column: 11
        }
      },
      "29": {
        start: {
          line: 106,
          column: 8
        },
        end: {
          line: 109,
          column: 11
        }
      },
      "30": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 114,
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
            column: 26
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 46
          },
          end: {
            line: 64,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
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
      "2": {
        name: "(anonymous_2)",
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
            line: 58,
            column: 7
          }
        },
        line: 56
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 66,
            column: 30
          },
          end: {
            line: 66,
            column: 31
          }
        },
        loc: {
          start: {
            line: 66,
            column: 50
          },
          end: {
            line: 87,
            column: 1
          }
        },
        line: 66
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 12
          },
          end: {
            line: 70,
            column: 13
          }
        },
        loc: {
          start: {
            line: 70,
            column: 22
          },
          end: {
            line: 75,
            column: 7
          }
        },
        line: 70
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 76,
            column: 13
          },
          end: {
            line: 76,
            column: 14
          }
        },
        loc: {
          start: {
            line: 76,
            column: 22
          },
          end: {
            line: 81,
            column: 7
          }
        },
        line: 76
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 89,
            column: 32
          },
          end: {
            line: 89,
            column: 33
          }
        },
        loc: {
          start: {
            line: 89,
            column: 52
          },
          end: {
            line: 116,
            column: 1
          }
        },
        line: 89
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 99,
            column: 12
          },
          end: {
            line: 99,
            column: 13
          }
        },
        loc: {
          start: {
            line: 99,
            column: 22
          },
          end: {
            line: 104,
            column: 7
          }
        },
        line: 99
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 105,
            column: 13
          },
          end: {
            line: 105,
            column: 14
          }
        },
        loc: {
          start: {
            line: 105,
            column: 22
          },
          end: {
            line: 110,
            column: 7
          }
        },
        line: 105
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
            column: 42
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
            column: 42
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
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 32
          }
        }, {
          start: {
            line: 31,
            column: 36
          },
          end: {
            line: 31,
            column: 60
          }
        }],
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 40,
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
        line: 36
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
      "30": 0
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
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a28e03a3860034a2ab35ed8d787a6462ac3b3b1b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wstzpibme = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wstzpibme();
var ucModel = (cov_wstzpibme().s[0]++, _models["default"].User_Category);
var categoryModel = (cov_wstzpibme().s[1]++, _models["default"].Category);
var userModel = (cov_wstzpibme().s[2]++, _models["default"].User);
cov_wstzpibme().s[3]++;
var assignUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var existingUser, existingCategory, existingRelation;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_wstzpibme().f[0]++;
          cov_wstzpibme().s[4]++;
          _context.prev = 2;
          cov_wstzpibme().s[5]++;
          _context.next = 6;
          return userModel.findOne({
            where: {
              userId: req.body.userId
            }
          });
        case 6:
          existingUser = _context.sent;
          cov_wstzpibme().s[6]++;
          _context.next = 10;
          return categoryModel.findOne({
            where: {
              categoryId: req.body.categoryId
            }
          });
        case 10:
          existingCategory = _context.sent;
          cov_wstzpibme().s[7]++;
          _context.next = 14;
          return ucModel.findOne({
            where: {
              userId: req.body.userId,
              categoryId: req.body.categoryId
            }
          });
        case 14:
          existingRelation = _context.sent;
          cov_wstzpibme().s[8]++;
          if (!((cov_wstzpibme().b[1][0]++, !existingCategory) || (cov_wstzpibme().b[1][1]++, !existingUser))) {
            _context.next = 22;
            break;
          }
          cov_wstzpibme().b[0][0]++;
          cov_wstzpibme().s[9]++;
          return _context.abrupt("return", res.status(404).send({
            message: "The category or user you are trying assign no longer exists!!!"
          }));
        case 22:
          cov_wstzpibme().b[0][1]++;
        case 23:
          cov_wstzpibme().s[10]++;
          if (!((cov_wstzpibme().b[3][0]++, existingUser.roleId != 2) && (cov_wstzpibme().b[3][1]++, existingUser.roleId != 3))) {
            _context.next = 30;
            break;
          }
          cov_wstzpibme().b[2][0]++;
          cov_wstzpibme().s[11]++;
          return _context.abrupt("return", res.status(400).send({
            message: "You can't assign this category to client or admin."
          }));
        case 30:
          cov_wstzpibme().b[2][1]++;
        case 31:
          cov_wstzpibme().s[12]++;
          if (!existingRelation) {
            _context.next = 38;
            break;
          }
          cov_wstzpibme().b[4][0]++;
          cov_wstzpibme().s[13]++;
          return _context.abrupt("return", res.status(409).send({
            message: "This relation has aready been established!!!"
          }));
        case 38:
          cov_wstzpibme().b[4][1]++;
        case 39:
          cov_wstzpibme().s[14]++;
          _context.next = 42;
          return ucModel.create({
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            where: {
              userId: req.body.userId,
              categoryId: req.body.categoryId
            }
          }).then(function (data) {
            cov_wstzpibme().f[1]++;
            cov_wstzpibme().s[15]++;
            return res.status(200).send({
              message: "Success. Link made btn the user and category!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_wstzpibme().f[2]++;
            cov_wstzpibme().s[16]++;
            return res.status(400).send(err);
          });
        case 42:
          _context.next = 48;
          break;
        case 44:
          _context.prev = 44;
          _context.t0 = _context["catch"](2);
          cov_wstzpibme().s[17]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 48:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 44]]);
  }));
  return function assignUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.assignUser = assignUser;
cov_wstzpibme().s[18]++;
var getAssignments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_wstzpibme().f[3]++;
          cov_wstzpibme().s[19]++;
          _context2.prev = 2;
          cov_wstzpibme().s[20]++;
          _context2.next = 6;
          return ucModel.findAll({}).then(function (data) {
            cov_wstzpibme().f[4]++;
            cov_wstzpibme().s[21]++;
            return res.status(200).send({
              message: "Fetched all the assigned users and categories!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_wstzpibme().f[5]++;
            cov_wstzpibme().s[22]++;
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
          cov_wstzpibme().s[23]++;
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
cov_wstzpibme().s[24]++;
var getOneAssignment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_wstzpibme().f[6]++;
          cov_wstzpibme().s[25]++;
          _context3.prev = 2;
          id = (cov_wstzpibme().s[26]++, req.params.id);
          cov_wstzpibme().s[27]++;
          _context3.next = 7;
          return ucModel.findOne({
            where: {
              userCategoryId: id
            }
          }).then(function (data) {
            cov_wstzpibme().f[7]++;
            cov_wstzpibme().s[28]++;
            return res.status(200).send({
              message: "Fetched one assignment!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_wstzpibme().f[8]++;
            cov_wstzpibme().s[29]++;
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
          cov_wstzpibme().s[30]++;
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