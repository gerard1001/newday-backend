"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.seeProfile = exports.createProfile = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _fileUpload = require("../helpers/fileUpload");
function cov_1tar1ex06p() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\profileController.js";
  var hash = "3132aa14d0a4b2c2e37802c1bd4567c1ddfe6fa0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\profileController.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 34
        }
      },
      "1": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 34
        }
      },
      "2": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 58
        },
        end: {
          line: 9,
          column: 66
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "6": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "7": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 17,
          column: 7
        }
      },
      "8": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 16,
          column: 98
        }
      },
      "9": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 19,
          column: 85
        }
      },
      "10": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "11": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 35,
          column: 67
        }
      },
      "12": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 76
        }
      },
      "13": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "14": {
        start: {
          line: 47,
          column: 19
        },
        end: {
          line: 55,
          column: 1
        }
      },
      "15": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "16": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 31
        }
      },
      "17": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "18": {
        start: {
          line: 57,
          column: 22
        },
        end: {
          line: 132,
          column: 1
        }
      },
      "19": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 131,
          column: 3
        }
      },
      "20": {
        start: {
          line: 59,
          column: 15
        },
        end: {
          line: 59,
          column: 28
        }
      },
      "21": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "22": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 48
        }
      },
      "23": {
        start: {
          line: 66,
          column: 24
        },
        end: {
          line: 83,
          column: 8
        }
      },
      "24": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 27
        }
      },
      "25": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 82,
          column: 11
        }
      },
      "26": {
        start: {
          line: 86,
          column: 22
        },
        end: {
          line: 86,
          column: 51
        }
      },
      "27": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 103,
          column: 9
        }
      },
      "28": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 102,
          column: 66
        }
      },
      "29": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 126,
          column: 9
        }
      },
      "30": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 118,
          column: 11
        }
      },
      "31": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 125,
          column: 11
        }
      },
      "32": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 130,
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
            column: 22
          },
          end: {
            line: 7,
            column: 23
          }
        },
        loc: {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 32,
            column: 13
          }
        },
        loc: {
          start: {
            line: 32,
            column: 22
          },
          end: {
            line: 36,
            column: 7
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 13
          },
          end: {
            line: 37,
            column: 14
          }
        },
        loc: {
          start: {
            line: 37,
            column: 22
          },
          end: {
            line: 39,
            column: 7
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 20
          }
        },
        loc: {
          start: {
            line: 47,
            column: 39
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 47
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 22
          },
          end: {
            line: 57,
            column: 23
          }
        },
        loc: {
          start: {
            line: 57,
            column: 42
          },
          end: {
            line: 132,
            column: 1
          }
        },
        line: 57
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 78,
            column: 14
          }
        },
        loc: {
          start: {
            line: 78,
            column: 24
          },
          end: {
            line: 83,
            column: 7
          }
        },
        line: 78
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 101,
            column: 13
          },
          end: {
            line: 101,
            column: 14
          }
        },
        loc: {
          start: {
            line: 101,
            column: 24
          },
          end: {
            line: 103,
            column: 7
          }
        },
        line: 101
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 114,
            column: 12
          },
          end: {
            line: 114,
            column: 13
          }
        },
        loc: {
          start: {
            line: 114,
            column: 22
          },
          end: {
            line: 119,
            column: 7
          }
        },
        line: 114
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 120,
            column: 13
          },
          end: {
            line: 120,
            column: 14
          }
        },
        loc: {
          start: {
            line: 120,
            column: 22
          },
          end: {
            line: 126,
            column: 7
          }
        },
        line: 120
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 11
          },
          end: {
            line: 20,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 17,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 17,
            column: 7
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
        line: 14
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
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
        line: 61
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
      "32": 0
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
    hash: "3132aa14d0a4b2c2e37802c1bd4567c1ddfe6fa0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1tar1ex06p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1tar1ex06p();
var profileModel = (cov_1tar1ex06p().s[0]++, _models["default"].Profile);
var addressModel = (cov_1tar1ex06p().s[1]++, _models["default"].Address);
cov_1tar1ex06p().s[2]++;
var createProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _ref2, userId, gender, picture, age, phoneNumber;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_1tar1ex06p().f[0]++;
          cov_1tar1ex06p().s[3]++;
          _context.prev = 2;
          _ref2 = (cov_1tar1ex06p().s[4]++, req.body), userId = _ref2.userId, gender = _ref2.gender, picture = _ref2.picture, age = _ref2.age, phoneNumber = _ref2.phoneNumber;
          cov_1tar1ex06p().s[5]++;
          if (!req.file) {
            _context.next = 13;
            break;
          }
          cov_1tar1ex06p().b[0][0]++;
          cov_1tar1ex06p().s[6]++;
          _context.next = 10;
          return fileUpload(req);
        case 10:
          req.body.picture = _context.sent;
          _context.next = 18;
          break;
        case 13:
          cov_1tar1ex06p().b[0][1]++;
          cov_1tar1ex06p().s[7]++;
          if (gender === "female") {
            cov_1tar1ex06p().b[1][0]++;
            cov_1tar1ex06p().s[8]++;
            req.body.picture = "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
          } else {
            cov_1tar1ex06p().b[1][1]++;
          }
          cov_1tar1ex06p().s[9]++;
          req.body.picture = "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";
        case 18:
          cov_1tar1ex06p().s[10]++;
          _context.next = 21;
          return profileModel.create({
            where: {
              userId: userId,
              picture: picture,
              age: age,
              gender: gender,
              phoneNumber: phoneNumber
            }
          }).then(function (data) {
            cov_1tar1ex06p().f[1]++;
            cov_1tar1ex06p().s[11]++;
            return res.status(201).send({
              message: "Profile created successfully",
              data: data
            });
          })["catch"](function (err) {
            cov_1tar1ex06p().f[2]++;
            cov_1tar1ex06p().s[12]++;
            return res.status(400).send({
              message: "You have an error!",
              err: err
            });
          });
        case 21:
          _context.next = 27;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](2);
          cov_1tar1ex06p().s[13]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 23]]);
  }));
  return function createProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createProfile = createProfile;
