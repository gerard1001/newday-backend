"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getOneCategory = exports.getCategoryClasses = exports.getCategory = exports.deleteOneCategory = exports.deleteCategory = exports.createCategory = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_5cbj1lrd7() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\categoryController.js";
  var hash = "722bd74fe6faf59216a712bc3cb86c00b34ecd31";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\categoryController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 3,
          column: 37
        }
      },
      "1": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "3": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "4": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "5": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 11,
          column: 9
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "7": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "8": {
        start: {
          line: 22,
          column: 10
        },
        end: {
          line: 25,
          column: 13
        }
      },
      "9": {
        start: {
          line: 27,
          column: 10
        },
        end: {
          line: 29,
          column: 13
        }
      },
      "10": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 35,
          column: 11
        }
      },
      "11": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      "12": {
        start: {
          line: 44,
          column: 20
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "13": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 78,
          column: 3
        }
      },
      "14": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 73,
          column: 9
        }
      },
      "15": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 26
        }
      },
      "16": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 66,
          column: 11
        }
      },
      "17": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 56
        }
      },
      "18": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 72,
          column: 11
        }
      },
      "19": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "20": {
        start: {
          line: 81,
          column: 23
        },
        end: {
          line: 120,
          column: 1
        }
      },
      "21": {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 119,
          column: 3
        }
      },
      "22": {
        start: {
          line: 83,
          column: 15
        },
        end: {
          line: 83,
          column: 28
        }
      },
      "23": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 114,
          column: 9
        }
      },
      "24": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 108,
          column: 11
        }
      },
      "25": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 113,
          column: 11
        }
      },
      "26": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "27": {
        start: {
          line: 122,
          column: 27
        },
        end: {
          line: 170,
          column: 1
        }
      },
      "28": {
        start: {
          line: 123,
          column: 2
        },
        end: {
          line: 169,
          column: 3
        }
      },
      "29": {
        start: {
          line: 124,
          column: 15
        },
        end: {
          line: 124,
          column: 28
        }
      },
      "30": {
        start: {
          line: 126,
          column: 4
        },
        end: {
          line: 131,
          column: 5
        }
      },
      "31": {
        start: {
          line: 127,
          column: 6
        },
        end: {
          line: 127,
          column: 39
        }
      },
      "32": {
        start: {
          line: 128,
          column: 6
        },
        end: {
          line: 130,
          column: 9
        }
      },
      "33": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 164,
          column: 9
        }
      },
      "34": {
        start: {
          line: 153,
          column: 21
        },
        end: {
          line: 153,
          column: 34
        }
      },
      "35": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 63
        }
      },
      "36": {
        start: {
          line: 155,
          column: 8
        },
        end: {
          line: 158,
          column: 11
        }
      },
      "37": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 163,
          column: 11
        }
      },
      "38": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 168,
          column: 7
        }
      },
      "39": {
        start: {
          line: 172,
          column: 23
        },
        end: {
          line: 200,
          column: 1
        }
      },
      "40": {
        start: {
          line: 173,
          column: 2
        },
        end: {
          line: 199,
          column: 3
        }
      },
      "41": {
        start: {
          line: 174,
          column: 19
        },
        end: {
          line: 174,
          column: 29
        }
      },
      "42": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 194,
          column: 9
        }
      },
      "43": {
        start: {
          line: 185,
          column: 8
        },
        end: {
          line: 187,
          column: 11
        }
      },
      "44": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 192,
          column: 11
        }
      },
      "45": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 193,
          column: 25
        }
      },
      "46": {
        start: {
          line: 196,
          column: 4
        },
        end: {
          line: 198,
          column: 7
        }
      },
      "47": {
        start: {
          line: 202,
          column: 23
        },
        end: {
          line: 230,
          column: 1
        }
      },
      "48": {
        start: {
          line: 203,
          column: 2
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "49": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 224,
          column: 9
        }
      },
      "50": {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 218,
          column: 9
        }
      },
      "51": {
        start: {
          line: 211,
          column: 10
        },
        end: {
          line: 213,
          column: 13
        }
      },
      "52": {
        start: {
          line: 215,
          column: 10
        },
        end: {
          line: 217,
          column: 13
        }
      },
      "53": {
        start: {
          line: 221,
          column: 8
        },
        end: {
          line: 223,
          column: 11
        }
      },
      "54": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 228,
          column: 7
        }
      },
      "55": {
        start: {
          line: 232,
          column: 26
        },
        end: {
          line: 265,
          column: 1
        }
      },
      "56": {
        start: {
          line: 233,
          column: 2
        },
        end: {
          line: 264,
          column: 3
        }
      },
      "57": {
        start: {
          line: 234,
          column: 15
        },
        end: {
          line: 234,
          column: 28
        }
      },
      "58": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 259,
          column: 9
        }
      },
      "59": {
        start: {
          line: 244,
          column: 8
        },
        end: {
          line: 252,
          column: 9
        }
      },
      "60": {
        start: {
          line: 245,
          column: 10
        },
        end: {
          line: 247,
          column: 13
        }
      },
      "61": {
        start: {
          line: 249,
          column: 10
        },
        end: {
          line: 251,
          column: 13
        }
      },
      "62": {
        start: {
          line: 255,
          column: 8
        },
        end: {
          line: 258,
          column: 11
        }
      },
      "63": {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 263,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 25
          },
          end: {
            line: 31,
            column: 7
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 13
          },
          end: {
            line: 32,
            column: 14
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
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 44,
            column: 21
          }
        },
        loc: {
          start: {
            line: 44,
            column: 40
          },
          end: {
            line: 79,
            column: 1
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 60,
            column: 12
          },
          end: {
            line: 60,
            column: 13
          }
        },
        loc: {
          start: {
            line: 60,
            column: 22
          },
          end: {
            line: 67,
            column: 7
          }
        },
        line: 60
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 68,
            column: 13
          },
          end: {
            line: 68,
            column: 14
          }
        },
        loc: {
          start: {
            line: 68,
            column: 22
          },
          end: {
            line: 73,
            column: 7
          }
        },
        line: 68
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 81,
            column: 23
          },
          end: {
            line: 81,
            column: 24
          }
        },
        loc: {
          start: {
            line: 81,
            column: 43
          },
          end: {
            line: 120,
            column: 1
          }
        },
        line: 81
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 104,
            column: 12
          },
          end: {
            line: 104,
            column: 13
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
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 110,
            column: 13
          },
          end: {
            line: 110,
            column: 14
          }
        },
        loc: {
          start: {
            line: 110,
            column: 22
          },
          end: {
            line: 114,
            column: 7
          }
        },
        line: 110
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 122,
            column: 27
          },
          end: {
            line: 122,
            column: 28
          }
        },
        loc: {
          start: {
            line: 122,
            column: 47
          },
          end: {
            line: 170,
            column: 1
          }
        },
        line: 122
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 152,
            column: 12
          },
          end: {
            line: 152,
            column: 13
          }
        },
        loc: {
          start: {
            line: 152,
            column: 23
          },
          end: {
            line: 159,
            column: 7
          }
        },
        line: 152
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 160,
            column: 13
          },
          end: {
            line: 160,
            column: 14
          }
        },
        loc: {
          start: {
            line: 160,
            column: 22
          },
          end: {
            line: 164,
            column: 7
          }
        },
        line: 160
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 172,
            column: 23
          },
          end: {
            line: 172,
            column: 24
          }
        },
        loc: {
          start: {
            line: 172,
            column: 43
          },
          end: {
            line: 200,
            column: 1
          }
        },
        line: 172
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 184,
            column: 12
          },
          end: {
            line: 184,
            column: 13
          }
        },
        loc: {
          start: {
            line: 184,
            column: 22
          },
          end: {
            line: 188,
            column: 7
          }
        },
        line: 184
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 189,
            column: 13
          },
          end: {
            line: 189,
            column: 14
          }
        },
        loc: {
          start: {
            line: 189,
            column: 22
          },
          end: {
            line: 194,
            column: 7
          }
        },
        line: 189
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 202,
            column: 23
          },
          end: {
            line: 202,
            column: 24
          }
        },
        loc: {
          start: {
            line: 202,
            column: 43
          },
          end: {
            line: 230,
            column: 1
          }
        },
        line: 202
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 209,
            column: 12
          },
          end: {
            line: 209,
            column: 13
          }
        },
        loc: {
          start: {
            line: 209,
            column: 22
          },
          end: {
            line: 219,
            column: 7
          }
        },
        line: 209
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 220,
            column: 13
          },
          end: {
            line: 220,
            column: 14
          }
        },
        loc: {
          start: {
            line: 220,
            column: 22
          },
          end: {
            line: 224,
            column: 7
          }
        },
        line: 220
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 232,
            column: 26
          },
          end: {
            line: 232,
            column: 27
          }
        },
        loc: {
          start: {
            line: 232,
            column: 46
          },
          end: {
            line: 265,
            column: 1
          }
        },
        line: 232
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 243,
            column: 12
          },
          end: {
            line: 243,
            column: 13
          }
        },
        loc: {
          start: {
            line: 243,
            column: 22
          },
          end: {
            line: 253,
            column: 7
          }
        },
        line: 243
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 254,
            column: 13
          },
          end: {
            line: 254,
            column: 14
          }
        },
        loc: {
          start: {
            line: 254,
            column: 22
          },
          end: {
            line: 259,
            column: 7
          }
        },
        line: 254
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 12,
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
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 30,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 30,
            column: 9
          }
        }, {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 30,
            column: 9
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 131,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 131,
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
        line: 126
      },
      "3": {
        loc: {
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 126,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 126,
            column: 16
          }
        }, {
          start: {
            line: 126,
            column: 20
          },
          end: {
            line: 126,
            column: 35
          }
        }],
        line: 126
      },
      "4": {
        loc: {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 218,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 218,
            column: 9
          }
        }, {
          start: {
            line: 214,
            column: 15
          },
          end: {
            line: 218,
            column: 9
          }
        }],
        line: 210
      },
      "5": {
        loc: {
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 252,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 252,
            column: 9
          }
        }, {
          start: {
            line: 248,
            column: 15
          },
          end: {
            line: 252,
            column: 9
          }
        }],
        line: 244
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
    hash: "722bd74fe6faf59216a712bc3cb86c00b34ecd31"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5cbj1lrd7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_5cbj1lrd7();
