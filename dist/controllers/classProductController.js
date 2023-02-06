"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneAssignment = exports.getAssignments = exports.deleteOneAssignment = exports.deleteAllAssignments = exports.assignProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_144g7040yr() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\classProductController.js";
  var hash = "1d6d49a17269b4a5c27af10247c9dd0211492f1b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\classProductController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 3,
          column: 35
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 30
        }
      },
      "2": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 34
        }
      },
      "3": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 118,
          column: 1
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 117,
          column: 3
        }
      },
      "5": {
        start: {
          line: 15,
          column: 26
        },
        end: {
          line: 19,
          column: 6
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "7": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "8": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 49
        }
      },
      "9": {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "10": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 29,
          column: 19
        }
      },
      "11": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 49,
          column: 5
        }
      },
      "12": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 18
        }
      },
      "13": {
        start: {
          line: 31,
          column: 30
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "14": {
        start: {
          line: 37,
          column: 31
        },
        end: {
          line: 43,
          column: 10
        }
      },
      "15": {
        start: {
          line: 42,
          column: 10
        },
        end: {
          line: 42,
          column: 32
        }
      },
      "16": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 56
        }
      },
      "17": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "18": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 23
        }
      },
      "19": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 48,
          column: 37
        }
      },
      "20": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 38
        }
      },
      "21": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 36
        }
      },
      "22": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "23": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 56,
          column: 9
        }
      },
      "24": {
        start: {
          line: 67,
          column: 23
        },
        end: {
          line: 86,
          column: 5
        }
      },
      "25": {
        start: {
          line: 68,
          column: 16
        },
        end: {
          line: 68,
          column: 18
        }
      },
      "26": {
        start: {
          line: 69,
          column: 19
        },
        end: {
          line: 69,
          column: 21
        }
      },
      "27": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 76,
          column: 7
        }
      },
      "28": {
        start: {
          line: 70,
          column: 19
        },
        end: {
          line: 70,
          column: 20
        }
      },
      "29": {
        start: {
          line: 71,
          column: 18
        },
        end: {
          line: 71,
          column: 20
        }
      },
      "30": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 42
        }
      },
      "31": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 37
        }
      },
      "32": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 22
        }
      },
      "33": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 42
        }
      },
      "34": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 83,
          column: 7
        }
      },
      "35": {
        start: {
          line: 79,
          column: 19
        },
        end: {
          line: 79,
          column: 20
        }
      },
      "36": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 82,
          column: 9
        }
      },
      "37": {
        start: {
          line: 81,
          column: 10
        },
        end: {
          line: 81,
          column: 30
        }
      },
      "38": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 84,
          column: 38
        }
      },
      "39": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 20
        }
      },
      "40": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 57
        }
      },
      "41": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 110,
          column: 9
        }
      },
      "42": {
        start: {
          line: 103,
          column: 8
        },
        end: {
          line: 106,
          column: 11
        }
      },
      "43": {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 109,
          column: 41
        }
      },
      "44": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 23
        }
      },
      "45": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 37
        }
      },
      "46": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 116,
          column: 7
        }
      },
      "47": {
        start: {
          line: 120,
          column: 30
        },
        end: {
          line: 141,
          column: 1
        }
      },
      "48": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 140,
          column: 3
        }
      },
      "49": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 135,
          column: 9
        }
      },
      "50": {
        start: {
          line: 125,
          column: 8
        },
        end: {
          line: 128,
          column: 11
        }
      },
      "51": {
        start: {
          line: 131,
          column: 8
        },
        end: {
          line: 134,
          column: 11
        }
      },
      "52": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 139,
          column: 7
        }
      },
      "53": {
        start: {
          line: 143,
          column: 32
        },
        end: {
          line: 170,
          column: 1
        }
      },
      "54": {
        start: {
          line: 144,
          column: 2
        },
        end: {
          line: 169,
          column: 3
        }
      },
      "55": {
        start: {
          line: 145,
          column: 15
        },
        end: {
          line: 145,
          column: 28
        }
      },
      "56": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 164,
          column: 9
        }
      },
      "57": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 157,
          column: 11
        }
      },
      "58": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 163,
          column: 11
        }
      },
      "59": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 168,
          column: 7
        }
      },
      "60": {
        start: {
          line: 172,
          column: 35
        },
        end: {
          line: 199,
          column: 1
        }
      },
      "61": {
        start: {
          line: 173,
          column: 2
        },
        end: {
          line: 198,
          column: 3
        }
      },
      "62": {
        start: {
          line: 174,
          column: 15
        },
        end: {
          line: 174,
          column: 28
        }
      },
      "63": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 193,
          column: 9
        }
      },
      "64": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 186,
          column: 11
        }
      },
      "65": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 192,
          column: 11
        }
      },
      "66": {
        start: {
          line: 195,
          column: 4
        },
        end: {
          line: 197,
          column: 7
        }
      },
      "67": {
        start: {
          line: 201,
          column: 36
        },
        end: {
          line: 224,
          column: 1
        }
      },
      "68": {
        start: {
          line: 202,
          column: 2
        },
        end: {
          line: 223,
          column: 3
        }
      },
      "69": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 218,
          column: 9
        }
      },
      "70": {
        start: {
          line: 208,
          column: 8
        },
        end: {
          line: 211,
          column: 11
        }
      },
      "71": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 217,
          column: 11
        }
      },
      "72": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 222,
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
            column: 29
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 7,
            column: 49
          },
          end: {
            line: 118,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 41,
            column: 15
          },
          end: {
            line: 41,
            column: 16
          }
        },
        loc: {
          start: {
            line: 41,
            column: 24
          },
          end: {
            line: 43,
            column: 9
          }
        },
        line: 41
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 67,
            column: 23
          },
          end: {
            line: 67,
            column: 24
          }
        },
        loc: {
          start: {
            line: 67,
            column: 35
          },
          end: {
            line: 86,
            column: 5
          }
        },
        line: 67
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 102,
            column: 12
          },
          end: {
            line: 102,
            column: 13
          }
        },
        loc: {
          start: {
            line: 102,
            column: 22
          },
          end: {
            line: 107,
            column: 7
          }
        },
        line: 102
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 108,
            column: 13
          },
          end: {
            line: 108,
            column: 14
          }
        },
        loc: {
          start: {
            line: 108,
            column: 22
          },
          end: {
            line: 110,
            column: 7
          }
        },
        line: 108
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 120,
            column: 30
          },
          end: {
            line: 120,
            column: 31
          }
        },
        loc: {
          start: {
            line: 120,
            column: 50
          },
          end: {
            line: 141,
            column: 1
          }
        },
        line: 120
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 124,
            column: 12
          },
          end: {
            line: 124,
            column: 13
          }
        },
        loc: {
          start: {
            line: 124,
            column: 22
          },
          end: {
            line: 129,
            column: 7
          }
        },
        line: 124
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 130,
            column: 13
          },
          end: {
            line: 130,
            column: 14
          }
        },
        loc: {
          start: {
            line: 130,
            column: 22
          },
          end: {
            line: 135,
            column: 7
          }
        },
        line: 130
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 143,
            column: 32
          },
          end: {
            line: 143,
            column: 33
          }
        },
        loc: {
          start: {
            line: 143,
            column: 52
          },
          end: {
            line: 170,
            column: 1
          }
        },
        line: 143
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 153,
            column: 12
          },
          end: {
            line: 153,
            column: 13
          }
        },
        loc: {
          start: {
            line: 153,
            column: 22
          },
          end: {
            line: 158,
            column: 7
          }
        },
        line: 153
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 159,
            column: 13
          },
          end: {
            line: 159,
            column: 14
          }
        },
        loc: {
          start: {
            line: 159,
            column: 22
          },
          end: {
            line: 164,
            column: 7
          }
        },
        line: 159
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 172,
            column: 35
          },
          end: {
            line: 172,
            column: 36
          }
        },
        loc: {
          start: {
            line: 172,
            column: 55
          },
          end: {
            line: 199,
            column: 1
          }
        },
        line: 172
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 182,
            column: 12
          },
          end: {
            line: 182,
            column: 13
          }
        },
        loc: {
          start: {
            line: 182,
            column: 22
          },
          end: {
            line: 187,
            column: 7
          }
        },
        line: 182
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 188,
            column: 13
          },
          end: {
            line: 188,
            column: 14
          }
        },
        loc: {
          start: {
            line: 188,
            column: 22
          },
          end: {
            line: 193,
            column: 7
          }
        },
        line: 188
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 201,
            column: 36
          },
          end: {
            line: 201,
            column: 37
          }
        },
        loc: {
          start: {
            line: 201,
            column: 56
          },
          end: {
            line: 224,
            column: 1
          }
        },
        line: 201
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 207,
            column: 12
          },
          end: {
            line: 207,
            column: 13
          }
        },
        loc: {
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 212,
            column: 7
          }
        },
        line: 207
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 213,
            column: 13
          },
          end: {
            line: 213,
            column: 14
          }
        },
        loc: {
          start: {
            line: 213,
            column: 22
          },
          end: {
            line: 218,
            column: 7
          }
        },
        line: 213
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 24,
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
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
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
        line: 45
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 10
          },
          end: {
            line: 45,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 10
          },
          end: {
            line: 45,
            column: 27
          }
        }, {
          start: {
            line: 45,
            column: 31
          },
          end: {
            line: 45,
            column: 46
          }
        }],
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 57,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 57,
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
        line: 53
      },
      "4": {
        loc: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 82,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 82,
            column: 9
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
        line: 80
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
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0
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
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1d6d49a17269b4a5c27af10247c9dd0211492f1b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_144g7040yr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_144g7040yr();
var cpModel = (cov_144g7040yr().s[0]++, _models["default"].Class_Product);
var classModel = (cov_144g7040yr().s[1]++, _models["default"].Class);
var productModel = (cov_144g7040yr().s[2]++, _models["default"].Product);
cov_144g7040yr().s[3]++;
var assignProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var existingClass, myTuts, checker, makeup, i, existingProduct, existingRelation, getBulkArr;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_144g7040yr().f[0]++;
          cov_144g7040yr().s[4]++;
          _context.prev = 2;
          cov_144g7040yr().s[5]++;
          _context.next = 6;
          return classModel.findOne({
            where: {
              classId: req.body.classId
            }
          });
        case 6:
          existingClass = _context.sent;
          cov_144g7040yr().s[6]++;
          if (existingClass) {
            _context.next = 14;
            break;
          }
          cov_144g7040yr().b[0][0]++;
          cov_144g7040yr().s[7]++;
          return _context.abrupt("return", res.status(404).send({
            error: "The Class you are trying assign doesn't exist."
          }));
        case 14:
          cov_144g7040yr().b[0][1]++;
        case 15:
          myTuts = (cov_144g7040yr().s[8]++, req.body.productId.split(", "));
          checker = (cov_144g7040yr().s[9]++, []);
          makeup = (cov_144g7040yr().s[10]++, []);
          cov_144g7040yr().s[11]++;
          i = (cov_144g7040yr().s[12]++, 0);
        case 20:
          if (!(i < myTuts.length)) {
            _context.next = 38;
            break;
          }
          cov_144g7040yr().s[13]++;
          _context.next = 24;
          return productModel.findOne({
            where: {
              productId: myTuts[i]
            }
          });
        case 24:
          existingProduct = _context.sent;
          cov_144g7040yr().s[14]++;
          _context.next = 28;
          return cpModel.findOne({
            where: {
              classId: req.body.classId,
              productId: myTuts[i]
            }
          })["catch"](function (err) {
            cov_144g7040yr().f[1]++;
            cov_144g7040yr().s[15]++;
            console.log("".concat(err));
          });
        case 28:
          existingRelation = _context.sent;
          cov_144g7040yr().s[16]++;
          console.log(existingRelation, "*11111111111111*");
          cov_144g7040yr().s[17]++;
          if ((cov_144g7040yr().b[2][0]++, !existingRelation) && (cov_144g7040yr().b[2][1]++, existingProduct)) {
            cov_144g7040yr().b[1][0]++;
            cov_144g7040yr().s[18]++;
            makeup.push(i);
          } else {
            cov_144g7040yr().b[1][1]++;
          }
          cov_144g7040yr().s[19]++;
          checker.push(existingRelation);
        case 35:
          i++;
          _context.next = 20;
          break;
        case 38:
          cov_144g7040yr().s[20]++;
          console.log(checker, "*CHECKER*");
          cov_144g7040yr().s[21]++;
          console.log(makeup, "*MAKEUP*");
          cov_144g7040yr().s[22]++;
          if (!(makeup == "")) {
            _context.next = 49;
            break;
          }
          cov_144g7040yr().b[3][0]++;
          cov_144g7040yr().s[23]++;
          return _context.abrupt("return", res.status(404).send({
            error: "All these relations have already been made."
          }));
        case 49:
          cov_144g7040yr().b[3][1]++;
        case 50:
          cov_144g7040yr().s[24]++;
          // console.log(checkIfRelationExists(myTuts), "*22222222222*");
          // if (existingRelation) {
          //   return res.status(409).send({
          //     error: "This relation has aready been established.",
          //   });
          // }
          getBulkArr = function getBulkArr(myTuts) {
            cov_144g7040yr().f[2]++;
            var arr = (cov_144g7040yr().s[25]++, []);
            var newArr = (cov_144g7040yr().s[26]++, []);
            cov_144g7040yr().s[27]++;
            for (var _i = (cov_144g7040yr().s[28]++, 0); _i < myTuts.length; _i++) {
              var obj = (cov_144g7040yr().s[29]++, {});
              cov_144g7040yr().s[30]++;
              obj["classId"] = req.body.classId;
              cov_144g7040yr().s[31]++;
              obj["productId"] = myTuts[_i];
              cov_144g7040yr().s[32]++;
              arr.push(obj);
            }
            cov_144g7040yr().s[33]++;
            console.log(arr, "*2222222222222*");
            cov_144g7040yr().s[34]++;
            for (var _i2 = (cov_144g7040yr().s[35]++, 0); _i2 < arr.length; _i2++) {
              cov_144g7040yr().s[36]++;
              if (makeup.includes(_i2)) {
                cov_144g7040yr().b[4][0]++;
                cov_144g7040yr().s[37]++;
                newArr.push(arr[_i2]);
              } else {
                cov_144g7040yr().b[4][1]++;
              }
            }
            cov_144g7040yr().s[38]++;
            console.log(newArr, "*252525*");
            cov_144g7040yr().s[39]++;
            return newArr;
          };
          cov_144g7040yr().s[40]++;
          console.log(getBulkArr(myTuts), "*333333333333333*");
          cov_144g7040yr().s[41]++;
          _context.next = 57;
          return cpModel.bulkCreate(
          //   {
          //   classId: req.body.classId,
          //   productId: req.body.productId,
          //   where: {
          //     classId: req.body.classId,
          //     productId: req.body.productId,
          //   },
          // }
          getBulkArr(myTuts)).then(function (data) {
            cov_144g7040yr().f[3]++;
            cov_144g7040yr().s[42]++;
            return res.status(200).send({
              message: "Link made between the class and product successfully.",
              data: data
            });
          })["catch"](function (err) {
            cov_144g7040yr().f[4]++;
            cov_144g7040yr().s[43]++;
            return res.status(400).send(err);
          });
        case 57:
          _context.next = 67;
          break;
        case 59:
          _context.prev = 59;
          _context.t0 = _context["catch"](2);
          cov_144g7040yr().s[44]++;
          console.log(_context.t0);
          cov_144g7040yr().s[45]++;
          console.log(req.body, "&&&&&&&");
          cov_144g7040yr().s[46]++;
          return _context.abrupt("return", res.status(400).send({
            error: "Fill all the fields ".concat(_context.t0, ".")
          }));
        case 67:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 59]]);
  }));
  return function assignProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.assignProduct = assignProduct;
