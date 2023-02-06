"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileAuth = exports.updateAuth = exports.reviewAuth = exports.deleteAuth = exports.authent = exports.Auth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userHelper = require("../helpers/userHelper");
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
function cov_2j8mnoinuk() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\userMiddleware.js";
  var hash = "bf3f6cb41be2f725a03947863f5282c2ff36754b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\middlewares\\userMiddleware.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 28
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "3": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "5": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 13,
          column: 67
        }
      },
      "6": {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "7": {
        start: {
          line: 18,
          column: 22
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "8": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "9": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "10": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 25
        }
      },
      "11": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 11
        }
      },
      "12": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "13": {
        start: {
          line: 43,
          column: 26
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "14": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 73,
          column: 3
        }
      },
      "15": {
        start: {
          line: 45,
          column: 15
        },
        end: {
          line: 45,
          column: 25
        }
      },
      "16": {
        start: {
          line: 46,
          column: 18
        },
        end: {
          line: 46,
          column: 33
        }
      },
      "17": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "18": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 74
        }
      },
      "19": {
        start: {
          line: 52,
          column: 19
        },
        end: {
          line: 52,
          column: 37
        }
      },
      "20": {
        start: {
          line: 54,
          column: 20
        },
        end: {
          line: 54,
          column: 63
        }
      },
      "21": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "22": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 65,
          column: 70
        }
      },
      "23": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 11
        }
      },
      "24": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 72,
          column: 7
        }
      },
      "25": {
        start: {
          line: 76,
          column: 33
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "26": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 116,
          column: 3
        }
      },
      "27": {
        start: {
          line: 78,
          column: 15
        },
        end: {
          line: 78,
          column: 28
        }
      },
      "28": {
        start: {
          line: 79,
          column: 20
        },
        end: {
          line: 79,
          column: 38
        }
      },
      "29": {
        start: {
          line: 80,
          column: 18
        },
        end: {
          line: 80,
          column: 33
        }
      },
      "30": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "31": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 74
        }
      },
      "32": {
        start: {
          line: 86,
          column: 19
        },
        end: {
          line: 86,
          column: 37
        }
      },
      "33": {
        start: {
          line: 88,
          column: 20
        },
        end: {
          line: 88,
          column: 63
        }
      },
      "34": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 93,
          column: 6
        }
      },
      "35": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 98,
          column: 6
        }
      },
      "36": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "37": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 108,
          column: 70
        }
      },
      "38": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 11
        }
      },
      "39": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 115,
          column: 7
        }
      },
      "40": {
        start: {
          line: 119,
          column: 26
        },
        end: {
          line: 144,
          column: 1
        }
      },
      "41": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 143,
          column: 3
        }
      },
      "42": {
        start: {
          line: 121,
          column: 15
        },
        end: {
          line: 121,
          column: 25
        }
      },
      "43": {
        start: {
          line: 122,
          column: 18
        },
        end: {
          line: 122,
          column: 33
        }
      },
      "44": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 126,
          column: 5
        }
      },
      "45": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 74
        }
      },
      "46": {
        start: {
          line: 128,
          column: 19
        },
        end: {
          line: 128,
          column: 37
        }
      },
      "47": {
        start: {
          line: 130,
          column: 20
        },
        end: {
          line: 130,
          column: 63
        }
      },
      "48": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "49": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 135,
          column: 9
        }
      },
      "50": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 11
        }
      },
      "51": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 142,
          column: 7
        }
      },
      "52": {
        start: {
          line: 146,
          column: 23
        },
        end: {
          line: 168,
          column: 1
        }
      },
      "53": {
        start: {
          line: 147,
          column: 2
        },
        end: {
          line: 167,
          column: 3
        }
      },
      "54": {
        start: {
          line: 148,
          column: 18
        },
        end: {
          line: 148,
          column: 33
        }
      },
      "55": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "56": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 74
        }
      },
      "57": {
        start: {
          line: 153,
          column: 19
        },
        end: {
          line: 153,
          column: 37
        }
      },
      "58": {
        start: {
          line: 155,
          column: 22
        },
        end: {
          line: 155,
          column: 65
        }
      },
      "59": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 161,
          column: 5
        }
      },
      "60": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 160,
          column: 9
        }
      },
      "61": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 11
        }
      },
      "62": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 166,
          column: 7
        }
      },
      "63": {
        start: {
          line: 170,
          column: 26
        },
        end: {
          line: 203,
          column: 1
        }
      },
      "64": {
        start: {
          line: 171,
          column: 2
        },
        end: {
          line: 202,
          column: 3
        }
      },
      "65": {
        start: {
          line: 172,
          column: 18
        },
        end: {
          line: 172,
          column: 33
        }
      },
      "66": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 176,
          column: 5
        }
      },
      "67": {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 175,
          column: 75
        }
      },
      "68": {
        start: {
          line: 178,
          column: 19
        },
        end: {
          line: 178,
          column: 37
        }
      },
      "69": {
        start: {
          line: 179,
          column: 20
        },
        end: {
          line: 187,
          column: 6
        }
      },
      "70": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 193,
          column: 5
        }
      },
      "71": {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 192,
          column: 9
        }
      },
      "72": {
        start: {
          line: 195,
          column: 4
        },
        end: {
          line: 195,
          column: 23
        }
      },
      "73": {
        start: {
          line: 197,
          column: 4
        },
        end: {
          line: 197,
          column: 11
        }
      },
      "74": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 201,
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
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 46
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 43,
            column: 26
          },
          end: {
            line: 43,
            column: 27
          }
        },
        loc: {
          start: {
            line: 43,
            column: 52
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 43
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 76,
            column: 33
          },
          end: {
            line: 76,
            column: 34
          }
        },
        loc: {
          start: {
            line: 76,
            column: 59
          },
          end: {
            line: 117,
            column: 1
          }
        },
        line: 76
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 119,
            column: 26
          },
          end: {
            line: 119,
            column: 27
          }
        },
        loc: {
          start: {
            line: 119,
            column: 52
          },
          end: {
            line: 144,
            column: 1
          }
        },
        line: 119
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 146,
            column: 23
          },
          end: {
            line: 146,
            column: 24
          }
        },
        loc: {
          start: {
            line: 146,
            column: 49
          },
          end: {
            line: 168,
            column: 1
          }
        },
        line: 146
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 170,
            column: 26
          },
          end: {
            line: 170,
            column: 27
          }
        },
        loc: {
          start: {
            line: 170,
            column: 52
          },
          end: {
            line: 203,
            column: 1
          }
        },
        line: 170
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
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
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 32,
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
            line: 32,
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
      "2": {
        loc: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
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
        line: 48
      },
      "3": {
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 66,
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
        line: 57
      },
      "4": {
        loc: {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 61,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 58,
            column: 30
          }
        }, {
          start: {
            line: 59,
            column: 6
          },
          end: {
            line: 59,
            column: 26
          }
        }, {
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 60,
            column: 26
          }
        }, {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 61,
            column: 26
          }
        }],
        line: 58
      },
      "5": {
        loc: {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 84,
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
        line: 82
      },
      "6": {
        loc: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 109,
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
        line: 100
      },
      "7": {
        loc: {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 104,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 32
          }
        }, {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 26
          }
        }, {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 103,
            column: 26
          }
        }, {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 26
          }
        }],
        line: 101
      },
      "8": {
        loc: {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 126,
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
        line: 124
      },
      "9": {
        loc: {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 136,
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
        line: 132
      },
      "10": {
        loc: {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 132,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 132,
            column: 32
          }
        }, {
          start: {
            line: 132,
            column: 36
          },
          end: {
            line: 132,
            column: 56
          }
        }],
        line: 132
      },
      "11": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
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
        line: 150
      },
      "12": {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 161,
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
        line: 157
      },
      "13": {
        loc: {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 176,
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
        line: 174
      },
      "14": {
        loc: {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 193,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 193,
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
        line: 189
      },
      "15": {
        loc: {
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 189,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 189,
            column: 28
          }
        }, {
          start: {
            line: 189,
            column: 32
          },
          end: {
            line: 189,
            column: 52
          }
        }],
        line: 189
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
      "72": 0,
      "73": 0,
      "74": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bf3f6cb41be2f725a03947863f5282c2ff36754b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2j8mnoinuk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2j8mnoinuk();
var userModel = (cov_2j8mnoinuk().s[0]++, _models["default"].User);
cov_2j8mnoinuk().s[1]++;
var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, legalUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cov_2j8mnoinuk().f[0]++;
          cov_2j8mnoinuk().s[2]++;
          _context.prev = 2;
          token = (cov_2j8mnoinuk().s[3]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[4]++;
          if (token) {
            _context.next = 11;
            break;
          }
          cov_2j8mnoinuk().b[0][0]++;
          cov_2j8mnoinuk().s[5]++;
          return _context.abrupt("return", res.status(401).send({
            message: "Unauthorized to perform this action."
          }));
        case 11:
          cov_2j8mnoinuk().b[0][1]++;
        case 12:
          decode = (cov_2j8mnoinuk().s[6]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[7]++;
          _context.next = 16;
          return userModel.findByPk(decode.userId, {
            include: [{
              model: _models["default"].Role,
              as: "Roles",
              attributes: ["role", "roleId"]
            }]
          });
        case 16:
          legalUser = _context.sent;
          cov_2j8mnoinuk().s[8]++;
          if (!(legalUser.roleId != 1)) {
            _context.next = 24;
            break;
          }
          cov_2j8mnoinuk().b[1][0]++;
          cov_2j8mnoinuk().s[9]++;
          return _context.abrupt("return", res.status(401).send({
            message: "This action can only be performed by the admin!!!"
          }));
        case 24:
          cov_2j8mnoinuk().b[1][1]++;
        case 25:
          cov_2j8mnoinuk().s[10]++;
          req.user = legalUser;
          cov_2j8mnoinuk().s[11]++;
          next();
          _context.next = 35;
          break;
        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](2);
          cov_2j8mnoinuk().s[12]++;
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 31]]);
  }));
  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.Auth = Auth;
