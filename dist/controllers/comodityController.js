"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComodities = exports.deleteComodities = exports.createComodity = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_kyq2oee81() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\comodityController.js";
  var hash = "81460434d3e3a20f1432a6e7b4d3fe1e8b3d8dea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\comodityController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 36
        }
      },
      "1": {
        start: {
          line: 5,
          column: 30
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "4": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 26,
          column: 9
        }
      },
      "5": {
        start: {
          line: 18,
          column: 10
        },
        end: {
          line: 21,
          column: 13
        }
      },
      "6": {
        start: {
          line: 23,
          column: 10
        },
        end: {
          line: 25,
          column: 13
        }
      },
      "7": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 41
        }
      },
      "8": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 34,
          column: 7
        }
      },
      "9": {
        start: {
          line: 38,
          column: 29
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "10": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 59,
          column: 3
        }
      },
      "11": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 54,
          column: 9
        }
      },
      "12": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 48,
          column: 11
        }
      },
      "13": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 53,
          column: 11
        }
      },
      "14": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 58,
          column: 7
        }
      },
      "15": {
        start: {
          line: 62,
          column: 32
        },
        end: {
          line: 90,
          column: 1
        }
      },
      "16": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 89,
          column: 3
        }
      },
      "17": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 84,
          column: 9
        }
      },
      "18": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 78,
          column: 9
        }
      },
      "19": {
        start: {
          line: 71,
          column: 10
        },
        end: {
          line: 73,
          column: 13
        }
      },
      "20": {
        start: {
          line: 75,
          column: 10
        },
        end: {
          line: 77,
          column: 13
        }
      },
      "21": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 83,
          column: 11
        }
      },
      "22": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 88,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 50
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 13
          }
        },
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 27,
            column: 7
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 14
          }
        },
        loc: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 30,
            column: 7
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 38,
            column: 29
          },
          end: {
            line: 38,
            column: 30
          }
        },
        loc: {
          start: {
            line: 38,
            column: 49
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 38
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 13
          }
        },
        loc: {
          start: {
            line: 44,
            column: 22
          },
          end: {
            line: 49,
            column: 7
          }
        },
        line: 44
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 50,
            column: 13
          },
          end: {
            line: 50,
            column: 14
          }
        },
        loc: {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 54,
            column: 7
          }
        },
        line: 50
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 62,
            column: 32
          },
          end: {
            line: 62,
            column: 33
          }
        },
        loc: {
          start: {
            line: 62,
            column: 52
          },
          end: {
            line: 90,
            column: 1
          }
        },
        line: 62
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 69,
            column: 12
          },
          end: {
            line: 69,
            column: 13
          }
        },
        loc: {
          start: {
            line: 69,
            column: 22
          },
          end: {
            line: 79,
            column: 7
          }
        },
        line: 69
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 80,
            column: 13
          },
          end: {
            line: 80,
            column: 14
          }
        },
        loc: {
          start: {
            line: 80,
            column: 22
          },
          end: {
            line: 84,
            column: 7
          }
        },
        line: 80
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 8
          },
          end: {
            line: 26,
            column: 9
          }
        }, {
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 26,
            column: 9
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 78,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 78,
            column: 9
          }
        }, {
          start: {
            line: 74,
            column: 15
          },
          end: {
            line: 78,
            column: 9
          }
        }],
        line: 70
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
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "81460434d3e3a20f1432a6e7b4d3fe1e8b3d8dea"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kyq2oee81 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_kyq2oee81();
var comodityModel = (cov_kyq2oee81().s[0]++, _models["default"].Comodity);
cov_kyq2oee81().s[1]++;
var createComodity = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_kyq2oee81().f[0]++;
          cov_kyq2oee81().s[2]++;
          _context.prev = 2;
          cov_kyq2oee81().s[3]++;
          _context.next = 6;
          return comodityModel.findOrCreate({
            comodityName: req.body.comodityName,
            description: req.body.description,
            where: {
              comodityName: req.body.comodityName
              // description: req.body.description,
            }
          }).then(function (data) {
            cov_kyq2oee81().f[1]++;
            cov_kyq2oee81().s[4]++;
            if (data[1]) {
              cov_kyq2oee81().b[0][0]++;
              cov_kyq2oee81().s[5]++;
              return res.status(201).send({
                message: "You have successully added a new comodity!!!",
                data: data
              });
            } else {
              cov_kyq2oee81().b[0][1]++;
              cov_kyq2oee81().s[6]++;
              return res.status(409).send({
                error: "This comodity name is already taken!"
              });
            }
          })["catch"](function (err) {
            cov_kyq2oee81().f[2]++;
            cov_kyq2oee81().s[7]++;
            return res.status(400).send(err);
          });
        case 6:
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          cov_kyq2oee81().s[8]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 8]]);
  }));
  return function createComodity(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createComodity = createComodity;
cov_kyq2oee81().s[9]++;
var getComodities = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_kyq2oee81().f[3]++;
          cov_kyq2oee81().s[10]++;
          _context2.prev = 2;
          cov_kyq2oee81().s[11]++;
          _context2.next = 6;
          return comodityModel.findAll({
            // include: [{ model: model.User, as: "Users", attributes: ["email"] }],
          }).then(function (data) {
            cov_kyq2oee81().f[4]++;
            cov_kyq2oee81().s[12]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_kyq2oee81().f[5]++;
            cov_kyq2oee81().s[13]++;
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
          cov_kyq2oee81().s[14]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getComodities(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getComodities = getComodities;
cov_kyq2oee81().s[15]++;
var deleteComodities = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_kyq2oee81().f[6]++;
          cov_kyq2oee81().s[16]++;
          _context3.prev = 2;
          cov_kyq2oee81().s[17]++;
          _context3.next = 6;
          return comodityModel.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_kyq2oee81().f[7]++;
            cov_kyq2oee81().s[18]++;
            if (data === 1) {
              cov_kyq2oee81().b[1][0]++;
              cov_kyq2oee81().s[19]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " comodity successfully!")
              });
            } else {
              cov_kyq2oee81().b[1][1]++;
              cov_kyq2oee81().s[20]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " comodities successfully!")
              });
            }
          })["catch"](function (err) {
            cov_kyq2oee81().f[8]++;
            cov_kyq2oee81().s[21]++;
            return res.status(403).send({
              error: "An error occured while deleting comodity!"
            });
          });
        case 6:
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          cov_kyq2oee81().s[22]++;
          return _context3.abrupt("return", res.status(500).send({
            error: "".concat(_context3.t0)
          }));
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function deleteComodities(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.deleteComodities = deleteComodities;