cov_1tar1ex06p().s[14]++;
var seeProfile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_1tar1ex06p().f[3]++;
          cov_1tar1ex06p().s[15]++;
          _context2.prev = 2;
          cov_1tar1ex06p().s[16]++;
          _context2.next = 6;
          return profileModel.get({});
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_1tar1ex06p().s[17]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function seeProfile(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.seeProfile = seeProfile;
cov_1tar1ex06p().s[18]++;
var updateProfile = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, profileUser, addressId;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_1tar1ex06p().f[4]++;
          cov_1tar1ex06p().s[19]++;
          _context3.prev = 2;
          id = (cov_1tar1ex06p().s[20]++, req.params.id);
          cov_1tar1ex06p().s[21]++;
          if (!req.file) {
            _context3.next = 13;
            break;
          }
          cov_1tar1ex06p().b[2][0]++;
          cov_1tar1ex06p().s[22]++;
          _context3.next = 10;
          return (0, _fileUpload.imageUpload)(req);
        case 10:
          req.body.picture = _context3.sent;
          _context3.next = 14;
          break;
        case 13:
          cov_1tar1ex06p().b[2][1]++;
        case 14:
          cov_1tar1ex06p().s[23]++;
          _context3.next = 17;
          return profileModel.findOne({
            where: {
              profileId: id
            },
            include: [{
              model: _models["default"].Address,
              as: "Address"
            }]
          })["catch"](function (error) {
            cov_1tar1ex06p().f[5]++;
            cov_1tar1ex06p().s[24]++;
            console.log(error);
            cov_1tar1ex06p().s[25]++;
            return res.send({
              message: "failed to get ".concat(error)
            });
          });
        case 17:
          profileUser = _context3.sent;
          //////////////////////////////////////////////////
          addressId = (cov_1tar1ex06p().s[26]++, profileUser.Address.addressId);
          cov_1tar1ex06p().s[27]++;
          _context3.next = 22;
          return profileModel.update(req.body, {
            picture: req.body.picture,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            status: req.body.status,
            maritalStatus: req.body.maritalStatus,
            department: req.body.department,
            phoneNumber: req.body.phoneNumber,
            where: {
              profileId: id
            }
          })["catch"](function (error) {
            cov_1tar1ex06p().f[6]++;
            cov_1tar1ex06p().s[28]++;
            return res.status(400).send({
              message: "error2",
              error: error
            });
          });
        case 22:
          cov_1tar1ex06p().s[29]++;
          _context3.next = 25;
          return addressModel.update(req.body, {
            country: req.body.country,
            city: req.body.city,
            street: req.body.street,
            where: {
              addressId: addressId
            }
          }).then(function (data) {
            cov_1tar1ex06p().f[7]++;
            cov_1tar1ex06p().s[30]++;
            return res.status(200).send({
              message: "User profile updated successfully!",
              data: data
            });
          })["catch"](function (err) {
            cov_1tar1ex06p().f[8]++;
            cov_1tar1ex06p().s[31]++;
            return res.status(400).send({
              message: "An error occured while updating User profile! The role or category assigned might be unavailable.",
              err: err
            });
          });
        case 25:
          _context3.next = 31;
          break;
        case 27:
          _context3.prev = 27;
          _context3.t0 = _context3["catch"](2);
          cov_1tar1ex06p().s[32]++;
          res.status(500).send({
            error: "".concat(_context3.t0)
          });
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 27]]);
  }));
  return function updateProfile(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProfile = updateProfile;