var categoryRoutes = (cov_5cbj1lrd7().s[0]++, _models["default"].Category);
cov_5cbj1lrd7().s[1]++;
var createCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _ref2, categoryName;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_5cbj1lrd7().f[0]++;
          cov_5cbj1lrd7().s[2]++;
          _context.prev = 2;
          _ref2 = (cov_5cbj1lrd7().s[3]++, req.body), categoryName = _ref2.categoryName;
          cov_5cbj1lrd7().s[4]++;
          if (!(categoryName == "")) {
            _context.next = 11;
            break;
          }
          cov_5cbj1lrd7().b[0][0]++;
          cov_5cbj1lrd7().s[5]++;
          return _context.abrupt("return", res.status(400).send({
            error: "Fill in the missing field please."
          }));
        case 11:
          cov_5cbj1lrd7().b[0][1]++;
        case 12:
          cov_5cbj1lrd7().s[6]++;
          _context.next = 15;
          return categoryRoutes.findOrCreate({
            categoryName: req.body.categoryName,
            where: {
              categoryName: req.body.categoryName
            }
          }).then(function (created) {
            cov_5cbj1lrd7().f[1]++;
            cov_5cbj1lrd7().s[7]++;
            if (created[1]) {
              cov_5cbj1lrd7().b[1][0]++;
              cov_5cbj1lrd7().s[8]++;
              return res.status(201).send({
                message: "successfully created!",
                created: created
              });
            } else {
              cov_5cbj1lrd7().b[1][1]++;
              cov_5cbj1lrd7().s[9]++;
              return res.status(409).send({
                error: "This category already exists!"
              });
            }
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[2]++;
            cov_5cbj1lrd7().s[10]++;
            return res.status(400).send({
              error: "Please include the category name. ".concat(err)
            });
          });
        case 15:
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          cov_5cbj1lrd7().s[11]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 17]]);
  }));
  return function createCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCategory = createCategory;
