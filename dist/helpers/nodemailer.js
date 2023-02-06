"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTweet = exports.sendEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
require("dotenv/config");
function cov_26u205q5vk() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\nodemailer.js";
  var hash = "845f541a44589c1896548b164ba202fd6c4f7694";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\nodemailer.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 13,
          column: 4
        }
      },
      "2": {
        start: {
          line: 14,
          column: 22
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "4": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 32
        }
      },
      "6": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 65
        }
      },
      "7": {
        start: {
          line: 33,
          column: 25
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "8": {
        start: {
          line: 34,
          column: 22
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "9": {
        start: {
          line: 43,
          column: 22
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "10": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "11": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "12": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 32
        }
      },
      "13": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 53
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 36
          },
          end: {
            line: 24,
            column: 37
          }
        },
        loc: {
          start: {
            line: 24,
            column: 53
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 24
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 33,
            column: 25
          },
          end: {
            line: 33,
            column: 26
          }
        },
        loc: {
          start: {
            line: 33,
            column: 53
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 33
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 53,
            column: 36
          },
          end: {
            line: 53,
            column: 37
          }
        },
        loc: {
          start: {
            line: 53,
            column: 53
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 53
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
            line: 27,
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
            line: 27,
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
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
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
        line: 54
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
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "845f541a44589c1896548b164ba202fd6c4f7694"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26u205q5vk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_26u205q5vk();
cov_26u205q5vk().s[0]++;
var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(message, toEmail) {
    var transporter, mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_26u205q5vk().f[0]++;
          transporter = (cov_26u205q5vk().s[1]++, _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SENDER_EMAIL,
              pass: process.env.SENDER_PASSWORD
            }
          }));
          mailOptions = (cov_26u205q5vk().s[2]++, {
            from: {
              name: "New Day",
              address: process.env.SENDER_EMAIL
            },
            to: toEmail,
            subject: "NEWDAY REGISTRATION",
            html: message
          });
          cov_26u205q5vk().s[3]++;
          transporter.sendMail(mailOptions, function (error, info) {
            cov_26u205q5vk().f[1]++;
            cov_26u205q5vk().s[4]++;
            if (error) {
              cov_26u205q5vk().b[0][0]++;
              cov_26u205q5vk().s[5]++;
              return console.log(error);
            } else {
              cov_26u205q5vk().b[0][1]++;
            }
            cov_26u205q5vk().s[6]++;
            res.render("contact", {
              msg: "Email successfully sent!!!"
            });
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendEmail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.sendEmail = sendEmail;
cov_26u205q5vk().s[7]++;
var sendTweet = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(message, toEmail) {
    var transporter, mailOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_26u205q5vk().f[2]++;
          transporter = (cov_26u205q5vk().s[8]++, _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SENDER_EMAIL,
              pass: process.env.SENDER_PASSWORD
            }
          }));
          mailOptions = (cov_26u205q5vk().s[9]++, {
            from: {
              name: "New Day",
              address: process.env.SENDER_EMAIL
            },
            to: toEmail,
            subject: "TWEET FROM NEWDAY.",
            html: message
          });
          cov_26u205q5vk().s[10]++;
          transporter.sendMail(mailOptions, function (error, info) {
            cov_26u205q5vk().f[3]++;
            cov_26u205q5vk().s[11]++;
            if (error) {
              cov_26u205q5vk().b[1][0]++;
              cov_26u205q5vk().s[12]++;
              return console.log(error);
            } else {
              cov_26u205q5vk().b[1][1]++;
            }
            cov_26u205q5vk().s[13]++;
            res.render("contact", {
              msg: "Tweet successfully sent!!!"
            });
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function sendTweet(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.sendTweet = sendTweet;