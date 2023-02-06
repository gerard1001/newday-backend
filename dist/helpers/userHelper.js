"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.generateToken = exports.decodeToken = exports.comparePassword = void 0;
function cov_gmews2rag() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\userHelper.js";
  var hash = "69441b72e4cee6ff6e7f56f7bf3029d1975c3d61";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\userHelper.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 47
        },
        end: {
          line: 1,
          column: 66
        }
      },
      "1": {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 35
        }
      },
      "2": {
        start: {
          line: 4,
          column: 28
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "3": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 30
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 29
        }
      },
      "5": {
        start: {
          line: 10,
          column: 31
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "6": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 60
        }
      },
      "7": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "8": {
        start: {
          line: 16,
          column: 29
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "9": {
        start: {
          line: 17,
          column: 14
        },
        end: {
          line: 17,
          column: 61
        }
      },
      "10": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 15
        }
      },
      "11": {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "12": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 22,
          column: 49
        }
      },
      "13": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 28
          },
          end: {
            line: 4,
            column: 29
          }
        },
        loc: {
          start: {
            line: 4,
            column: 37
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 31
          },
          end: {
            line: 10,
            column: 32
          }
        },
        loc: {
          start: {
            line: 10,
            column: 66
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 29
          },
          end: {
            line: 16,
            column: 30
          }
        },
        loc: {
          start: {
            line: 16,
            column: 53
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "69441b72e4cee6ff6e7f56f7bf3029d1975c3d61"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_gmews2rag = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_gmews2rag();
var _ref = (cov_gmews2rag().s[0]++, require("bcryptjs")),
  hashSync = _ref.hashSync,
  compareSync = _ref.compareSync,
  genSaltSync = _ref.genSaltSync;
var jwt = (cov_gmews2rag().s[1]++, require("jsonwebtoken"));
cov_gmews2rag().s[2]++;
var hashPassword = function hashPassword(pwd) {
  cov_gmews2rag().f[0]++;
  var salt = (cov_gmews2rag().s[3]++, genSaltSync(10));
  cov_gmews2rag().s[4]++;
  return hashSync(pwd, salt);
};
exports.hashPassword = hashPassword;
cov_gmews2rag().s[5]++;
var comparePassword = function comparePassword(plainPassword, hashedPassword) {
  cov_gmews2rag().f[1]++;
  var compare = (cov_gmews2rag().s[6]++, compareSync(plainPassword, hashedPassword));
  cov_gmews2rag().s[7]++;
  return compare;
};
exports.comparePassword = comparePassword;
cov_gmews2rag().s[8]++;
var generateToken = function generateToken(payload, expiresIn) {
  cov_gmews2rag().f[2]++;
  var token = (cov_gmews2rag().s[9]++, jwt.sign(payload, "datasudobuy", {
    expiresIn: expiresIn
  }));
  cov_gmews2rag().s[10]++;
  return token;
};
exports.generateToken = generateToken;
cov_gmews2rag().s[11]++;
var decodeToken = function decodeToken(token) {
  cov_gmews2rag().f[3]++;
  var verify = (cov_gmews2rag().s[12]++, jwt.verify(token, "datasudobuy"));
  cov_gmews2rag().s[13]++;
  return verify;
};
exports.decodeToken = decodeToken;