cov_5cbj1lrd7().s[12]++;
var getCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_5cbj1lrd7().f[3]++;
          cov_5cbj1lrd7().s[13]++;
          _context2.prev = 2;
          cov_5cbj1lrd7().s[14]++;
          _context2.next = 6;
          return categoryRoutes.findAndCountAll({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }]
          }).then(function (data) {
            cov_5cbj1lrd7().f[4]++;
            cov_5cbj1lrd7().s[15]++;
            console.log(data);
            cov_5cbj1lrd7().s[16]++;
            return res.status(200).send({
              message: "Fetched all categories",
              body: data.rows,
              count: data.count
            });
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[5]++;
            cov_5cbj1lrd7().s[17]++;
            console.log("++++++++++++++++++=", err.message);
            cov_5cbj1lrd7().s[18]++;
            return res.status(403).send({
              message: "".concat(err)
            });
          });
        case 6:
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          cov_5cbj1lrd7().s[19]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  }));
  return function getCategory(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getCategory = getCategory;
cov_5cbj1lrd7().s[20]++;
var getOneCategory = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_5cbj1lrd7().f[6]++;
          cov_5cbj1lrd7().s[21]++;
          _context3.prev = 2;
          id = (cov_5cbj1lrd7().s[22]++, req.params.id);
          cov_5cbj1lrd7().s[23]++;
          _context3.next = 7;
          return categoryRoutes.findOne({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }],
            where: {
              categoryId: id
            }
          }).then(function (data) {
            cov_5cbj1lrd7().f[7]++;
            cov_5cbj1lrd7().s[24]++;
            return res.status(200).send({
              message: "Fetched One category",
              data: data
            });
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[8]++;
            cov_5cbj1lrd7().s[25]++;
            return res.status(403).send({
              message: "".concat(err)
            });
          });
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_5cbj1lrd7().s[26]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneCategory(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getOneCategory = getOneCategory;
cov_5cbj1lrd7().s[27]++;
var getCategoryClasses = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_5cbj1lrd7().f[9]++;
          cov_5cbj1lrd7().s[28]++;
          _context4.prev = 2;
          id = (cov_5cbj1lrd7().s[29]++, req.params.id);
          cov_5cbj1lrd7().s[30]++;
          if (!((cov_5cbj1lrd7().b[3][0]++, id == "") || (cov_5cbj1lrd7().b[3][1]++, id == undefined))) {
            _context4.next = 13;
            break;
          }
          cov_5cbj1lrd7().b[2][0]++;
          cov_5cbj1lrd7().s[31]++;
          console.log("NOOOOO IDDDDDDD!!");
          cov_5cbj1lrd7().s[32]++;
          return _context4.abrupt("return", res.send({
            message: "NOOOOO IDDDDDDD!!!"
          }));
        case 13:
          cov_5cbj1lrd7().b[2][1]++;
        case 14:
          cov_5cbj1lrd7().s[33]++;
          _context4.next = 17;
          return categoryRoutes.findOne({
            order: [["categoryName", "ASC"]],
            include: [{
              model: _models["default"].User,
              as: "Users"
            }, {
              model: _models["default"].Class,
              as: "Classes"
            }],
            where: {
              categoryId: id
            }
          }).then(function (datas) {
            cov_5cbj1lrd7().f[10]++;
            var data = (cov_5cbj1lrd7().s[34]++, datas.Classes);
            cov_5cbj1lrd7().s[35]++;
            console.log("````````               ````````````", id);
            cov_5cbj1lrd7().s[36]++;
            return res.status(200).send({
              message: "Fetched all category classes",
              data: data
            });
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[11]++;
            cov_5cbj1lrd7().s[37]++;
            return res.status(403).send({
              message: "".concat(err)
            });
          });
        case 17:
          _context4.next = 23;
          break;
        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](2);
          cov_5cbj1lrd7().s[38]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 23:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 19]]);
  }));
  return function getCategoryClasses(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getCategoryClasses = getCategoryClasses;
cov_5cbj1lrd7().s[39]++;
var updateCategory = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _ref7, id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_5cbj1lrd7().f[12]++;
          cov_5cbj1lrd7().s[40]++;
          _context5.prev = 2;
          _ref7 = (cov_5cbj1lrd7().s[41]++, req.params), id = _ref7.id;
          cov_5cbj1lrd7().s[42]++;
          _context5.next = 7;
          return categoryRoutes.update(req.body, {
            categoryName: req.body.categoryName,
            userId: req.body.userId,
            where: {
              categoryId: id
            }
          }).then(function (data) {
            cov_5cbj1lrd7().f[13]++;
            cov_5cbj1lrd7().s[43]++;
            return res.status(200).send({
              message: "Category updated successfully!"
            });
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[14]++;
            cov_5cbj1lrd7().s[44]++;
            return res.status(403).send({
              message: "An error occured while updated category!"
            });
            cov_5cbj1lrd7().s[45]++;
            console.log(err);
          });
        case 7:
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          cov_5cbj1lrd7().s[46]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return function updateCategory(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateCategory = updateCategory;
cov_5cbj1lrd7().s[47]++;
var deleteCategory = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_5cbj1lrd7().f[15]++;
          cov_5cbj1lrd7().s[48]++;
          _context6.prev = 2;
          cov_5cbj1lrd7().s[49]++;
          _context6.next = 6;
          return categoryRoutes.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_5cbj1lrd7().f[16]++;
            cov_5cbj1lrd7().s[50]++;
            if (data === 1) {
              cov_5cbj1lrd7().b[4][0]++;
              cov_5cbj1lrd7().s[51]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " category successfully!")
              });
            } else {
              cov_5cbj1lrd7().b[4][1]++;
              cov_5cbj1lrd7().s[52]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " categories successfully!")
              });
            }
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[17]++;
            cov_5cbj1lrd7().s[53]++;
            return res.status(403).send({
              error: "An error occured while deleting category!"
            });
          });
        case 6:
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](2);
          cov_5cbj1lrd7().s[54]++;
          return _context6.abrupt("return", res.status(500).send({
            error: "".concat(_context6.t0)
          }));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 8]]);
  }));
  return function deleteCategory(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteCategory = deleteCategory;
cov_5cbj1lrd7().s[55]++;
var deleteOneCategory = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          cov_5cbj1lrd7().f[18]++;
          cov_5cbj1lrd7().s[56]++;
          _context7.prev = 2;
          id = (cov_5cbj1lrd7().s[57]++, req.params.id);
          cov_5cbj1lrd7().s[58]++;
          _context7.next = 7;
          return categoryRoutes.destroy({
            where: {
              categoryId: id
            },
            truncate: false
          }).then(function (data) {
            cov_5cbj1lrd7().f[19]++;
            cov_5cbj1lrd7().s[59]++;
            if (data === 1) {
              cov_5cbj1lrd7().b[5][0]++;
              cov_5cbj1lrd7().s[60]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " category element successfully!")
              });
            } else {
              cov_5cbj1lrd7().b[5][1]++;
              cov_5cbj1lrd7().s[61]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " category elements successfully!")
              });
            }
          })["catch"](function (err) {
            cov_5cbj1lrd7().f[20]++;
            cov_5cbj1lrd7().s[62]++;
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
          cov_5cbj1lrd7().s[63]++;
          return _context7.abrupt("return", res.status(500).send({
            message: "".concat(_context7.t0)
          }));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return function deleteOneCategory(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();
exports.deleteOneCategory = deleteOneCategory;