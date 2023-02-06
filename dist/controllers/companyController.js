"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneCompany = exports.getCompanies = exports.deleteCompanies = exports.createCompany = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
var _fileUpload = require("../helpers/fileUpload");
function cov_177680kdf3() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\companyController.js";
  var hash = "8f6d8490097f6d36f30eaed5f9e6249d398c0dca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\companyController.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 34
        }
      },
      "1": {
        start: {
          line: 8,
          column: 29
        },
        end: {
          line: 64,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 63,
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
          line: 14,
          column: 35
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 57,
          column: 9
        }
      },
      "7": {
        start: {
          line: 41,
          column: 8
        },
        end: {
          line: 52,
          column: 9
        }
      },
      "8": {
        start: {
          line: 42,
          column: 10
        },
        end: {
          line: 42,
          column: 38
        }
      },
      "9": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 46,
          column: 13
        }
      },
      "10": {
        start: {
          line: 48,
          column: 10
        },
        end: {
          line: 48,
          column: 38
        }
      },
      "11": {
        start: {
          line: 49,
          column: 10
        },
        end: {
          line: 51,
          column: 13
        }
      },
      "12": {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 30
        }
      },
      "13": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 41
        }
      },
      "14": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 26
        }
      },
      "15": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 62,
          column: 7
        }
      },
      "16": {
        start: {
          line: 66,
          column: 28
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "17": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 90,
          column: 3
        }
      },
      "18": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 85,
          column: 9
        }
      },
      "19": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 79,
          column: 11
        }
      },
      "20": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 84,
          column: 11
        }
      },
      "21": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 89,
          column: 7
        }
      },
      "22": {
        start: {
          line: 93,
          column: 29
        },
        end: {
          line: 116,
          column: 1
        }
      },
      "23": {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "24": {
        start: {
          line: 95,
          column: 19
        },
        end: {
          line: 95,
          column: 29
        }
      },
      "25": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 110,
          column: 9
        }
      },
      "26": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 104,
          column: 11
        }
      },
      "27": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 109,
          column: 11
        }
      },
      "28": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 114,
          column: 7
        }
      },
      "29": {
        start: {
          line: 118,
          column: 31
        },
        end: {
          line: 146,
          column: 1
        }
      },
      "30": {
        start: {
          line: 119,
          column: 2
        },
        end: {
          line: 145,
          column: 3
        }
      },
      "31": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 140,
          column: 9
        }
      },
      "32": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 134,
          column: 9
        }
      },
      "33": {
        start: {
          line: 127,
          column: 10
        },
        end: {
          line: 129,
          column: 13
        }
      },
      "34": {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 133,
          column: 13
        }
      },
      "35": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 139,
          column: 11
        }
      },
      "36": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 144,
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
            line: 64,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        },
        loc: {
          start: {
            line: 40,
            column: 22
          },
          end: {
            line: 53,
            column: 7
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 54,
            column: 13
          },
          end: {
            line: 54,
            column: 14
          }
        },
        loc: {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 57,
            column: 7
          }
        },
        line: 54
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 66,
            column: 28
          },
          end: {
            line: 66,
            column: 29
          }
        },
        loc: {
          start: {
            line: 66,
            column: 48
          },
          end: {
            line: 91,
            column: 1
          }
        },
        line: 66
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 75,
            column: 13
          }
        },
        loc: {
          start: {
            line: 75,
            column: 22
          },
          end: {
            line: 80,
            column: 7
          }
        },
        line: 75
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 81,
            column: 13
          },
          end: {
            line: 81,
            column: 14
          }
        },
        loc: {
          start: {
            line: 81,
            column: 22
          },
          end: {
            line: 85,
            column: 7
          }
        },
        line: 81
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 93,
            column: 29
          },
          end: {
            line: 93,
            column: 30
          }
        },
        loc: {
          start: {
            line: 93,
            column: 49
          },
          end: {
            line: 116,
            column: 1
          }
        },
        line: 93
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 100,
            column: 12
          },
          end: {
            line: 100,
            column: 13
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
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 106,
            column: 13
          },
          end: {
            line: 106,
            column: 14
          }
        },
        loc: {
          start: {
            line: 106,
            column: 22
          },
          end: {
            line: 110,
            column: 7
          }
        },
        line: 106
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 118,
            column: 31
          },
          end: {
            line: 118,
            column: 32
          }
        },
        loc: {
          start: {
            line: 118,
            column: 51
          },
          end: {
            line: 146,
            column: 1
          }
        },
        line: 118
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 125,
            column: 12
          },
          end: {
            line: 125,
            column: 13
          }
        },
        loc: {
          start: {
            line: 125,
            column: 22
          },
          end: {
            line: 135,
            column: 7
          }
        },
        line: 125
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 136,
            column: 13
          },
          end: {
            line: 136,
            column: 14
          }
        },
        loc: {
          start: {
            line: 136,
            column: 22
          },
          end: {
            line: 140,
            column: 7
          }
        },
        line: 136
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        }, {
          start: {
            line: 47,
            column: 15
          },
          end: {
            line: 52,
            column: 9
          }
        }],
        line: 41
      },
      "1": {
        loc: {
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        }, {
          start: {
            line: 130,
            column: 15
          },
          end: {
            line: 134,
            column: 9
          }
        }],
        line: 126
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
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f6d8490097f6d36f30eaed5f9e6249d398c0dca"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_177680kdf3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_177680kdf3();
var companyModel = (cov_177680kdf3().s[0]++, _models["default"].Company);
cov_177680kdf3().s[1]++;
var createCompany = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_177680kdf3().f[0]++;
          cov_177680kdf3().s[2]++;
          _context.prev = 2;
          token = (cov_177680kdf3().s[3]++, (0, _checkToken["default"])(req));
          decode = (cov_177680kdf3().s[4]++, (0, _userHelper.decodeToken)(token));
          cov_177680kdf3().s[5]++;
          console.log(req.data, "&&&&&");

          // if (req.file) {
          //   req.body.companyLogo = await fileUpload(req);
          // } else {
          //   req.body.companyLogo =
          //     "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png";
          // }
          cov_177680kdf3().s[6]++;
          _context.next = 10;
          return companyModel.findOrCreate({
            userId: decode.userId,
            companyName: req.data.companyName,
            companyLogo: req.data.companyLogo,
            description: req.data.description,
            companyProducts: req.data.companyProducts,
            address: req.data.address,
            where: {
              userId: decode.userId,
              companyName: req.data.companyName,
              companyLogo: req.data.companyLogo,
              description: req.data.description,
              companyProducts: req.data.companyProducts,
              address: req.data.address
            }
          }).then(function (data) {
            cov_177680kdf3().f[1]++;
            cov_177680kdf3().s[7]++;
            if (data[1]) {
              cov_177680kdf3().b[0][0]++;
              cov_177680kdf3().s[8]++;
              console.log(data, req.data);
              cov_177680kdf3().s[9]++;
              return res.status(201).send({
                message: "You have successully registered your company!!!",
                data: data
              });
            } else {
              cov_177680kdf3().b[0][1]++;
              cov_177680kdf3().s[10]++;
              console.log(data, req.data);
              cov_177680kdf3().s[11]++;
              return res.status(409).send({
                error: "This company name is already taken!"
              });
            }
          })["catch"](function (err) {
            cov_177680kdf3().f[2]++;
            cov_177680kdf3().s[12]++;
            console.log(req.data);
            cov_177680kdf3().s[13]++;
            return res.status(400).send(err);
          });
        case 10:
          _context.next = 18;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          cov_177680kdf3().s[14]++;
          console.log(req.data);
          cov_177680kdf3().s[15]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return function createCompany(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCompany = createCompany;
cov_177680kdf3().s[16]++;
var getCompanies = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_177680kdf3().f[3]++;
          cov_177680kdf3().s[17]++;
          _context2.prev = 2;
          cov_177680kdf3().s[18]++;
          _context2.next = 6;
          return companyModel.findAll({
            include: [{
              model: _models["default"].User,
              as: "owner"
            }, {
              model: _models["default"].Product,
              as: "Products"
            }]
          }).then(function (data) {
            cov_177680kdf3().f[4]++;
            cov_177680kdf3().s[19]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_177680kdf3().f[5]++;
            cov_177680kdf3().s[20]++;
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
          cov_177680kdf3().s[21]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getCompanies(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getCompanies = getCompanies;
cov_177680kdf3().s[22]++;
var getOneCompany = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _ref4, id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_177680kdf3().f[6]++;
          cov_177680kdf3().s[23]++;
          _context3.prev = 2;
          _ref4 = (cov_177680kdf3().s[24]++, req.params), id = _ref4.id;
          cov_177680kdf3().s[25]++;
          _context3.next = 7;
          return companyModel.findOne({
            where: {
              companyId: id
            }
          }).then(function (data) {
            cov_177680kdf3().f[7]++;
            cov_177680kdf3().s[26]++;
            return res.send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_177680kdf3().f[8]++;
            cov_177680kdf3().s[27]++;
            return res.status(500).send({
              message: "".concat(err)
            });
          });
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_177680kdf3().s[28]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneCompany(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneCompany = getOneCompany;
cov_177680kdf3().s[29]++;
var deleteCompanies = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_177680kdf3().f[9]++;
          cov_177680kdf3().s[30]++;
          _context4.prev = 2;
          cov_177680kdf3().s[31]++;
          _context4.next = 6;
          return companyModel.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_177680kdf3().f[10]++;
            cov_177680kdf3().s[32]++;
            if (data === 1) {
              cov_177680kdf3().b[1][0]++;
              cov_177680kdf3().s[33]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " company successfully!")
              });
            } else {
              cov_177680kdf3().b[1][1]++;
              cov_177680kdf3().s[34]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " companies successfully!")
              });
            }
          })["catch"](function (err) {
            cov_177680kdf3().f[11]++;
            cov_177680kdf3().s[35]++;
            return res.status(403).send({
              error: "An error occured while deleting company!"
            });
          });
        case 6:
          _context4.next = 12;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](2);
          cov_177680kdf3().s[36]++;
          return _context4.abrupt("return", res.status(500).send({
            error: "".concat(_context4.t0)
          }));
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 8]]);
  }));
  return function deleteCompanies(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteCompanies = deleteCompanies;