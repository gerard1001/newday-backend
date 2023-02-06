"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _models = _interopRequireDefault(require("../src/database/models"));
var _routes = _interopRequireDefault(require("./routes"));
var _cors = _interopRequireDefault(require("cors"));
var _expressFormData = _interopRequireDefault(require("express-form-data"));
function cov_151ucbxbm3() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\app.js";
  var hash = "65b2c74f51e51117ccf59aba8e3dae7d075b8edf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 29
        }
      },
      "1": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 21
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 48
        }
      },
      "4": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 24
        }
      },
      "5": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 26
        }
      },
      "6": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "7": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 52
        }
      },
      "8": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 27
        }
      },
      "9": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 28
        }
      },
      "10": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "11": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "12": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 25
          },
          end: {
            line: 22,
            column: 26
          }
        },
        loc: {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 19
          },
          end: {
            line: 23,
            column: 20
          }
        },
        loc: {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "65b2c74f51e51117ccf59aba8e3dae7d075b8edf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_151ucbxbm3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_151ucbxbm3();
var port = (cov_151ucbxbm3().s[0]++, process.env.PORT);
var app = (cov_151ucbxbm3().s[1]++, (0, _express["default"])());
cov_151ucbxbm3().s[2]++;
app.use((0, _cors["default"])());
cov_151ucbxbm3().s[3]++;
app.use(_express["default"].urlencoded({
  extended: true
}));
cov_151ucbxbm3().s[4]++;
app.use(_express["default"].json());
cov_151ucbxbm3().s[5]++;
app.use(_expressFormData["default"].parse());
cov_151ucbxbm3().s[6]++;
app.use(_expressFormData["default"].union());
cov_151ucbxbm3().s[7]++;
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
cov_151ucbxbm3().s[8]++;
app.use(_bodyParser["default"].json());
cov_151ucbxbm3().s[9]++;
app.use("/api/v2/", _routes["default"]);
cov_151ucbxbm3().s[10]++;
_models["default"].sequelize.sync().then(function () {
  cov_151ucbxbm3().f[0]++;
  cov_151ucbxbm3().s[11]++;
  app.listen(port, function () {
    cov_151ucbxbm3().f[1]++;
    cov_151ucbxbm3().s[12]++;
    console.log("listening on: http://localhost:".concat(port));
  });
});