cov_144g7040yr().s[47]++;
var getAssignments = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_144g7040yr().f[5]++;
          cov_144g7040yr().s[48]++;
          _context2.prev = 2;
          cov_144g7040yr().s[49]++;
          _context2.next = 6;
          return cpModel.findAndCountAll({}).then(function (data) {
            cov_144g7040yr().f[6]++;
            cov_144g7040yr().s[50]++;
            return res.status(200).send({
              message: "Fetched all the assigned classes and products!!!",
              body: data.rows
            });
          })["catch"](function (err) {
            cov_144g7040yr().f[7]++;
            cov_144g7040yr().s[51]++;
            return res.status(400).send({
              error: "ERR",
              err: err
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_144g7040yr().s[52]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getAssignments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAssignments = getAssignments;
cov_144g7040yr().s[53]++;
var getOneAssignment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_144g7040yr().f[8]++;
          cov_144g7040yr().s[54]++;
          _context3.prev = 2;
          id = (cov_144g7040yr().s[55]++, req.params.id);
          cov_144g7040yr().s[56]++;
          _context3.next = 7;
          return cpModel.findOne({
            where: {
              classProductId: id
            }
          }).then(function (data) {
            cov_144g7040yr().f[9]++;
            cov_144g7040yr().s[57]++;
            return res.status(200).send({
              message: "Fetched one assignment!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_144g7040yr().f[10]++;
            cov_144g7040yr().s[58]++;
            return res.status(400).send({
              error: "ERR",
              err: err
            });
          });
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_144g7040yr().s[59]++;
          return _context3.abrupt("return", res.status(500).send({
            error: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneAssignment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneAssignment = getOneAssignment;
cov_144g7040yr().s[60]++;
var deleteOneAssignment = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_144g7040yr().f[11]++;
          cov_144g7040yr().s[61]++;
          _context4.prev = 2;
          id = (cov_144g7040yr().s[62]++, req.params.id);
          cov_144g7040yr().s[63]++;
          _context4.next = 7;
          return cpModel.destroy({
            where: {
              categoryClassId: id
            }
          }).then(function (data) {
            cov_144g7040yr().f[12]++;
            cov_144g7040yr().s[64]++;
            return res.status(200).send({
              message: "Deleted one assignment!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_144g7040yr().f[13]++;
            cov_144g7040yr().s[65]++;
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 7:
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          cov_144g7040yr().s[66]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function deleteOneAssignment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteOneAssignment = deleteOneAssignment;
cov_144g7040yr().s[67]++;
var deleteAllAssignments = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_144g7040yr().f[14]++;
          cov_144g7040yr().s[68]++;
          _context5.prev = 2;
          cov_144g7040yr().s[69]++;
          _context5.next = 6;
          return cpModel.destroy({
            where: {}
          }).then(function (data) {
            cov_144g7040yr().f[15]++;
            cov_144g7040yr().s[70]++;
            return res.status(200).send({
              message: "Deleted all assignments!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_144g7040yr().f[16]++;
            cov_144g7040yr().s[71]++;
            return res.status(400).send({
              message: "ERR",
              err: err
            });
          });
        case 6:
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](2);
          cov_144g7040yr().s[72]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 8]]);
  }));
  return function deleteAllAssignments(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAllAssignments = deleteAllAssignments;