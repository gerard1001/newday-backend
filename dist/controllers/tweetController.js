"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTweets = exports.deleteTweets = exports.createTweet = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
var _fileUpload = require("../helpers/fileUpload");
var _nodemailer = require("../helpers/nodemailer");
function cov_144fjjgapo() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\tweetController.js";
  var hash = "61d24609cc44e1bb8d4936775b34264c44b079e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\tweetController.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 30
        }
      },
      "1": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 28
        }
      },
      "2": {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "4": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "5": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "6": {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 45
        }
      },
      "7": {
        start: {
          line: 18,
          column: 28
        },
        end: {
          line: 20,
          column: 6
        }
      },
      "8": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "9": {
        start: {
          line: 22,
          column: 34
        },
        end: {
          line: 24,
          column: 6
        }
      },
      "10": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "11": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 39
        }
      },
      "12": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "13": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 45
        }
      },
      "14": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 59,
          column: 7
        }
      },
      "15": {
        start: {
          line: 40,
          column: 42
        },
        end: {
          line: 40,
          column: 46
        }
      },
      "16": {
        start: {
          line: 42,
          column: 24
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "17": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 50
        }
      },
      "18": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "19": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 39
        }
      },
      "20": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 63,
          column: 7
        }
      },
      "21": {
        start: {
          line: 67,
          column: 25
        },
        end: {
          line: 83,
          column: 1
        }
      },
      "22": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "23": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 79,
          column: 9
        }
      },
      "24": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 75,
          column: 11
        }
      },
      "25": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 33
        }
      },
      "26": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 22
        }
      },
      "27": {
        start: {
          line: 85,
          column: 28
        },
        end: {
          line: 113,
          column: 1
        }
      },
      "28": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 112,
          column: 3
        }
      },
      "29": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 109,
          column: 9
        }
      },
      "30": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 102,
          column: 9
        }
      },
      "31": {
        start: {
          line: 91,
          column: 10
        },
        end: {
          line: 93,
          column: 13
        }
      },
      "32": {
        start: {
          line: 94,
          column: 15
        },
        end: {
          line: 102,
          column: 9
        }
      },
      "33": {
        start: {
          line: 95,
          column: 10
        },
        end: {
          line: 97,
          column: 13
        }
      },
      "34": {
        start: {
          line: 99,
          column: 10
        },
        end: {
          line: 101,
          column: 13
        }
      },
      "35": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 108,
          column: 11
        }
      },
      "36": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 28
          }
        },
        loc: {
          start: {
            line: 10,
            column: 47
          },
          end: {
            line: 65,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 18,
            column: 42
          }
        },
        loc: {
          start: {
            line: 18,
            column: 53
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 54
          },
          end: {
            line: 22,
            column: 55
          }
        },
        loc: {
          start: {
            line: 22,
            column: 64
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        loc: {
          start: {
            line: 39,
            column: 22
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 57,
            column: 11
          },
          end: {
            line: 57,
            column: 12
          }
        },
        loc: {
          start: {
            line: 57,
            column: 20
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 57
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 26
          }
        },
        loc: {
          start: {
            line: 67,
            column: 45
          },
          end: {
            line: 83,
            column: 1
          }
        },
        line: 67
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 71,
            column: 12
          },
          end: {
            line: 71,
            column: 13
          }
        },
        loc: {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 76,
            column: 7
          }
        },
        line: 71
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 77,
            column: 13
          },
          end: {
            line: 77,
            column: 14
          }
        },
        loc: {
          start: {
            line: 77,
            column: 22
          },
          end: {
            line: 79,
            column: 7
          }
        },
        line: 77
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 85,
            column: 28
          },
          end: {
            line: 85,
            column: 29
          }
        },
        loc: {
          start: {
            line: 85,
            column: 48
          },
          end: {
            line: 113,
            column: 1
          }
        },
        line: 85
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 13
          }
        },
        loc: {
          start: {
            line: 89,
            column: 21
          },
          end: {
            line: 103,
            column: 7
          }
        },
        line: 89
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 104,
            column: 13
          },
          end: {
            line: 104,
            column: 14
          }
        },
        loc: {
          start: {
            line: 104,
            column: 22
          },
          end: {
            line: 109,
            column: 7
          }
        },
        line: 104
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
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
            line: 28,
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
        line: 28
      },
      "1": {
        loc: {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 102,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 102,
            column: 9
          }
        }, {
          start: {
            line: 94,
            column: 15
          },
          end: {
            line: 102,
            column: 9
          }
        }],
        line: 90
      },
      "2": {
        loc: {
          start: {
            line: 94,
            column: 15
          },
          end: {
            line: 102,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 94,
            column: 15
          },
          end: {
            line: 102,
            column: 9
          }
        }, {
          start: {
            line: 98,
            column: 15
          },
          end: {
            line: 102,
            column: 9
          }
        }],
        line: 94
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
      "10": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "61d24609cc44e1bb8d4936775b34264c44b079e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_144fjjgapo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_144fjjgapo();
