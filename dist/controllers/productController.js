"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProduct = exports.getOneProduct = exports.deleteProduct = exports.deleteOneProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _fileUpload = require("../helpers/fileUpload");
function cov_1fgqxv5gip() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\productController.js";
  var hash = "6e681da027328eaa1dfeb3cffc668538f6f209c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\productController.js",
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
          line: 95,
          column: 1
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 94,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 46
        },
        end: {
          line: 9,
          column: 54
        }
      },
      "5": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 20,
          column: 8
        }
      },
      "6": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "7": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 19,
          column: 11
        }
      },
      "8": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 36
        }
      },
      "9": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "10": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 40
        }
      },
      "11": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "12": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 89,
          column: 5
        }
      },
      "13": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 34,
          column: 9
        }
      },
      "14": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 88,
          column: 11
        }
      },
      "15": {
        start: {
          line: 43,
          column: 10
        },
        end: {
          line: 87,
          column: 11
        }
      },
      "16": {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 46,
          column: 15
        }
      },
      "17": {
        start: {
          line: 48,
          column: 12
        },
        end: {
          line: 86,
          column: 17
        }
      },
      "18": {
        start: {
          line: 76,
          column: 16
        },
        end: {
          line: 79,
          column: 19
        }
      },
      "19": {
        start: {
          line: 82,
          column: 16
        },
        end: {
          line: 85,
          column: 19
        }
      },
      "20": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 93,
          column: 7
        }
      },
      "21": {
        start: {
          line: 97,
          column: 19
        },
        end: {
          line: 155,
          column: 1
        }
      },
      "22": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 154,
          column: 3
        }
      },
      "23": {
        start: {
          line: 99,
          column: 22
        },
        end: {
          line: 99,
          column: 53
        }
      },
      "24": {
        start: {
          line: 100,
          column: 22
        },
        end: {
          line: 100,
          column: 53
        }
      },
      "25": {
        start: {
          line: 102,
          column: 15
        },
        end: {
          line: 102,
          column: 16
        }
      },
      "26": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 106,
          column: 5
        }
      },
      "27": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 23
        }
      },
      "28": {
        start: {
          line: 108,
          column: 15
        },
        end: {
          line: 108,
          column: 18
        }
      },
      "29": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 112,
          column: 5
        }
      },
      "30": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 23
        }
      },
      "31": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 148,
          column: 9
        }
      },
      "32": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 143,
          column: 11
        }
      },
      "33": {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 146,
          column: 25
        }
      },
      "34": {
        start: {
          line: 147,
          column: 8
        },
        end: {
          line: 147,
          column: 41
        }
      },
      "35": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 150,
          column: 23
        }
      },
      "36": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 153,
          column: 7
        }
      },
      "37": {
        start: {
          line: 157,
          column: 22
        },
        end: {
          line: 188,
          column: 1
        }
      },
      "38": {
        start: {
          line: 158,
          column: 2
        },
        end: {
          line: 187,
          column: 3
        }
      },
      "39": {
        start: {
          line: 159,
          column: 15
        },
        end: {
          line: 159,
          column: 28
        }
      },
      "40": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 181,
          column: 9
        }
      },
      "41": {
        start: {
          line: 171,
          column: 8
        },
        end: {
          line: 174,
          column: 11
        }
      },
      "42": {
        start: {
          line: 177,
          column: 8
        },
        end: {
          line: 180,
          column: 11
        }
      },
      "43": {
        start: {
          line: 183,
          column: 4
        },
        end: {
          line: 183,
          column: 23
        }
      },
      "44": {
        start: {
          line: 184,
          column: 4
        },
        end: {
          line: 186,
          column: 7
        }
      },
      "45": {
        start: {
          line: 190,
          column: 22
        },
        end: {
          line: 223,
          column: 1
        }
      },
      "46": {
        start: {
          line: 191,
          column: 2
        },
        end: {
          line: 222,
          column: 3
        }
      },
      "47": {
        start: {
          line: 192,
          column: 15
        },
        end: {
          line: 192,
          column: 28
        }
      },
      "48": {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 217,
          column: 9
        }
      },
      "49": {
        start: {
          line: 201,
          column: 8
        },
        end: {
          line: 210,
          column: 9
        }
      },
      "50": {
        start: {
          line: 202,
          column: 10
        },
        end: {
          line: 204,
          column: 13
        }
      },
      "51": {
        start: {
          line: 206,
          column: 10
        },
        end: {
          line: 209,
          column: 13
        }
      },
      "52": {
        start: {
          line: 213,
          column: 8
        },
        end: {
          line: 216,
          column: 11
        }
      },
      "53": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 221,
          column: 7
        }
      },
      "54": {
        start: {
          line: 225,
          column: 25
        },
        end: {
          line: 252,
          column: 1
        }
      },
      "55": {
        start: {
          line: 226,
          column: 2
        },
        end: {
          line: 251,
          column: 3
        }
      },
      "56": {
        start: {
          line: 227,
          column: 15
        },
        end: {
          line: 227,
          column: 28
        }
      },
      "57": {
        start: {
          line: 229,
          column: 4
        },
        end: {
          line: 246,
          column: 9
        }
      },
      "58": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 239,
          column: 11
        }
      },
      "59": {
        start: {
          line: 242,
          column: 8
        },
        end: {
          line: 245,
          column: 11
        }
      },
      "60": {
        start: {
          line: 248,
          column: 4
        },
        end: {
          line: 250,
          column: 7
        }
      },
      "61": {
        start: {
          line: 254,
          column: 22
        },
        end: {
          line: 287,
          column: 1
        }
      },
      "62": {
        start: {
          line: 255,
          column: 2
        },
        end: {
          line: 286,
          column: 3
        }
      },
      "63": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 281,
          column: 9
        }
      },
      "64": {
        start: {
          line: 261,
          column: 8
        },
        end: {
          line: 274,
          column: 9
        }
      },
      "65": {
        start: {
          line: 262,
          column: 10
        },
        end: {
          line: 264,
          column: 13
        }
      },
      "66": {
        start: {
          line: 265,
          column: 15
        },
        end: {
          line: 274,
          column: 9
        }
      },
      "67": {
        start: {
          line: 266,
          column: 10
        },
        end: {
          line: 268,
          column: 13
        }
      },
      "68": {
        start: {
          line: 270,
          column: 10
        },
        end: {
          line: 273,
          column: 13
        }
      },
      "69": {
        start: {
          line: 277,
          column: 8
        },
        end: {
          line: 280,
          column: 11
        }
      },
      "70": {
        start: {
          line: 283,
          column: 4
        },
        end: {
          line: 285,
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
            line: 95,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 14
          }
        },
        loc: {
          start: {
            line: 15,
            column: 22
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 42,
            column: 15
          }
        },
        loc: {
          start: {
            line: 42,
            column: 25
          },
          end: {
            line: 88,
            column: 9
          }
        },
        line: 42
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 75,
            column: 20
          },
          end: {
            line: 75,
            column: 21
          }
        },
        loc: {
          start: {
            line: 75,
            column: 30
          },
          end: {
            line: 80,
            column: 15
          }
        },
        line: 75
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 81,
            column: 21
          },
          end: {
            line: 81,
            column: 22
          }
        },
        loc: {
          start: {
            line: 81,
            column: 30
          },
          end: {
            line: 86,
            column: 15
          }
        },
        line: 81
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 97,
            column: 19
          },
          end: {
            line: 97,
            column: 20
          }
        },
        loc: {
          start: {
            line: 97,
            column: 39
          },
          end: {
            line: 155,
            column: 1
          }
        },
        line: 97
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 136,
            column: 12
          },
          end: {
            line: 136,
            column: 13
          }
        },
        loc: {
          start: {
            line: 136,
            column: 22
          },
          end: {
            line: 144,
            column: 7
          }
        },
        line: 136
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 145,
            column: 13
          },
          end: {
            line: 145,
            column: 14
          }
        },
        loc: {
          start: {
            line: 145,
            column: 22
          },
          end: {
            line: 148,
            column: 7
          }
        },
        line: 145
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 157,
            column: 22
          },
          end: {
            line: 157,
            column: 23
          }
        },
        loc: {
          start: {
            line: 157,
            column: 42
          },
          end: {
            line: 188,
            column: 1
          }
        },
        line: 157
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 170,
            column: 12
          },
          end: {
            line: 170,
            column: 13
          }
        },
        loc: {
          start: {
            line: 170,
            column: 22
          },
          end: {
            line: 175,
            column: 7
          }
        },
        line: 170
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 176,
            column: 13
          },
          end: {
            line: 176,
            column: 14
          }
        },
        loc: {
          start: {
            line: 176,
            column: 22
          },
          end: {
            line: 181,
            column: 7
          }
        },
        line: 176
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 190,
            column: 22
          },
          end: {
            line: 190,
            column: 23
          }
        },
        loc: {
          start: {
            line: 190,
            column: 42
          },
          end: {
            line: 223,
            column: 1
          }
        },
        line: 190
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 200,
            column: 12
          },
          end: {
            line: 200,
            column: 13
          }
        },
        loc: {
          start: {
            line: 200,
            column: 22
          },
          end: {
            line: 211,
            column: 7
          }
        },
        line: 200
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 212,
            column: 13
          },
          end: {
            line: 212,
            column: 14
          }
        },
        loc: {
          start: {
            line: 212,
            column: 22
          },
          end: {
            line: 217,
            column: 7
          }
        },
        line: 212
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 225,
            column: 25
          },
          end: {
            line: 225,
            column: 26
          }
        },
        loc: {
          start: {
            line: 225,
            column: 45
          },
          end: {
            line: 252,
            column: 1
          }
        },
        line: 225
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 235,
            column: 12
          },
          end: {
            line: 235,
            column: 13
          }
        },
        loc: {
          start: {
            line: 235,
            column: 22
          },
          end: {
            line: 240,
            column: 7
          }
        },
        line: 235
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 241,
            column: 13
          },
          end: {
            line: 241,
            column: 14
          }
        },
        loc: {
          start: {
            line: 241,
            column: 22
          },
          end: {
            line: 246,
            column: 7
          }
        },
        line: 241
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 254,
            column: 22
          },
          end: {
            line: 254,
            column: 23
          }
        },
        loc: {
          start: {
            line: 254,
            column: 42
          },
          end: {
            line: 287,
            column: 1
          }
        },
        line: 254
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 260,
            column: 12
          },
          end: {
            line: 260,
            column: 13
          }
        },
        loc: {
          start: {
            line: 260,
            column: 22
          },
          end: {
            line: 275,
            column: 7
          }
        },
        line: 260
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 276,
            column: 13
          },
          end: {
            line: 276,
            column: 14
          }
        },
        loc: {
          start: {
            line: 276,
            column: 22
          },
          end: {
            line: 281,
            column: 7
          }
        },
        line: 276
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 29,
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
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        }, {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 89,
            column: 5
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 30
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 20
          }
        }, {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 30
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 87,
            column: 11
          }
        }, {
          start: {
            line: 47,
            column: 17
          },
          end: {
            line: 87,
            column: 11
          }
        }],
        line: 43
      },
      "4": {
        loc: {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 106,
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
        line: 104
      },
      "5": {
        loc: {
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 104,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 104,
            column: 32
          }
        }, {
          start: {
            line: 104,
            column: 36
          },
          end: {
            line: 104,
            column: 49
          }
        }],
        line: 104
      },
      "6": {
        loc: {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 112,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 112,
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
        line: 110
      },
      "7": {
        loc: {
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 110,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 110,
            column: 32
          }
        }, {
          start: {
            line: 110,
            column: 36
          },
          end: {
            line: 110,
            column: 49
          }
        }, {
          start: {
            line: 110,
            column: 53
          },
          end: {
            line: 110,
            column: 63
          }
        }],
        line: 110
      },
      "8": {
        loc: {
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 210,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 210,
            column: 9
          }
        }, {
          start: {
            line: 205,
            column: 15
          },
          end: {
            line: 210,
            column: 9
          }
        }],
        line: 201
      },
      "9": {
        loc: {
          start: {
            line: 261,
            column: 8
          },
          end: {
            line: 274,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 261,
            column: 8
          },
          end: {
            line: 274,
            column: 9
          }
        }, {
          start: {
            line: 265,
            column: 15
          },
          end: {
            line: 274,
            column: 9
          }
        }],
        line: 261
      },
      "10": {
        loc: {
          start: {
            line: 265,
            column: 15
          },
          end: {
            line: 274,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 265,
            column: 15
          },
          end: {
            line: 274,
            column: 9
          }
        }, {
          start: {
            line: 269,
            column: 15
          },
          end: {
            line: 274,
            column: 9
          }
        }],
        line: 265
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
      "70": 0
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
      "19": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6e681da027328eaa1dfeb3cffc668538f6f209c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fgqxv5gip = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fgqxv5gip();
