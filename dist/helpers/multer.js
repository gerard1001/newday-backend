"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
function cov_2c2nvrmzt8() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\multer.js";
  var hash = "e8b2fb9a183011d47f1eca29217cc6332a499d2b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\multer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 8,
          column: 6
        }
      },
      "2": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "3": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 19
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 54
        }
      },
      "6": {
        start: {
          line: 25,
          column: 15
        },
        end: {
          line: 29,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 13
          }
        },
        loc: {
          start: {
            line: 4,
            column: 31
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 19
          },
          end: {
            line: 12,
            column: 20
          }
        },
        loc: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        }, {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 22,
            column: 3
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 17,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 34
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 33
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 33
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 34
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e8b2fb9a183011d47f1eca29217cc6332a499d2b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2c2nvrmzt8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2c2nvrmzt8();
var storage = (cov_2c2nvrmzt8().s[0]++, _multer["default"].diskStorage({
  filename: function filename(req, file, cb) {
    cov_2c2nvrmzt8().f[0]++;
    cov_2c2nvrmzt8().s[1]++;
    cb(null, "".concat(new Date().toISOString().replace(/:/g, "-"), "-").concat(file.originalname));
  }
}));
cov_2c2nvrmzt8().s[2]++;
var fileFilter = function fileFilter(req, file, cb) {
  cov_2c2nvrmzt8().f[1]++;
  cov_2c2nvrmzt8().s[3]++;
  if ((cov_2c2nvrmzt8().b[1][0]++, file.mimetype === "image/jpeg") || (cov_2c2nvrmzt8().b[1][1]++, file.mimetype === "image/png") || (cov_2c2nvrmzt8().b[1][2]++, file.mimetype === "image/jpg") || (cov_2c2nvrmzt8().b[1][3]++, file.mimetype === "image/webp")) {
    cov_2c2nvrmzt8().b[0][0]++;
    cov_2c2nvrmzt8().s[4]++;
    cb(null, true);
  } else {
    cov_2c2nvrmzt8().b[0][1]++;
    cov_2c2nvrmzt8().s[5]++;
    cb({
      message: "unsupported file format"
    }, false);
  }
};
var upload = (cov_2c2nvrmzt8().s[6]++, (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: fileFilter
}));
var _default = upload;
exports["default"] = _default;