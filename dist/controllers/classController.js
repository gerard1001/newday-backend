"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClass = exports.getOneClass = exports.getClasses = exports.getClassProducts = exports.deleteOneClass = exports.deleteClasses = exports.createClass = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _fileUpload = require("../helpers/fileUpload");
function cov_78ykvcvab() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\classController.js";
  var hash = "7936dd3dea59745cdef15625c36628ba617e0800";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\classController.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 30
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "3": {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 8,
          column: 34
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "5": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 9
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 44,
          column: 9
        }
      },
      "7": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "8": {
        start: {
          line: 31,
          column: 10
        },
        end: {
          line: 34,
          column: 13
        }
      },
      "9": {
        start: {
          line: 36,
          column: 10
        },
        end: {
          line: 38,
          column: 13
        }
      },
      "10": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 47
        }
      },
      "11": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 41
        }
      },
      "12": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 48,
          column: 7
        }
      },
      "13": {
        start: {
          line: 52,
          column: 19
        },
        end: {
          line: 88,
          column: 1
        }
      },
      "14": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 87,
          column: 3
        }
      },
      "15": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 82,
          column: 9
        }
      },
      "16": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 75,
          column: 11
        }
      },
      "17": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 81,
          column: 11
        }
      },
      "18": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "19": {
        start: {
          line: 90,
          column: 20
        },
        end: {
          line: 125,
          column: 1
        }
      },
      "20": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 124,
          column: 3
        }
      },
      "21": {
        start: {
          line: 92,
          column: 15
        },
        end: {
          line: 92,
          column: 28
        }
      },
      "22": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 119,
          column: 9
        }
      },
      "23": {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 112,
          column: 11
        }
      },
      "24": {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 118,
          column: 11
        }
      },
      "25": {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 123,
          column: 7
        }
      },
      "26": {
        start: {
          line: 127,
          column: 25
        },
        end: {
          line: 164,
          column: 1
        }
      },
      "27": {
        start: {
          line: 128,
          column: 2
        },
        end: {
          line: 163,
          column: 3
        }
      },
      "28": {
        start: {
          line: 129,
          column: 15
        },
        end: {
          line: 129,
          column: 28
        }
      },
      "29": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 158,
          column: 9
        }
      },
      "30": {
        start: {
          line: 146,
          column: 21
        },
        end: {
          line: 146,
          column: 35
        }
      },
      "31": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 147,
          column: 35
        }
      },
      "32": {
        start: {
          line: 148,
          column: 8
        },
        end: {
          line: 151,
          column: 11
        }
      },
      "33": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 157,
          column: 11
        }
      },
      "34": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 162,
          column: 7
        }
      },
      "35": {
        start: {
          line: 166,
          column: 20
        },
        end: {
          line: 205,
          column: 1
        }
      },
      "36": {
        start: {
          line: 167,
          column: 2
        },
        end: {
          line: 204,
          column: 3
        }
      },
      "37": {
        start: {
          line: 168,
          column: 15
        },
        end: {
          line: 168,
          column: 28
        }
      },
      "38": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 175,
          column: 5
        }
      },
      "39": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 171,
          column: 50
        }
      },
      "40": {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 174,
          column: 105
        }
      },
      "41": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 199,
          column: 9
        }
      },
      "42": {
        start: {
          line: 184,
          column: 8
        },
        end: {
          line: 193,
          column: 9
        }
      },
      "43": {
        start: {
          line: 185,
          column: 10
        },
        end: {
          line: 187,
          column: 13
        }
      },
      "44": {
        start: {
          line: 189,
          column: 10
        },
        end: {
          line: 192,
          column: 13
        }
      },
      "45": {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 198,
          column: 11
        }
      },
      "46": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 203,
          column: 7
        }
      },
      "47": {
        start: {
          line: 207,
          column: 22
        },
        end: {
          line: 235,
          column: 1
        }
      },
      "48": {
        start: {
          line: 208,
          column: 2
        },
        end: {
          line: 234,
          column: 3
        }
      },
      "49": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 229,
          column: 9
        }
      },
      "50": {
        start: {
          line: 215,
          column: 8
        },
        end: {
          line: 223,
          column: 9
        }
      },
      "51": {
        start: {
          line: 216,
          column: 10
        },
        end: {
          line: 218,
          column: 13
        }
      },
      "52": {
        start: {
          line: 220,
          column: 10
        },
        end: {
          line: 222,
          column: 13
        }
      },
      "53": {
        start: {
          line: 226,
          column: 8
        },
        end: {
          line: 228,
          column: 11
        }
      },
      "54": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 233,
          column: 7
        }
      },
      "55": {
        start: {
          line: 237,
          column: 23
        },
        end: {
          line: 270,
          column: 1
        }
      },
      "56": {
        start: {
          line: 238,
          column: 2
        },
        end: {
          line: 269,
          column: 3
        }
      },
      "57": {
        start: {
          line: 239,
          column: 15
        },
        end: {
          line: 239,
          column: 28
        }
      },
      "58": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 264,
          column: 9
        }
      },
      "59": {
        start: {
          line: 249,
          column: 8
        },
        end: {
          line: 257,
          column: 9
        }
      },
      "60": {
        start: {
          line: 250,
          column: 10
        },
        end: {
          line: 252,
          column: 13
        }
      },
      "61": {
        start: {
          line: 254,
          column: 10
        },
        end: {
          line: 256,
          column: 13
        }
      },
      "62": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 263,
          column: 11
        }
      },
      "63": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 268,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 20
          },
          end: {
            line: 6,
            column: 21
          }
        },
        loc: {
          start: {
            line: 6,
            column: 40
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 13
          }
        },
        loc: {
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 40,
            column: 7
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 13
          },
          end: {
            line: 41,
            column: 14
          }
        },
        loc: {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 52,
            column: 19
          },
          end: {
            line: 52,
            column: 20
          }
        },
        loc: {
          start: {
            line: 52,
            column: 39
          },
          end: {
            line: 88,
            column: 1
          }
        },
        line: 52
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 12
          },
          end: {
            line: 70,
            column: 13
          }
        },
        loc: {
          start: {
            line: 70,
            column: 22
          },
          end: {
            line: 76,
            column: 7
          }
        },
        line: 70
      },
      "5": {
        name: "(anonymous_5)",
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
            line: 82,
            column: 7
          }
        },
        line: 77
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 90,
            column: 20
          },
          end: {
            line: 90,
            column: 21
          }
        },
        loc: {
          start: {
            line: 90,
            column: 40
          },
          end: {
            line: 125,
            column: 1
          }
        },
        line: 90
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 108,
            column: 12
          },
          end: {
            line: 108,
            column: 13
          }
        },
        loc: {
          start: {
            line: 108,
            column: 22
          },
          end: {
            line: 113,
            column: 7
          }
        },
        line: 108
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 114,
            column: 13
          },
          end: {
            line: 114,
            column: 14
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
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 127,
            column: 25
          },
          end: {
            line: 127,
            column: 26
          }
        },
        loc: {
          start: {
            line: 127,
            column: 45
          },
          end: {
            line: 164,
            column: 1
          }
        },
        line: 127
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 145,
            column: 12
          },
          end: {
            line: 145,
            column: 13
          }
        },
        loc: {
          start: {
            line: 145,
            column: 23
          },
          end: {
            line: 152,
            column: 7
          }
        },
        line: 145
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 153,
            column: 13
          },
          end: {
            line: 153,
            column: 14
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
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 166,
            column: 20
          },
          end: {
            line: 166,
            column: 21
          }
        },
        loc: {
          start: {
            line: 166,
            column: 40
          },
          end: {
            line: 205,
            column: 1
          }
        },
        line: 166
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 183,
            column: 12
          },
          end: {
            line: 183,
            column: 13
          }
        },
        loc: {
          start: {
            line: 183,
            column: 22
          },
          end: {
            line: 194,
            column: 7
          }
        },
        line: 183
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 195,
            column: 13
          },
          end: {
            line: 195,
            column: 14
          }
        },
        loc: {
          start: {
            line: 195,
            column: 22
          },
          end: {
            line: 199,
            column: 7
          }
        },
        line: 195
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 207,
            column: 23
          }
        },
        loc: {
          start: {
            line: 207,
            column: 42
          },
          end: {
            line: 235,
            column: 1
          }
        },
        line: 207
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 214,
            column: 12
          },
          end: {
            line: 214,
            column: 13
          }
        },
        loc: {
          start: {
            line: 214,
            column: 22
          },
          end: {
            line: 224,
            column: 7
          }
        },
        line: 214
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 225,
            column: 13
          },
          end: {
            line: 225,
            column: 14
          }
        },
        loc: {
          start: {
            line: 225,
            column: 22
          },
          end: {
            line: 229,
            column: 7
          }
        },
        line: 225
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 237,
            column: 23
          },
          end: {
            line: 237,
            column: 24
          }
        },
        loc: {
          start: {
            line: 237,
            column: 43
          },
          end: {
            line: 270,
            column: 1
          }
        },
        line: 237
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 248,
            column: 12
          },
          end: {
            line: 248,
            column: 13
          }
        },
        loc: {
          start: {
            line: 248,
            column: 22
          },
          end: {
            line: 258,
            column: 7
          }
        },
        line: 248
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 259,
            column: 13
          },
          end: {
            line: 259,
            column: 14
          }
        },
        loc: {
          start: {
            line: 259,
            column: 22
          },
          end: {
            line: 264,
            column: 7
          }
        },
        line: 259
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
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
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 39,
            column: 9
          }
        }, {
          start: {
            line: 35,
            column: 15
          },
          end: {
            line: 39,
            column: 9
          }
        }],
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        }, {
          start: {
            line: 172,
            column: 11
          },
          end: {
            line: 175,
            column: 5
          }
        }],
        line: 170
      },
      "3": {
        loc: {
          start: {
            line: 184,
            column: 8
          },
          end: {
            line: 193,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 184,
            column: 8
          },
          end: {
            line: 193,
            column: 9
          }
        }, {
          start: {
            line: 188,
            column: 15
          },
          end: {
            line: 193,
            column: 9
          }
        }],
        line: 184
      },
      "4": {
        loc: {
          start: {
            line: 215,
            column: 8
          },
          end: {
            line: 223,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 215,
            column: 8
          },
          end: {
            line: 223,
            column: 9
          }
        }, {
          start: {
            line: 219,
            column: 15
          },
          end: {
            line: 223,
            column: 9
          }
        }],
        line: 215
      },
      "5": {
        loc: {
          start: {
            line: 249,
            column: 8
          },
          end: {
            line: 257,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 8
          },
          end: {
            line: 257,
            column: 9
          }
        }, {
          start: {
            line: 253,
            column: 15
          },
          end: {
            line: 257,
            column: 9
          }
        }],
        line: 249
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
      "63": 0
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
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7936dd3dea59745cdef15625c36628ba617e0800"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_78ykvcvab = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_78ykvcvab();
var classModel = (cov_78ykvcvab().s[0]++, _models["default"].Class);
cov_78ykvcvab().s[1]++;
var createClass = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _ref2, className;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_78ykvcvab().f[0]++;
          cov_78ykvcvab().s[2]++;
          _context.prev = 2;
          _ref2 = (cov_78ykvcvab().s[3]++, req.data), className = _ref2.className; // if (req.file) {
          //   req.data.coverImage = await fileUpload(req);
          // } else {
          //   req.data.coverImage =
          //     "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";
          // }
          cov_78ykvcvab().s[4]++;
          if (className) {
            _context.next = 11;
            break;
          }
          cov_78ykvcvab().b[0][0]++;
          cov_78ykvcvab().s[5]++;
          return _context.abrupt("return", res.status(400).send({
            error: "Please make sure you include the className."
          }));
        case 11:
          cov_78ykvcvab().b[0][1]++;
        case 12:
          cov_78ykvcvab().s[6]++;
          _context.next = 15;
          return classModel.findOrCreate({
            where: {
              className: req.data.className,
              coverImage: req.data.coverImage
            }
          }).then(function (data) {
            cov_78ykvcvab().f[1]++;
            cov_78ykvcvab().s[7]++;
            if (data[1]) {
              cov_78ykvcvab().b[1][0]++;
              cov_78ykvcvab().s[8]++;
              return res.status(201).send({
                message: "successfully created!",
                body: {
                  data: data
                }
              });
            } else {
              cov_78ykvcvab().b[1][1]++;
              cov_78ykvcvab().s[9]++;
              return res.status(409).send({
                error: "This class already exists!"
              });
            }
          })["catch"](function (err) {
            cov_78ykvcvab().f[2]++;
            cov_78ykvcvab().s[10]++;
            console.log("******************", err);
            cov_78ykvcvab().s[11]++;
            return res.status(403).send(err);
          });
        case 15:
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          cov_78ykvcvab().s[12]++;
          return _context.abrupt("return", res.status(500).send({
            error: "".concat(_context.t0)
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 17]]);
  }));
  return function createClass(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createClass = createClass;
cov_78ykvcvab().s[13]++;
var getClasses = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_78ykvcvab().f[3]++;
          cov_78ykvcvab().s[14]++;
          _context2.prev = 2;
          cov_78ykvcvab().s[15]++;
          _context2.next = 6;
          return classModel.findAndCountAll({
            order: [["className", "ASC"]],
            include: [{
              model: _models["default"].Product,
              as: "Products",
              order: [["productName", "ASC"]]
            }, {
              model: _models["default"].Category,
              as: "Categories",
              order: [["categoryName", "ASC"]]
            }]
          }).then(function (data) {
            cov_78ykvcvab().f[4]++;
            cov_78ykvcvab().s[16]++;
            return res.status(200).send({
              message: "Fetched all class elements",
              body: data.rows,
              count: data.count
            });
          })["catch"](function (err) {
            cov_78ykvcvab().f[5]++;
            cov_78ykvcvab().s[17]++;
            return res.status(403).send({
              message: "ERROR",
              err: err
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_78ykvcvab().s[18]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getClasses(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getClasses = getClasses;
cov_78ykvcvab().s[19]++;
var getOneClass = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_78ykvcvab().f[6]++;
          cov_78ykvcvab().s[20]++;
          _context3.prev = 2;
          id = (cov_78ykvcvab().s[21]++, req.params.id);
          cov_78ykvcvab().s[22]++;
          _context3.next = 7;
          return classModel.findOne({
            order: [["className", "ASC"]],
            include: [{
              model: _models["default"].Product,
              as: "Products",
              order: [["productName", "ASC"]]
            }],
            where: {
              classId: id
            }
          }).then(function (data) {
            cov_78ykvcvab().f[7]++;
            cov_78ykvcvab().s[23]++;
            return res.status(200).send({
              message: "Fetched one class",
              body: {
                data: data
              }
            });
          })["catch"](function (err) {
            cov_78ykvcvab().f[8]++;
            cov_78ykvcvab().s[24]++;
            return res.status(403).send({
              message: "ERROR ",
              err: err
            });
          });
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_78ykvcvab().s[25]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneClass(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getOneClass = getOneClass;
cov_78ykvcvab().s[26]++;
var getClassProducts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_78ykvcvab().f[9]++;
          cov_78ykvcvab().s[27]++;
          _context4.prev = 2;
          id = (cov_78ykvcvab().s[28]++, req.params.id);
          cov_78ykvcvab().s[29]++;
          _context4.next = 7;
          return classModel.findOne({
            order: [["className", "ASC"]],
            include: [{
              model: _models["default"].Product,
              as: "Products",
              order: [["productName", "ASC"]]
            }],
            where: {
              classId: id
            }
          }).then(function (datas) {
            cov_78ykvcvab().f[10]++;
            var data = (cov_78ykvcvab().s[30]++, datas.Products);
            cov_78ykvcvab().s[31]++;
            console.log(data.Products);
            cov_78ykvcvab().s[32]++;
            return res.status(200).send({
              message: "Fetched class's products",
              data: data
            });
          })["catch"](function (err) {
            cov_78ykvcvab().f[11]++;
            cov_78ykvcvab().s[33]++;
            return res.status(403).send({
              message: "ERROR ",
              err: err
            });
          });
        case 7:
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          cov_78ykvcvab().s[34]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function getClassProducts(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getClassProducts = getClassProducts;
cov_78ykvcvab().s[35]++;
var updateClass = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_78ykvcvab().f[12]++;
          cov_78ykvcvab().s[36]++;
          _context5.prev = 2;
          id = (cov_78ykvcvab().s[37]++, req.params.id);
          cov_78ykvcvab().s[38]++;
          if (!req.file) {
            _context5.next = 13;
            break;
          }
          cov_78ykvcvab().b[2][0]++;
          cov_78ykvcvab().s[39]++;
          _context5.next = 10;
          return (0, _fileUpload.fileUpload)(req);
        case 10:
          req.body.coverImage = _context5.sent;
          _context5.next = 16;
          break;
        case 13:
          cov_78ykvcvab().b[2][1]++;
          cov_78ykvcvab().s[40]++;
          req.body.coverImage = "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";
        case 16:
          cov_78ykvcvab().s[41]++;
          _context5.next = 19;
          return classModel.update(req.body, {
            where: {
              classId: id
            }
          }).then(function (data) {
            cov_78ykvcvab().f[13]++;
            cov_78ykvcvab().s[42]++;
            if (data == 1) {
              cov_78ykvcvab().b[3][0]++;
              cov_78ykvcvab().s[43]++;
              return res.status(200).send({
                message: "Updated class 1 successfully!"
              });
            } else {
              cov_78ykvcvab().b[3][1]++;
              cov_78ykvcvab().s[44]++;
              return res.status(400).send({
                message: "Cannot update class 1 ".concat(id, "!"),
                data: data
              });
            }
          })["catch"](function (err) {
            cov_78ykvcvab().f[14]++;
            cov_78ykvcvab().s[45]++;
            return res.status(403).send({
              message: "error while trying to update!"
            });
          });
        case 19:
          _context5.next = 25;
          break;
        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](2);
          cov_78ykvcvab().s[46]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 25:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 21]]);
  }));
  return function updateClass(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateClass = updateClass;
cov_78ykvcvab().s[47]++;
var deleteClasses = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_78ykvcvab().f[15]++;
          cov_78ykvcvab().s[48]++;
          _context6.prev = 2;
          cov_78ykvcvab().s[49]++;
          _context6.next = 6;
          return classModel.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_78ykvcvab().f[16]++;
            cov_78ykvcvab().s[50]++;
            if (data === 1) {
              cov_78ykvcvab().b[4][0]++;
              cov_78ykvcvab().s[51]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " class one element successfully!")
              });
            } else {
              cov_78ykvcvab().b[4][1]++;
              cov_78ykvcvab().s[52]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " class one elements successfully!")
              });
            }
          })["catch"](function (err) {
            cov_78ykvcvab().f[17]++;
            cov_78ykvcvab().s[53]++;
            return res.status(400).send({
              message: "An error occured while deleting category!"
            });
          });
        case 6:
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](2);
          cov_78ykvcvab().s[54]++;
          return _context6.abrupt("return", res.status(500).send({
            message: "".concat(_context6.t0)
          }));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 8]]);
  }));
  return function deleteClasses(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteClasses = deleteClasses;
cov_78ykvcvab().s[55]++;
var deleteOneClass = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          cov_78ykvcvab().f[18]++;
          cov_78ykvcvab().s[56]++;
          _context7.prev = 2;
          id = (cov_78ykvcvab().s[57]++, req.params.id);
          cov_78ykvcvab().s[58]++;
          _context7.next = 7;
          return classModel.destroy({
            where: {
              classId: id
            },
            truncate: false
          }).then(function (data) {
            cov_78ykvcvab().f[19]++;
            cov_78ykvcvab().s[59]++;
            if (data === 1) {
              cov_78ykvcvab().b[5][0]++;
              cov_78ykvcvab().s[60]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " class element successfully!")
              });
            } else {
              cov_78ykvcvab().b[5][1]++;
              cov_78ykvcvab().s[61]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " class elements successfully!")
              });
            }
          })["catch"](function (err) {
            cov_78ykvcvab().f[20]++;
            cov_78ykvcvab().s[62]++;
            return res.status(400).send({
              message: "An error occured while deleting category!",
              err: err
            });
          });
        case 7:
          _context7.next = 13;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](2);
          cov_78ykvcvab().s[63]++;
          return _context7.abrupt("return", res.status(500).send({
            message: "".concat(_context7.t0)
          }));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return function deleteOneClass(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteOneClass = deleteOneClass;