var productModel = (cov_1fgqxv5gip().s[0]++, _models["default"].Product);
var companyModel = (cov_1fgqxv5gip().s[1]++, _models["default"].Company);
cov_1fgqxv5gip().s[2]++;
var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _ref2, productName, price, companyId, existCompany;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_1fgqxv5gip().f[0]++;
          cov_1fgqxv5gip().s[3]++;
          _context.prev = 2;
          _ref2 = (cov_1fgqxv5gip().s[4]++, req.data), productName = _ref2.productName, price = _ref2.price, companyId = _ref2.companyId;
          cov_1fgqxv5gip().s[5]++;
          _context.next = 7;
          return companyModel.findOne({
            where: {
              companyId: companyId
            }
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[1]++;
            cov_1fgqxv5gip().s[6]++;
            console.log(err, "**");
            cov_1fgqxv5gip().s[7]++;
            return res.send({
              error: "".concat(err)
            });
          });
        case 7:
          existCompany = _context.sent;
          cov_1fgqxv5gip().s[8]++;
          console.log(existCompany, "&&");
          cov_1fgqxv5gip().s[9]++;
          if (existCompany) {
            _context.next = 19;
            break;
          }
          cov_1fgqxv5gip().b[0][0]++;
          cov_1fgqxv5gip().s[10]++;
          console.log("You can't do this!");
          cov_1fgqxv5gip().s[11]++;
          return _context.abrupt("return", res.status(400).send({
            error: "This company you are trying to use is note registered!"
          }));
        case 19:
          cov_1fgqxv5gip().b[0][1]++;
        case 20:
          cov_1fgqxv5gip().s[12]++;
          if (!((cov_1fgqxv5gip().b[2][0]++, !productName) && (cov_1fgqxv5gip().b[2][1]++, !price))) {
            _context.next = 27;
            break;
          }
          cov_1fgqxv5gip().b[1][0]++;
          cov_1fgqxv5gip().s[13]++;
          return _context.abrupt("return", res.status(400).send({
            error: "Please make sure you include the product name and price!"
          }));
        case 27:
          cov_1fgqxv5gip().b[1][1]++;
          cov_1fgqxv5gip().s[14]++;
          productModel.findOne({
            where: {
              productName: productName
            }
          }).then(function (exist) {
            cov_1fgqxv5gip().f[2]++;
            cov_1fgqxv5gip().s[15]++;
            if (exist) {
              cov_1fgqxv5gip().b[3][0]++;
              cov_1fgqxv5gip().s[16]++;
              return res.status(409).send({
                error: "this product already exists"
              });
            } else {
              cov_1fgqxv5gip().b[3][1]++;
              cov_1fgqxv5gip().s[17]++;
              return productModel.create({
                productName: req.data.productName,
                companyId: req.data.companyId,
                price: req.data.price,
                full_price: req.data.full_price,
                description: req.data.description,
                size: req.data.size,
                images: req.data.images,
                imagesId: req.data.imagesId,
                brand: req.data.brand,
                ISBN: req.data.ISBN,
                releaseDate: req.data.releaseDate,
                where: {
                  productName: req.data.productName,
                  companyId: req.data.companyId,
                  price: req.data.price,
                  full_price: req.data.full_price,
                  description: req.data.description,
                  images: req.data.images,
                  imagesId: req.data.imagesId,
                  size: req.data.size,
                  brand: req.data.brand,
                  ISBN: req.data.ISBN,
                  releaseDate: req.data.releaseDate
                }
              }).then(function (data) {
                cov_1fgqxv5gip().f[3]++;
                cov_1fgqxv5gip().s[18]++;
                return res.status(201).send({
                  message: "Success!",
                  data: data
                });
              })["catch"](function (err) {
                cov_1fgqxv5gip().f[4]++;
                cov_1fgqxv5gip().s[19]++;
                return res.status(400).send({
                  error: "".concat(err.message),
                  err: err
                });
              });
            }
          });
        case 30:
          _context.next = 36;
          break;
        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](2);
          cov_1fgqxv5gip().s[20]++;
          return _context.abrupt("return", res.status(500).send({
            error: "".concat(_context.t0.message)
          }));
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 32]]);
  }));
  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