var tweetModel = (cov_144fjjgapo().s[0]++, _models["default"].Tweet);
var userModel = (cov_144fjjgapo().s[1]++, _models["default"].User);
cov_144fjjgapo().s[2]++;
var createTweet = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode, users, subscribedUsers, subscribedUsersEmails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_144fjjgapo().f[0]++;
          cov_144fjjgapo().s[3]++;
          _context.prev = 2;
          token = (cov_144fjjgapo().s[4]++, (0, _checkToken["default"])(req));
          decode = (cov_144fjjgapo().s[5]++, (0, _userHelper.decodeToken)(token));
          cov_144fjjgapo().s[6]++;
          _context.next = 8;
          return userModel.findAll({});
        case 8:
          users = _context.sent;
          subscribedUsers = (cov_144fjjgapo().s[7]++, users.filter(function (emails) {
            cov_144fjjgapo().f[1]++;
            cov_144fjjgapo().s[8]++;
            return emails.isSubscribed;
          }));
          subscribedUsersEmails = (cov_144fjjgapo().s[9]++, subscribedUsers.map(function (item) {
            cov_144fjjgapo().f[2]++;
            cov_144fjjgapo().s[10]++;
            return item.email;
          }));
          cov_144fjjgapo().s[11]++;
          console.log(subscribedUsersEmails);
          cov_144fjjgapo().s[12]++;
          if (!req.file) {
            _context.next = 22;
            break;
          }
          cov_144fjjgapo().b[0][0]++;
          cov_144fjjgapo().s[13]++;
          _context.next = 19;
          return (0, _fileUpload.fileUpload)(req);
        case 19:
          req.body.image = _context.sent;
          _context.next = 23;
          break;
        case 22:
          cov_144fjjgapo().b[0][1]++;
        case 23:
          cov_144fjjgapo().s[14]++;
          _context.next = 26;
          return tweetModel.create({
            userId: decode.userId,
            title: req.body.title,
            content: req.body.content,
            image: req.body.image
          }).then(function (data) {
            cov_144fjjgapo().f[3]++;
            var _ref2 = (cov_144fjjgapo().s[15]++, data),
              image = _ref2.image,
              title = _ref2.title,
              content = _ref2.content;
            var message = (cov_144fjjgapo().s[16]++, "\n\n    <div style=\"background:rgb(255, 191, 0); padding: 50px; width: 500px;display: block;margin: auto;\">\n      <h2 style=\"text-align: center; font-family:Arial, Helvetica, sans-serif; text-decoration: underline;text-transform: uppercase;\">".concat(title, "</h2>\n      <p><img width=\"240px\", height=\"240px\", style=\"display: block;margin: auto;\" src=\"").concat(image, "\"></img></p>\n      <p style=\"text-align: center; font-family:Arial, Helvetica, sans-serif;font-size: large;\">").concat(content, "</p>\n    </div>\n\n    "));
            cov_144fjjgapo().s[17]++;
            (0, _nodemailer.sendTweet)(message, subscribedUsersEmails);
            cov_144fjjgapo().s[18]++;
            return res.status(201).send({
              message: "success!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_144fjjgapo().f[4]++;
            cov_144fjjgapo().s[19]++;
            return res.status(400).send(err);
          });
        case 26:
          _context.next = 32;
          break;
        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](2);
          cov_144fjjgapo().s[20]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 28]]);
  }));
  return function createTweet(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createTweet = createTweet;
cov_144fjjgapo().s[21]++;
var getTweets = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_144fjjgapo().f[5]++;
          cov_144fjjgapo().s[22]++;
          _context2.prev = 2;
          cov_144fjjgapo().s[23]++;
          _context2.next = 6;
          return tweetModel.findAll({}).then(function (tweets) {
            cov_144fjjgapo().f[6]++;
            cov_144fjjgapo().s[24]++;
            return res.send({
              message: "Fetched all tweets",
              tweets: tweets
            });
          })["catch"](function (err) {
            cov_144fjjgapo().f[7]++;
            cov_144fjjgapo().s[25]++;
            return res.send({
              err: err
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_144fjjgapo().s[26]++;
          res.send({
            err: err
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getTweets(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getTweets = getTweets;
cov_144fjjgapo().s[27]++;
var deleteTweets = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_144fjjgapo().f[8]++;
          cov_144fjjgapo().s[28]++;
          _context3.prev = 2;
          cov_144fjjgapo().s[29]++;
          _context3.next = 6;
          return tweetModel.destroy({
            where: {}
          }).then(function (num) {
            cov_144fjjgapo().f[9]++;
            cov_144fjjgapo().s[30]++;
            if (num === 1) {
              cov_144fjjgapo().b[1][0]++;
              cov_144fjjgapo().s[31]++;
              return res.status(200).send({
                message: "Deleted ".concat(num, " tweet successfully!")
              });
            } else {
              cov_144fjjgapo().b[1][1]++;
              cov_144fjjgapo().s[32]++;
              if (num === 0) {
                cov_144fjjgapo().b[2][0]++;
                cov_144fjjgapo().s[33]++;
                return res.status(403).send({
                  message: "You don't have any more tweets to delete!"
                });
              } else {
                cov_144fjjgapo().b[2][1]++;
                cov_144fjjgapo().s[34]++;
                return res.status(200).send({
                  message: "Deleted ".concat(num, " tweets successfully!")
                });
              }
            }
          })["catch"](function (err) {
            cov_144fjjgapo().f[10]++;
            cov_144fjjgapo().s[35]++;
            return res.send({
              message: "ERROR",
              err: err
            });
          });
        case 6:
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          cov_144fjjgapo().s[36]++;
          res.send(err);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function deleteTweets(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteTweets = deleteTweets;