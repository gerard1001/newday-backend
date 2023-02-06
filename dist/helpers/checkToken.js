"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = checkToken;
function cov_1z7sv3u8dw() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\checkToken.js";
  var hash = "dd57aa9f31f1c45a5a913d48346f80b86608162c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\checkToken.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 72
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "checkToken",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 34
          }
        },
        loc: {
          start: {
            line: 1,
            column: 40
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 4
          },
          end: {
            line: 3,
            column: 72
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 3,
            column: 4
          },
          end: {
            line: 3,
            column: 29
          }
        }, {
          start: {
            line: 3,
            column: 33
          },
          end: {
            line: 3,
            column: 72
          }
        }],
        line: 3
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dd57aa9f31f1c45a5a913d48346f80b86608162c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z7sv3u8dw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1z7sv3u8dw();
function checkToken(req) {
  cov_1z7sv3u8dw().f[0]++;
  var Token = (cov_1z7sv3u8dw().s[0]++, (cov_1z7sv3u8dw().b[0][0]++, req.headers.authorization) && (cov_1z7sv3u8dw().b[0][1]++, req.headers.authorization.split(" ")[1]));
  cov_1z7sv3u8dw().s[1]++;
  return Token;
}