cov_2j8mnoinuk().s[13]++;
var updateAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, token, decode, newUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_2j8mnoinuk().f[1]++;
          cov_2j8mnoinuk().s[14]++;
          _context2.prev = 2;
          id = (cov_2j8mnoinuk().s[15]++, req.params);
          token = (cov_2j8mnoinuk().s[16]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[17]++;
          if (token) {
            _context2.next = 12;
            break;
          }
          cov_2j8mnoinuk().b[2][0]++;
          cov_2j8mnoinuk().s[18]++;
          return _context2.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 12:
          cov_2j8mnoinuk().b[2][1]++;
        case 13:
          decode = (cov_2j8mnoinuk().s[19]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[20]++;
          _context2.next = 17;
          return userModel.findByPk(decode.userId, {});
        case 17:
          newUser = _context2.sent;
          cov_2j8mnoinuk().s[21]++;
          if (!((cov_2j8mnoinuk().b[4][0]++, id.id !== newUser.userId) && (cov_2j8mnoinuk().b[4][1]++, newUser.roleId !== 1) && (cov_2j8mnoinuk().b[4][2]++, newUser.roleId !== 2) && (cov_2j8mnoinuk().b[4][3]++, newUser.roleId !== 3))) {
            _context2.next = 25;
            break;
          }
          cov_2j8mnoinuk().b[3][0]++;
          cov_2j8mnoinuk().s[22]++;
          return _context2.abrupt("return", res.status(401).send({
            message: "You can not update someone else's data."
          }));
        case 25:
          cov_2j8mnoinuk().b[3][1]++;
        case 26:
          cov_2j8mnoinuk().s[23]++;
          next();
          _context2.next = 34;
          break;
        case 30:
          _context2.prev = 30;
          _context2.t0 = _context2["catch"](2);
          cov_2j8mnoinuk().s[24]++;
          return _context2.abrupt("return", res.status(500).send({
            message: "".concat(_context2.t0)
          }));
        case 34:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 30]]);
  }));
  return function updateAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateAuth = updateAuth;
