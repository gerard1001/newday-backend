"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.getRole = exports.getOneRole = exports.deleteRole = exports.createRole = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_2ox55uxgdv() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\roleController.js";
  var hash = "7c02a5b6c52a403cc236e2befea412183ca718f3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\roleController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 28
        }
      },
      "1": {
        start: {
          line: 5,
          column: 19
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
          line: 15,
          column: 8
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "5": {
        start: {
          line: 16,
          column: 10
        },
        end: {
          line: 19,
          column: 13
        }
      },
      "6": {
        start: {
          line: 21,
          column: 10
        },
        end: {
          line: 23,
          column: 13
        }
      },
      "7": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 29,
          column: 11
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
          column: 16
        },
        end: {
          line: 55,
          column: 1
        }
      },
      "10": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "11": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 49,
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
          column: 4
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "14": {
        start: {
          line: 57,
          column: 19
        },
        end: {
          line: 95,
          column: 1
        }
      },
      "15": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 94,
          column: 3
        }
      },
      "16": {
        start: {
          line: 59,
          column: 15
        },
        end: {
          line: 59,
          column: 28
        }
      },
      "17": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 89,
          column: 9
        }
      },
      "18": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 78,
          column: 30
        }
      },
      "19": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 82,
          column: 11
        }
      },
      "20": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 88,
          column: 11
        }
      },
      "21": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "22": {
        start: {
          line: 97,
          column: 19
        },
        end: {
          line: 122,
          column: 1
        }
      },
      "23": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 121,
          column: 3
        }
      },
      "24": {
        start: {
          line: 99,
          column: 15
        },
        end: {
          line: 99,
          column: 28
        }
      },
      "25": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 116,
          column: 9
        }
      },
      "26": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 110,
          column: 11
        }
      },
      "27": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 115,
          column: 11
        }
      },
      "28": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 120,
          column: 7
        }
      },
      "29": {
        start: {
          line: 124,
          column: 19
        },
        end: {
          line: 152,
          column: 1
        }
      },
      "30": {
        start: {
          line: 125,
          column: 2
        },
        end: {
          line: 151,
          column: 3
        }
      },
      "31": {
        start: {
          line: 126,
          column: 4
        },
        end: {
          line: 146,
          column: 9
        }
      },
      "32": {
        start: {
          line: 132,
          column: 8
        },
        end: {
          line: 140,
          column: 9
        }
      },
      "33": {
        start: {
          line: 133,
          column: 10
        },
        end: {
          line: 135,
          column: 13
        }
      },
      "34": {
        start: {
          line: 137,
          column: 10
        },
        end: {
          line: 139,
          column: 13
        }
      },
      "35": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 145,
          column: 11
        }
      },
      "36": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 150,
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
            column: 19
          },
          end: {
            line: 5,
            column: 20
          }
        },
        loc: {
          start: {
            line: 5,
            column: 39
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
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 25,
            column: 7
          }
        },
        line: 14
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
            line: 30,
            column: 7
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 17
          }
        },
        loc: {
          start: {
            line: 38,
            column: 36
          },
          end: {
            line: 55,
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
            line: 57,
            column: 19
          },
          end: {
            line: 57,
            column: 20
          }
        },
        loc: {
          start: {
            line: 57,
            column: 39
          },
          end: {
            line: 95,
            column: 1
          }
        },
        line: 57
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 77,
            column: 12
          },
          end: {
            line: 77,
            column: 13
          }
        },
        loc: {
          start: {
            line: 77,
            column: 22
          },
          end: {
            line: 83,
            column: 7
          }
        },
        line: 77
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 84,
            column: 13
          },
          end: {
            line: 84,
            column: 14
          }
        },
        loc: {
          start: {
            line: 84,
            column: 22
          },
          end: {
            line: 89,
            column: 7
          }
        },
        line: 84
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 97,
            column: 19
          },
          end: {
            line: 97,
            column: 20
          }
        },
        loc: {
          start: {
            line: 97,
            column: 39
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 97
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 107,
            column: 12
          },
          end: {
            line: 107,
            column: 13
          }
        },
        loc: {
          start: {
            line: 107,
            column: 22
          },
          end: {
            line: 111,
            column: 7
          }
        },
        line: 107
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 112,
            column: 13
          },
          end: {
            line: 112,
            column: 14
          }
        },
        loc: {
          start: {
            line: 112,
            column: 22
          },
          end: {
            line: 116,
            column: 7
          }
        },
        line: 112
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 124,
            column: 19
          },
          end: {
            line: 124,
            column: 20
          }
        },
        loc: {
          start: {
            line: 124,
            column: 39
          },
          end: {
            line: 152,
            column: 1
          }
        },
        line: 124
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 131,
            column: 12
          },
          end: {
            line: 131,
            column: 13
          }
        },
        loc: {
          start: {
            line: 131,
            column: 22
          },
          end: {
            line: 141,
            column: 7
          }
        },
        line: 131
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 142,
            column: 13
          },
          end: {
            line: 142,
            column: 14
          }
        },
        loc: {
          start: {
            line: 142,
            column: 22
          },
          end: {
            line: 146,
            column: 7
          }
        },
        line: 142
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        }, {
          start: {
            line: 20,
            column: 15
          },
          end: {
            line: 24,
            column: 9
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 140,
            column: 9
          }
        }, {
          start: {
            line: 136,
            column: 15
          },
          end: {
            line: 140,
            column: 9
          }
        }],
        line: 132
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
      "13": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c02a5b6c52a403cc236e2befea412183ca718f3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ox55uxgdv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ox55uxgdv();
