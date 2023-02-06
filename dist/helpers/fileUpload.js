"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadCompanyLogo = exports.uploadClassImage = exports.updateImageArrayUpload = exports.imageUpload = exports.imageArrayUpload = exports.fileUpload = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
var _models = _interopRequireDefault(require("../database/models"));
function cov_2iguehy1ao() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\fileUpload.js";
  var hash = "d73aa1ac9edbd26ddd0a6fdf4c7ae00a72f6af4a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\helpers\\fileUpload.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 34
        }
      },
      "1": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 16,
          column: 7
        }
      },
      "5": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "6": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "7": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 27
        }
      },
      "8": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "9": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 18
        }
      },
      "10": {
        start: {
          line: 24,
          column: 27
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "11": {
        start: {
          line: 25,
          column: 17
        },
        end: {
          line: 25,
          column: 19
        }
      },
      "12": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      },
      "13": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "14": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 37
        }
      },
      "15": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 29
        }
      },
      "16": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 27
        }
      },
      "17": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 18
        }
      },
      "18": {
        start: {
          line: 40,
          column: 32
        },
        end: {
          line: 73,
          column: 1
        }
      },
      "19": {
        start: {
          line: 41,
          column: 15
        },
        end: {
          line: 41,
          column: 17
        }
      },
      "20": {
        start: {
          line: 42,
          column: 18
        },
        end: {
          line: 42,
          column: 20
        }
      },
      "21": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "22": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 26
        }
      },
      "23": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 75
        }
      },
      "24": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 70,
          column: 3
        }
      },
      "25": {
        start: {
          line: 49,
          column: 17
        },
        end: {
          line: 54,
          column: 8
        }
      },
      "26": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 25
        }
      },
      "27": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 29
        }
      },
      "28": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 78
        }
      },
      "29": {
        start: {
          line: 55,
          column: 15
        },
        end: {
          line: 55,
          column: 78
        }
      },
      "30": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 24
        }
      },
      "31": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 33
        }
      },
      "32": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 27
        }
      },
      "33": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 32
        }
      },
      "34": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 67,
          column: 5
        }
      },
      "35": {
        start: {
          line: 62,
          column: 17
        },
        end: {
          line: 62,
          column: 18
        }
      },
      "36": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 71
        }
      },
      "37": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 80
        }
      },
      "38": {
        start: {
          line: 64,
          column: 17
        },
        end: {
          line: 64,
          column: 80
        }
      },
      "39": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 26
        }
      },
      "40": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 35
        }
      },
      "41": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 27
        }
      },
      "42": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 32
        }
      },
      "43": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 71,
          column: 22
        }
      },
      "44": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 72,
          column: 9
        }
      },
      "45": {
        start: {
          line: 75,
          column: 38
        },
        end: {
          line: 127,
          column: 1
        }
      },
      "46": {
        start: {
          line: 76,
          column: 17
        },
        end: {
          line: 76,
          column: 27
        }
      },
      "47": {
        start: {
          line: 77,
          column: 26
        },
        end: {
          line: 79,
          column: 4
        }
      },
      "48": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 80,
          column: 40
        }
      },
      "49": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 124,
          column: 3
        }
      },
      "50": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 30
        }
      },
      "51": {
        start: {
          line: 83,
          column: 17
        },
        end: {
          line: 83,
          column: 50
        }
      },
      "52": {
        start: {
          line: 84,
          column: 20
        },
        end: {
          line: 84,
          column: 55
        }
      },
      "53": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 27
        }
      },
      "54": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 32
        }
      },
      "55": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 24
        }
      },
      "56": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 11
        }
      },
      "57": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 31
        }
      },
      "58": {
        start: {
          line: 91,
          column: 17
        },
        end: {
          line: 91,
          column: 19
        }
      },
      "59": {
        start: {
          line: 92,
          column: 20
        },
        end: {
          line: 92,
          column: 22
        }
      },
      "60": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 96,
          column: 5
        }
      },
      "61": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 28
        }
      },
      "62": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 95,
          column: 77
        }
      },
      "63": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 121,
          column: 5
        }
      },
      "64": {
        start: {
          line: 99,
          column: 19
        },
        end: {
          line: 104,
          column: 10
        }
      },
      "65": {
        start: {
          line: 102,
          column: 10
        },
        end: {
          line: 102,
          column: 27
        }
      },
      "66": {
        start: {
          line: 103,
          column: 10
        },
        end: {
          line: 103,
          column: 31
        }
      },
      "67": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 80
        }
      },
      "68": {
        start: {
          line: 105,
          column: 17
        },
        end: {
          line: 105,
          column: 80
        }
      },
      "69": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 26
        }
      },
      "70": {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 107,
          column: 35
        }
      },
      "71": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 29
        }
      },
      "72": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 34
        }
      },
      "73": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "74": {
        start: {
          line: 112,
          column: 19
        },
        end: {
          line: 112,
          column: 20
        }
      },
      "75": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 113,
          column: 73
        }
      },
      "76": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 115,
          column: 73
        }
      },
      "77": {
        start: {
          line: 115,
          column: 10
        },
        end: {
          line: 115,
          column: 73
        }
      },
      "78": {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 28
        }
      },
      "79": {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 37
        }
      },
      "80": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 29
        }
      },
      "81": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 120,
          column: 34
        }
      },
      "82": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 24
        }
      },
      "83": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 11
        }
      },
      "84": {
        start: {
          line: 128,
          column: 33
        },
        end: {
          line: 145,
          column: 1
        }
      },
      "85": {
        start: {
          line: 146,
          column: 32
        },
        end: {
          line: 163,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 41
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 26
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 27
          },
          end: {
            line: 24,
            column: 28
          }
        },
        loc: {
          start: {
            line: 24,
            column: 42
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 32
          },
          end: {
            line: 40,
            column: 33
          }
        },
        loc: {
          start: {
            line: 40,
            column: 58
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 40
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 51,
            column: 13
          },
          end: {
            line: 51,
            column: 14
          }
        },
        loc: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 54,
            column: 7
          }
        },
        line: 51
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 75,
            column: 38
          },
          end: {
            line: 75,
            column: 39
          }
        },
        loc: {
          start: {
            line: 75,
            column: 64
          },
          end: {
            line: 127,
            column: 1
          }
        },
        line: 75
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 101,
            column: 15
          },
          end: {
            line: 101,
            column: 16
          }
        },
        loc: {
          start: {
            line: 101,
            column: 24
          },
          end: {
            line: 104,
            column: 9
          }
        },
        line: 101
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 128,
            column: 33
          },
          end: {
            line: 128,
            column: 34
          }
        },
        loc: {
          start: {
            line: 128,
            column: 59
          },
          end: {
            line: 145,
            column: 1
          }
        },
        line: 128
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 146,
            column: 32
          },
          end: {
            line: 146,
            column: 33
          }
        },
        loc: {
          start: {
            line: 146,
            column: 58
          },
          end: {
            line: 163,
            column: 1
          }
        },
        line: 146
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 16,
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
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 33,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 33,
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
        line: 30
      },
      "2": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 46,
            column: 3
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
        line: 43
      },
      "3": {
        loc: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        }, {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 70,
            column: 3
          }
        }],
        line: 48
      },
      "4": {
        loc: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 78
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
        line: 55
      },
      "5": {
        loc: {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 64,
            column: 80
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 64,
            column: 80
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
        line: 64
      },
      "6": {
        loc: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 124,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 124,
            column: 3
          }
        }, {
          start: {
            line: 89,
            column: 9
          },
          end: {
            line: 124,
            column: 3
          }
        }],
        line: 81
      },
      "7": {
        loc: {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 96,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 96,
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
        line: 93
      },
      "8": {
        loc: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 121,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 121,
            column: 5
          }
        }, {
          start: {
            line: 110,
            column: 11
          },
          end: {
            line: 121,
            column: 5
          }
        }],
        line: 98
      },
      "9": {
        loc: {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 80
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 80
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
        line: 105
      },
      "10": {
        loc: {
          start: {
            line: 114,
            column: 8
          },
          end: {
            line: 115,
            column: 73
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 8
          },
          end: {
            line: 115,
            column: 73
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
        line: 114
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
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0
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
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d73aa1ac9edbd26ddd0a6fdf4c7ae00a72f6af4a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2iguehy1ao = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2iguehy1ao();
var productModel = (cov_2iguehy1ao().s[0]++, _models["default"].Product);
cov_2iguehy1ao().s[1]++;
var fileUpload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var imageUrl;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_2iguehy1ao().f[0]++;
          imageUrl = (cov_2iguehy1ao().s[2]++, "");
          cov_2iguehy1ao().s[3]++;
          _context2.next = 5;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "newday_api/products"
          }, /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, image) {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    cov_2iguehy1ao().f[1]++;
                    cov_2iguehy1ao().s[4]++;
                    if (!err) {
                      _context.next = 10;
                      break;
                    }
                    cov_2iguehy1ao().b[0][0]++;
                    cov_2iguehy1ao().s[5]++;
                    console.log(err, "********");
                    cov_2iguehy1ao().s[6]++;
                    throw new Error(err);
                  case 10:
                    cov_2iguehy1ao().b[0][1]++;
                  case 11:
                    cov_2iguehy1ao().s[7]++;
                    imageUrl = image.url;
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 5:
          cov_2iguehy1ao().s[8]++;
          console.log(imageUrl, "******");
          cov_2iguehy1ao().s[9]++;
          return _context2.abrupt("return", imageUrl);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fileUpload(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.fileUpload = fileUpload;
cov_2iguehy1ao().s[10]++;
var imageUpload = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var imageUrl;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_2iguehy1ao().f[2]++;
          imageUrl = (cov_2iguehy1ao().s[11]++, "");
          cov_2iguehy1ao().s[12]++;
          _context4.next = 5;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "newday_api/profile"
          }, /*#__PURE__*/function () {
            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, image) {
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    cov_2iguehy1ao().f[3]++;
                    cov_2iguehy1ao().s[13]++;
                    if (!err) {
                      _context3.next = 10;
                      break;
                    }
                    cov_2iguehy1ao().b[1][0]++;
                    cov_2iguehy1ao().s[14]++;
                    console.log(err, "********");
                    cov_2iguehy1ao().s[15]++;
                    throw new Error(err);
                  case 10:
                    cov_2iguehy1ao().b[1][1]++;
                  case 11:
                    cov_2iguehy1ao().s[16]++;
                    imageUrl = image.url;
                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x5, _x6) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 5:
          cov_2iguehy1ao().s[17]++;
          return _context4.abrupt("return", imageUrl);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function imageUpload(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.imageUpload = imageUpload;
cov_2iguehy1ao().s[18]++;
var imageArrayUpload = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var urls, imageId, file, _file, i;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_2iguehy1ao().f[4]++;
          urls = (cov_2iguehy1ao().s[19]++, []);
          imageId = (cov_2iguehy1ao().s[20]++, []);
          cov_2iguehy1ao().s[21]++;
          if (req.body.images) {
            _context5.next = 12;
            break;
          }
          cov_2iguehy1ao().b[2][0]++;
          cov_2iguehy1ao().s[22]++;
          console.log(req.body);
          cov_2iguehy1ao().s[23]++;
          return _context5.abrupt("return", res.status(400).json({
            message: "images should not be empty"
          }));
        case 12:
          cov_2iguehy1ao().b[2][1]++;
        case 13:
          cov_2iguehy1ao().s[24]++;
          if (Array.isArray(req.body.images)) {
            _context5.next = 38;
            break;
          }
          cov_2iguehy1ao().b[3][0]++;
          cov_2iguehy1ao().s[25]++;
          _context5.next = 19;
          return _cloudinary["default"].uploader.upload(req.body.images.path)["catch"](function (err) {
            cov_2iguehy1ao().f[5]++;
            cov_2iguehy1ao().s[26]++;
            console.log(err);
            cov_2iguehy1ao().s[27]++;
            throw new Error(err);
          });
        case 19:
          file = _context5.sent;
          cov_2iguehy1ao().s[28]++;
          if (file) {
            _context5.next = 27;
            break;
          }
          cov_2iguehy1ao().b[4][0]++;
          cov_2iguehy1ao().s[29]++;
          return _context5.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 27:
          cov_2iguehy1ao().b[4][1]++;
        case 28:
          cov_2iguehy1ao().s[30]++;
          urls.push(file.url);
          cov_2iguehy1ao().s[31]++;
          imageId.push(file.public_id);
          cov_2iguehy1ao().s[32]++;
          req.body.images = urls;
          cov_2iguehy1ao().s[33]++;
          req.body.imagesId = imageId;
          _context5.next = 65;
          break;
        case 38:
          cov_2iguehy1ao().b[3][1]++;
          cov_2iguehy1ao().s[34]++;
          i = (cov_2iguehy1ao().s[35]++, 0);
        case 41:
          if (!(i < req.body.images.length)) {
            _context5.next = 61;
            break;
          }
          cov_2iguehy1ao().s[36]++;
          _context5.next = 45;
          return _cloudinary["default"].uploader.upload(req.body.images[i].path);
        case 45:
          _file = _context5.sent;
          cov_2iguehy1ao().s[37]++;
          if (_file) {
            _context5.next = 53;
            break;
          }
          cov_2iguehy1ao().b[5][0]++;
          cov_2iguehy1ao().s[38]++;
          return _context5.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 53:
          cov_2iguehy1ao().b[5][1]++;
        case 54:
          cov_2iguehy1ao().s[39]++;
          urls.push(_file.url);
          cov_2iguehy1ao().s[40]++;
          imageId.push(_file.public_id);
        case 58:
          i++;
          _context5.next = 41;
          break;
        case 61:
          cov_2iguehy1ao().s[41]++;
          req.body.images = urls;
          cov_2iguehy1ao().s[42]++;
          req.body.imagesId = imageId;
        case 65:
          cov_2iguehy1ao().s[43]++;
          req.data = req.body;
          cov_2iguehy1ao().s[44]++;
          next();
        case 69:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function imageArrayUpload(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.imageArrayUpload = imageArrayUpload;
cov_2iguehy1ao().s[45]++;
var updateImageArrayUpload = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _ref7, id, availableImages, urls, imageId, _urls, _imageId, file, _file2, i;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_2iguehy1ao().f[6]++;
          _ref7 = (cov_2iguehy1ao().s[46]++, req.params), id = _ref7.id;
          cov_2iguehy1ao().s[47]++;
          _context6.next = 5;
          return productModel.findOne({
            where: {
              productId: id
            }
          });
        case 5:
          availableImages = _context6.sent;
          cov_2iguehy1ao().s[48]++;
          console.log(req.body.images, "*****");
          cov_2iguehy1ao().s[49]++;
          if (req.body.images) {
            _context6.next = 25;
            break;
          }
          cov_2iguehy1ao().b[6][0]++;
          cov_2iguehy1ao().s[50]++;
          console.log("FIRST CASE");
          urls = (cov_2iguehy1ao().s[51]++, availableImages.dataValues.images);
          imageId = (cov_2iguehy1ao().s[52]++, availableImages.dataValues.imagesId);
          cov_2iguehy1ao().s[53]++;
          req.body.images = urls;
          cov_2iguehy1ao().s[54]++;
          req.body.imagesId = imageId;
          cov_2iguehy1ao().s[55]++;
          req.data = req.body;
          cov_2iguehy1ao().s[56]++;
          next();
          _context6.next = 96;
          break;
        case 25:
          cov_2iguehy1ao().b[6][1]++;
          cov_2iguehy1ao().s[57]++;
          console.log("SECOND CASE");
          _urls = (cov_2iguehy1ao().s[58]++, []);
          _imageId = (cov_2iguehy1ao().s[59]++, []);
          cov_2iguehy1ao().s[60]++;
          if (req.body.images) {
            _context6.next = 39;
            break;
          }
          cov_2iguehy1ao().b[7][0]++;
          cov_2iguehy1ao().s[61]++;
          console.log(req.body);
          cov_2iguehy1ao().s[62]++;
          return _context6.abrupt("return", res.status(400).json({
            message: "images should not be empty"
          }));
        case 39:
          cov_2iguehy1ao().b[7][1]++;
        case 40:
          cov_2iguehy1ao().s[63]++;
          if (Array.isArray(req.body.images)) {
            _context6.next = 65;
            break;
          }
          cov_2iguehy1ao().b[8][0]++;
          cov_2iguehy1ao().s[64]++;
          _context6.next = 46;
          return _cloudinary["default"].uploader.upload(req.body.images.path)["catch"](function (err) {
            cov_2iguehy1ao().f[7]++;
            cov_2iguehy1ao().s[65]++;
            console.log(err);
            cov_2iguehy1ao().s[66]++;
            throw new Error(err);
          });
        case 46:
          file = _context6.sent;
          cov_2iguehy1ao().s[67]++;
          if (file) {
            _context6.next = 54;
            break;
          }
          cov_2iguehy1ao().b[9][0]++;
          cov_2iguehy1ao().s[68]++;
          return _context6.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 54:
          cov_2iguehy1ao().b[9][1]++;
        case 55:
          cov_2iguehy1ao().s[69]++;
          _urls.push(file.url);
          cov_2iguehy1ao().s[70]++;
          _imageId.push(file.public_id);
          cov_2iguehy1ao().s[71]++;
          req.body.images = _urls;
          cov_2iguehy1ao().s[72]++;
          req.body.imagesId = _imageId;
          _context6.next = 92;
          break;
        case 65:
          cov_2iguehy1ao().b[8][1]++;
          cov_2iguehy1ao().s[73]++;
          i = (cov_2iguehy1ao().s[74]++, 0);
        case 68:
          if (!(i < req.body.images.length)) {
            _context6.next = 88;
            break;
          }
          cov_2iguehy1ao().s[75]++;
          _context6.next = 72;
          return _cloudinary["default"].uploader.upload(req.body.images[i].path);
        case 72:
          _file2 = _context6.sent;
          cov_2iguehy1ao().s[76]++;
          if (_file2) {
            _context6.next = 80;
            break;
          }
          cov_2iguehy1ao().b[10][0]++;
          cov_2iguehy1ao().s[77]++;
          return _context6.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 80:
          cov_2iguehy1ao().b[10][1]++;
        case 81:
          cov_2iguehy1ao().s[78]++;
          _urls.push(_file2.url);
          cov_2iguehy1ao().s[79]++;
          _imageId.push(_file2.public_id);
        case 85:
          i++;
          _context6.next = 68;
          break;
        case 88:
          cov_2iguehy1ao().s[80]++;
          req.body.images = _urls;
          cov_2iguehy1ao().s[81]++;
          req.body.imagesId = _imageId;
        case 92:
          cov_2iguehy1ao().s[82]++;
          req.data = req.body;
          cov_2iguehy1ao().s[83]++;
          next();
        case 96:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateImageArrayUpload(_x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateImageArrayUpload = updateImageArrayUpload;
cov_2iguehy1ao().s[84]++;
var uploadCompanyLogo = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var uploadFile;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          cov_2iguehy1ao().f[8]++;
          _context7.prev = 1;
          if (!req.body.companyLogo) {
            _context7.next = 10;
            break;
          }
          _context7.next = 5;
          return _cloudinary["default"].uploader.upload(req.body.companyLogo.path);
        case 5:
          uploadFile = _context7.sent;
          /* istanbul ignore next */
          req.body.companyLogo = uploadFile.url;
          console.log(req.body, "******");
          req.data = req.body; //Send something to the next step.
          next();
        case 10:
          _context7.next = 16;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](1);
          console.log(_context7.t0);
          throw new Error(_context7.t0);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 12]]);
  }));
  return function uploadCompanyLogo(_x13, _x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
exports.uploadCompanyLogo = uploadCompanyLogo;
cov_2iguehy1ao().s[85]++;
var uploadClassImage = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var uploadFile;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          cov_2iguehy1ao().f[9]++;
          _context8.prev = 1;
          if (!req.body.coverImage) {
            _context8.next = 10;
            break;
          }
          _context8.next = 5;
          return _cloudinary["default"].uploader.upload(req.body.coverImage.path);
        case 5:
          uploadFile = _context8.sent;
          /* istanbul ignore next */
          req.body.coverImage = uploadFile.url;
          console.log(req.body, "******");
          req.data = req.body; //Send something to the next step.
          next();
        case 10:
          _context8.next = 16;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0);
          throw new Error(_context8.t0);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 12]]);
  }));
  return function uploadClassImage(_x16, _x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.uploadClassImage = uploadClassImage;