cov_1fgqxv5gip().s[21]++;
var getProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pageAsNbr, sizeASNbr, page, size;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_1fgqxv5gip().f[5]++;
          cov_1fgqxv5gip().s[22]++;
          _context2.prev = 2;
          pageAsNbr = (cov_1fgqxv5gip().s[23]++, Number.parseInt(req.query.page));
          sizeASNbr = (cov_1fgqxv5gip().s[24]++, Number.parseInt(req.query.size));
          page = (cov_1fgqxv5gip().s[25]++, 0);
          cov_1fgqxv5gip().s[26]++;
          if ((cov_1fgqxv5gip().b[5][0]++, !Number.isNaN(pageAsNbr)) && (cov_1fgqxv5gip().b[5][1]++, pageAsNbr > 0)) {
            cov_1fgqxv5gip().b[4][0]++;
            cov_1fgqxv5gip().s[27]++;
            page = pageAsNbr;
          } else {
            cov_1fgqxv5gip().b[4][1]++;
          }
          size = (cov_1fgqxv5gip().s[28]++, 100);
          cov_1fgqxv5gip().s[29]++;
          if ((cov_1fgqxv5gip().b[7][0]++, !Number.isNaN(sizeASNbr)) && (cov_1fgqxv5gip().b[7][1]++, sizeASNbr > 0) && (cov_1fgqxv5gip().b[7][2]++, size < 100)) {
            cov_1fgqxv5gip().b[6][0]++;
            cov_1fgqxv5gip().s[30]++;
            size = sizeASNbr;
          } else {
            cov_1fgqxv5gip().b[6][1]++;
          }
          cov_1fgqxv5gip().s[31]++;
          _context2.next = 14;
          return productModel.findAndCountAll({
            limit: size,
            offset: page * size,
            include: [{
              model: _models["default"].ProductImage,
              as: "ProductImages"
            }, {
              model: _models["default"].Class,
              as: "Classes",
              include: [{
                model: _models["default"].Category,
                as: "Categories"
              }]
            }, {
              model: _models["default"].Company,
              as: "Company"
            }]
          }).then(function (data) {
            cov_1fgqxv5gip().f[6]++;
            cov_1fgqxv5gip().s[32]++;
            return res.status(200).send({
              message: "List of all products available!",
              body: data.rows,
              totalPages: Math.ceil(data.count / size),
              currentPage: page + 1,
              count: data.count
            });
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[7]++;
            cov_1fgqxv5gip().s[33]++;
            console.log(err);
            cov_1fgqxv5gip().s[34]++;
            return res.status(400).send(err);
          });
        case 14:
          _context2.next = 22;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          cov_1fgqxv5gip().s[35]++;
          console.log(_context2.t0);
          cov_1fgqxv5gip().s[36]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 16]]);
  }));
  return function getProduct(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProduct = getProduct;
cov_1fgqxv5gip().s[37]++;
var getOneProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_1fgqxv5gip().f[8]++;
          cov_1fgqxv5gip().s[38]++;
          _context3.prev = 2;
          id = (cov_1fgqxv5gip().s[39]++, req.params.id);
          cov_1fgqxv5gip().s[40]++;
          _context3.next = 7;
          return productModel.findOne({
            include: [{
              model: _models["default"].ProductImage,
              as: "ProductImages"
            }],
            where: {
              productId: id
            }
          }).then(function (data) {
            cov_1fgqxv5gip().f[9]++;
            cov_1fgqxv5gip().s[41]++;
            return res.status(200).send({
              message: "Fetched",
              body: {
                data: data
              }
            });
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[10]++;
            cov_1fgqxv5gip().s[42]++;
            return res.status(403).send({
              message: "ERROR",
              err: err
            });
          });
        case 7:
          _context3.next = 15;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          cov_1fgqxv5gip().s[43]++;
          console.log(_context3.t0);
          cov_1fgqxv5gip().s[44]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return function getOneProduct(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getOneProduct = getOneProduct;
cov_1fgqxv5gip().s[45]++;
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_1fgqxv5gip().f[11]++;
          cov_1fgqxv5gip().s[46]++;
          _context4.prev = 2;
          id = (cov_1fgqxv5gip().s[47]++, req.params.id);
          cov_1fgqxv5gip().s[48]++;
          _context4.next = 7;
          return productModel.update(req.data, {
            where: {
              productId: id
            }
          }).then(function (data) {
            cov_1fgqxv5gip().f[12]++;
            cov_1fgqxv5gip().s[49]++;
            if (data == 1) {
              cov_1fgqxv5gip().b[8][0]++;
              cov_1fgqxv5gip().s[50]++;
              return res.status(200).send({
                message: "Updated product successfully!"
              });
            } else {
              cov_1fgqxv5gip().b[8][1]++;
              cov_1fgqxv5gip().s[51]++;
              return res.status(400).send({
                message: "Cannot update product ".concat(id, "!"),
                data: data
              });
            }
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[13]++;
            cov_1fgqxv5gip().s[52]++;
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
          cov_1fgqxv5gip().s[53]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function updateProduct(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProduct = updateProduct;
cov_1fgqxv5gip().s[54]++;
var deleteOneProduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_1fgqxv5gip().f[14]++;
          cov_1fgqxv5gip().s[55]++;
          _context5.prev = 2;
          id = (cov_1fgqxv5gip().s[56]++, req.params.id);
          cov_1fgqxv5gip().s[57]++;
          _context5.next = 7;
          return productModel.destroy({
            where: {
              productId: id
            }
          }).then(function (data) {
            cov_1fgqxv5gip().f[15]++;
            cov_1fgqxv5gip().s[58]++;
            return res.status(200).send({
              message: "Deleted product successfully!",
              body: {
                data: data
              }
            });
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[16]++;
            cov_1fgqxv5gip().s[59]++;
            return res.status(400).send({
              message: "error!",
              err: err
            });
          });
        case 7:
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          cov_1fgqxv5gip().s[60]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return function deleteOneProduct(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteOneProduct = deleteOneProduct;
cov_1fgqxv5gip().s[61]++;
var deleteProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_1fgqxv5gip().f[17]++;
          cov_1fgqxv5gip().s[62]++;
          _context6.prev = 2;
          cov_1fgqxv5gip().s[63]++;
          _context6.next = 6;
          return productModel.destroy({
            where: {}
          }).then(function (data) {
            cov_1fgqxv5gip().f[18]++;
            cov_1fgqxv5gip().s[64]++;
            if (data === 1) {
              cov_1fgqxv5gip().b[9][0]++;
              cov_1fgqxv5gip().s[65]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " product successfully!")
              });
            } else {
              cov_1fgqxv5gip().b[9][1]++;
              cov_1fgqxv5gip().s[66]++;
              if (data === 0) {
                cov_1fgqxv5gip().b[10][0]++;
                cov_1fgqxv5gip().s[67]++;
                return res.status(403).send({
                  message: "You don't have any more products to delete!"
                });
              } else {
                cov_1fgqxv5gip().b[10][1]++;
                cov_1fgqxv5gip().s[68]++;
                return res.status(200).send({
                  message: "Deleted ".concat(data, " products successfully!"),
                  data: data
                });
              }
            }
          })["catch"](function (err) {
            cov_1fgqxv5gip().f[19]++;
            cov_1fgqxv5gip().s[69]++;
            return res.status(400).send({
              message: "You got an error@!",
              err: err
            });
          });
        case 6:
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](2);
          cov_1fgqxv5gip().s[70]++;
          return _context6.abrupt("return", res.status(500).send({
            message: "".concat(_context6.t0)
          }));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 8]]);
  }));
  return function deleteProduct(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteProduct = deleteProduct;