var roleModel = (cov_2ox55uxgdv().s[0]++, _models["default"].Role);
cov_2ox55uxgdv().s[1]++;
var createRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_2ox55uxgdv().f[0]++;
          cov_2ox55uxgdv().s[2]++;
          _context.prev = 2;
          cov_2ox55uxgdv().s[3]++;
          _context.next = 6;
          return roleModel.findOrCreate({
            role: req.body.role,
            where: {
              role: req.body.role
            }
          }).then(function (created) {
            cov_2ox55uxgdv().f[1]++;
            cov_2ox55uxgdv().s[4]++;
            if (created[1]) {
              cov_2ox55uxgdv().b[0][0]++;
              cov_2ox55uxgdv().s[5]++;
              return res.status(201).send({
                message: "successfully created!",
                created: created
              });
            } else {
              cov_2ox55uxgdv().b[0][1]++;
              cov_2ox55uxgdv().s[6]++;
              return res.status(409).send({
                message: "This role already exists!"
              });
            }
          })["catch"](function (err) {
            cov_2ox55uxgdv().f[2]++;
            cov_2ox55uxgdv().s[7]++;
            return res.status(400).send({
              message: "You got an error: ".concat(err)
            });
          });
        case 6:
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          cov_2ox55uxgdv().s[8]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 8]]);
  }));
  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createRole = createRole;
cov_2ox55uxgdv().s[9]++;
var getRole = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_2ox55uxgdv().f[3]++;
          cov_2ox55uxgdv().s[10]++;
          _context2.prev = 2;
          cov_2ox55uxgdv().s[11]++;
          _context2.next = 6;
          return roleModel.findAll({
            order: [["role", "ASC"]]
          }).then(function (data) {
            cov_2ox55uxgdv().f[4]++;
            cov_2ox55uxgdv().s[12]++;
            return res.status(200).send({
              message: "Fetched all roles",
              data: data
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_2ox55uxgdv().s[13]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getRole(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getRole = getRole;
cov_2ox55uxgdv().s[14]++;
var getOneRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_2ox55uxgdv().f[5]++;
          cov_2ox55uxgdv().s[15]++;
          _context3.prev = 2;
          id = (cov_2ox55uxgdv().s[16]++, req.params.id);
          cov_2ox55uxgdv().s[17]++;
          _context3.next = 7;
          return roleModel.findOne({
            attributes: ["role"],
            order: [["role", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users",
              attributes: ["email"],
              order: [["email", "ASC"]]
            }],
            where: {
              role: id
            }
          }).then(function (data) {
            cov_2ox55uxgdv().f[6]++;
            var role = (cov_2ox55uxgdv().s[18]++, data.role);
            cov_2ox55uxgdv().s[19]++;
            return res.status(200).send({
              message: "Fetched list of ".concat(role, "s"),
              data: data
            });
          })["catch"](function (err) {
            cov_2ox55uxgdv().f[7]++;
            cov_2ox55uxgdv().s[20]++;
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
          cov_2ox55uxgdv().s[21]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneRole = getOneRole;
cov_2ox55uxgdv().s[22]++;
var updateRole = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_2ox55uxgdv().f[8]++;
          cov_2ox55uxgdv().s[23]++;
          _context4.prev = 2;
          id = (cov_2ox55uxgdv().s[24]++, req.params.id);
          cov_2ox55uxgdv().s[25]++;
          _context4.next = 7;
          return roleModel.update(req.body, {
            where: {
              roleId: id
            }
          }).then(function (data) {
            cov_2ox55uxgdv().f[9]++;
            cov_2ox55uxgdv().s[26]++;
            return res.status(200).send({
              message: "role updated successfylly!"
            });
          })["catch"](function (err) {
            cov_2ox55uxgdv().f[10]++;
            cov_2ox55uxgdv().s[27]++;
            return res.status(400).send({
              message: "An error occured while updating role!"
            });
          });
        case 7:
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          cov_2ox55uxgdv().s[28]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function updateRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateRole = updateRole;
cov_2ox55uxgdv().s[29]++;
var deleteRole = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_2ox55uxgdv().f[11]++;
          cov_2ox55uxgdv().s[30]++;
          _context5.prev = 2;
          cov_2ox55uxgdv().s[31]++;
          _context5.next = 6;
          return roleModel.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_2ox55uxgdv().f[12]++;
            cov_2ox55uxgdv().s[32]++;
            if (data === 1) {
              cov_2ox55uxgdv().b[1][0]++;
              cov_2ox55uxgdv().s[33]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " role successfully!")
              });
            } else {
              cov_2ox55uxgdv().b[1][1]++;
              cov_2ox55uxgdv().s[34]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " roles successfully!")
              });
            }
          })["catch"](function (err) {
            cov_2ox55uxgdv().f[13]++;
            cov_2ox55uxgdv().s[35]++;
            return res.status(400).send({
              message: "An error occured while deleting role!"
            });
          });
        case 6:
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](2);
          cov_2ox55uxgdv().s[36]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 8]]);
  }));
  return function deleteRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteRole = deleteRole;