cov_2j8mnoinuk().s[25]++;
var updateProfileAuth = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, user_id, token, decode, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cov_2j8mnoinuk().f[2]++;
          cov_2j8mnoinuk().s[26]++;
          _context3.prev = 2;
          id = (cov_2j8mnoinuk().s[27]++, req.params.id);
          user_id = (cov_2j8mnoinuk().s[28]++, req.params.user_id);
          token = (cov_2j8mnoinuk().s[29]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[30]++;
          if (token) {
            _context3.next = 13;
            break;
          }
          cov_2j8mnoinuk().b[5][0]++;
          cov_2j8mnoinuk().s[31]++;
          return _context3.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 13:
          cov_2j8mnoinuk().b[5][1]++;
        case 14:
          decode = (cov_2j8mnoinuk().s[32]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[33]++;
          _context3.next = 18;
          return userModel.findByPk(decode.userId, {});
        case 18:
          newUser = _context3.sent;
          cov_2j8mnoinuk().s[34]++;
          console.log("```````````ID <||> TOKEN``````````",
          // user_id.id == newUser.userId,
          user_id);
          cov_2j8mnoinuk().s[35]++;
          console.log("```````````ID <||> TOKEN``````````",
          // user_id.id == newUser.userId,
          newUser.userId == user_id);
          cov_2j8mnoinuk().s[36]++;
          if (!((cov_2j8mnoinuk().b[7][0]++, user_id !== newUser.userId) && (cov_2j8mnoinuk().b[7][1]++, newUser.roleId !== 1) && (cov_2j8mnoinuk().b[7][2]++, newUser.roleId !== 2) && (cov_2j8mnoinuk().b[7][3]++, newUser.roleId !== 3))) {
            _context3.next = 30;
            break;
          }
          cov_2j8mnoinuk().b[6][0]++;
          cov_2j8mnoinuk().s[37]++;
          return _context3.abrupt("return", res.status(401).send({
            message: "You can not update someone else's data."
          }));
        case 30:
          cov_2j8mnoinuk().b[6][1]++;
        case 31:
          cov_2j8mnoinuk().s[38]++;
          next();
          _context3.next = 39;
          break;
        case 35:
          _context3.prev = 35;
          _context3.t0 = _context3["catch"](2);
          cov_2j8mnoinuk().s[39]++;
          return _context3.abrupt("return", res.status(500).send({
            message: "".concat(_context3.t0)
          }));
        case 39:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 35]]);
  }));
  return function updateProfileAuth(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateProfileAuth = updateProfileAuth;
cov_2j8mnoinuk().s[40]++;
var deleteAuth = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, token, decode, newUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_2j8mnoinuk().f[3]++;
          cov_2j8mnoinuk().s[41]++;
          _context4.prev = 2;
          id = (cov_2j8mnoinuk().s[42]++, req.params);
          token = (cov_2j8mnoinuk().s[43]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[44]++;
          if (token) {
            _context4.next = 12;
            break;
          }
          cov_2j8mnoinuk().b[8][0]++;
          cov_2j8mnoinuk().s[45]++;
          return _context4.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 12:
          cov_2j8mnoinuk().b[8][1]++;
        case 13:
          decode = (cov_2j8mnoinuk().s[46]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[47]++;
          _context4.next = 17;
          return userModel.findByPk(decode.userId, {});
        case 17:
          newUser = _context4.sent;
          cov_2j8mnoinuk().s[48]++;
          if (!((cov_2j8mnoinuk().b[10][0]++, id.id !== newUser.userId) && (cov_2j8mnoinuk().b[10][1]++, newUser.roleId !== 1))) {
            _context4.next = 25;
            break;
          }
          cov_2j8mnoinuk().b[9][0]++;
          cov_2j8mnoinuk().s[49]++;
          return _context4.abrupt("return", res.status(401).send({
            message: "You can not delete someone else's account."
          }));
        case 25:
          cov_2j8mnoinuk().b[9][1]++;
        case 26:
          cov_2j8mnoinuk().s[50]++;
          next();
          _context4.next = 34;
          break;
        case 30:
          _context4.prev = 30;
          _context4.t0 = _context4["catch"](2);
          cov_2j8mnoinuk().s[51]++;
          return _context4.abrupt("return", res.status(500).send({
            message: "".concat(_context4.t0)
          }));
        case 34:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 30]]);
  }));
  return function deleteAuth(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteAuth = deleteAuth;
cov_2j8mnoinuk().s[52]++;
var authent = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var token, decode, exixtUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_2j8mnoinuk().f[4]++;
          cov_2j8mnoinuk().s[53]++;
          _context5.prev = 2;
          token = (cov_2j8mnoinuk().s[54]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[55]++;
          if (token) {
            _context5.next = 11;
            break;
          }
          cov_2j8mnoinuk().b[11][0]++;
          cov_2j8mnoinuk().s[56]++;
          return _context5.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 11:
          cov_2j8mnoinuk().b[11][1]++;
        case 12:
          decode = (cov_2j8mnoinuk().s[57]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[58]++;
          _context5.next = 16;
          return userModel.findByPk(decode.userId, {});
        case 16:
          exixtUser = _context5.sent;
          cov_2j8mnoinuk().s[59]++;
          if (exixtUser) {
            _context5.next = 24;
            break;
          }
          cov_2j8mnoinuk().b[12][0]++;
          cov_2j8mnoinuk().s[60]++;
          return _context5.abrupt("return", res.status(401).send({
            message: "This user does not exist."
          }));
        case 24:
          cov_2j8mnoinuk().b[12][1]++;
        case 25:
          cov_2j8mnoinuk().s[61]++;
          next();
          _context5.next = 33;
          break;
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](2);
          cov_2j8mnoinuk().s[62]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "".concat(_context5.t0)
          }));
        case 33:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 29]]);
  }));
  return function authent(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.authent = authent;
cov_2j8mnoinuk().s[63]++;
var reviewAuth = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_2j8mnoinuk().f[5]++;
          cov_2j8mnoinuk().s[64]++;
          _context6.prev = 2;
          token = (cov_2j8mnoinuk().s[65]++, (0, _checkToken["default"])(req));
          cov_2j8mnoinuk().s[66]++;
          if (token) {
            _context6.next = 11;
            break;
          }
          cov_2j8mnoinuk().b[13][0]++;
          cov_2j8mnoinuk().s[67]++;
          return _context6.abrupt("return", res.status(401).send({
            message: "You are not logged in!!!"
          }));
        case 11:
          cov_2j8mnoinuk().b[13][1]++;
        case 12:
          decode = (cov_2j8mnoinuk().s[68]++, (0, _userHelper.decodeToken)(token));
          cov_2j8mnoinuk().s[69]++;
          _context6.next = 16;
          return userModel.findByPk(decode.userId, {
            include: [{
              model: _models["default"].Role,
              as: "Roles",
              attributes: ["role"]
            }]
          });
        case 16:
          newUser = _context6.sent;
          cov_2j8mnoinuk().s[70]++;
          if (!((cov_2j8mnoinuk().b[15][0]++, newUser.roleId !== 1) && (cov_2j8mnoinuk().b[15][1]++, newUser.roleId !== 2))) {
            _context6.next = 24;
            break;
          }
          cov_2j8mnoinuk().b[14][0]++;
          cov_2j8mnoinuk().s[71]++;
          return _context6.abrupt("return", res.status(401).send({
            message: "This action can only be performed by the admin or manager !!"
          }));
        case 24:
          cov_2j8mnoinuk().b[14][1]++;
        case 25:
          cov_2j8mnoinuk().s[72]++;
          req.user = newUser;
          cov_2j8mnoinuk().s[73]++;
          next();
          _context6.next = 35;
          break;
        case 31:
          _context6.prev = 31;
          _context6.t0 = _context6["catch"](2);
          cov_2j8mnoinuk().s[74]++;
          return _context6.abrupt("return", res.status(500).send({
            message: "".concat(_context6.t0)
          }));
        case 35:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 31]]);
  }));
  return function reviewAuth(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
exports.reviewAuth = reviewAuth;