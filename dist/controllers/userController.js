"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUser = exports.userLogin = exports.updateUser = exports.subscribeMsg = exports.subscribe = exports.resetPwd = exports.resetLink = exports.registerWorker = exports.getUsers = exports.getReviews = exports.getOneUser = exports.deleteUser = exports.deleteReviews = exports.deleteOneUser = exports.createReview = exports.clientSignUp = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _fileUpload = require("../helpers/fileUpload");
var _userHelper = require("../helpers/userHelper");
var _nodemailer = require("../helpers/nodemailer");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
function cov_wpj6tchq0() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\userController.js";
  var hash = "353e3813ca3c283de7befd51272da807fbf2106e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\controllers\\userController.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 13,
          column: 28
        }
      },
      "1": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 14,
          column: 34
        }
      },
      "2": {
        start: {
          line: 15,
          column: 21
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "3": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 32
        }
      },
      "4": {
        start: {
          line: 18,
          column: 23
        },
        end: {
          line: 111,
          column: 1
        }
      },
      "5": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 110,
          column: 3
        }
      },
      "6": {
        start: {
          line: 20,
          column: 53
        },
        end: {
          line: 20,
          column: 61
        }
      },
      "7": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 104,
          column: 9
        }
      },
      "8": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 103,
          column: 9
        }
      },
      "9": {
        start: {
          line: 28,
          column: 10
        },
        end: {
          line: 30,
          column: 13
        }
      },
      "10": {
        start: {
          line: 32,
          column: 30
        },
        end: {
          line: 49,
          column: 14
        }
      },
      "11": {
        start: {
          line: 48,
          column: 14
        },
        end: {
          line: 48,
          column: 63
        }
      },
      "12": {
        start: {
          line: 50,
          column: 24
        },
        end: {
          line: 50,
          column: 72
        }
      },
      "13": {
        start: {
          line: 51,
          column: 25
        },
        end: {
          line: 51,
          column: 40
        }
      },
      "14": {
        start: {
          line: 53,
          column: 10
        },
        end: {
          line: 63,
          column: 11
        }
      },
      "15": {
        start: {
          line: 54,
          column: 12
        },
        end: {
          line: 54,
          column: 54
        }
      },
      "16": {
        start: {
          line: 56,
          column: 12
        },
        end: {
          line: 62,
          column: 13
        }
      },
      "17": {
        start: {
          line: 57,
          column: 14
        },
        end: {
          line: 58,
          column: 104
        }
      },
      "18": {
        start: {
          line: 60,
          column: 14
        },
        end: {
          line: 61,
          column: 93
        }
      },
      "19": {
        start: {
          line: 65,
          column: 33
        },
        end: {
          line: 78,
          column: 14
        }
      },
      "20": {
        start: {
          line: 77,
          column: 14
        },
        end: {
          line: 77,
          column: 65
        }
      },
      "21": {
        start: {
          line: 80,
          column: 10
        },
        end: {
          line: 102,
          column: 15
        }
      },
      "22": {
        start: {
          line: 88,
          column: 30
        },
        end: {
          line: 92,
          column: 9
        }
      },
      "23": {
        start: {
          line: 93,
          column: 14
        },
        end: {
          line: 93,
          column: 52
        }
      },
      "24": {
        start: {
          line: 94,
          column: 14
        },
        end: {
          line: 96,
          column: 17
        }
      },
      "25": {
        start: {
          line: 99,
          column: 14
        },
        end: {
          line: 101,
          column: 17
        }
      },
      "26": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 36
        }
      },
      "27": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 109,
          column: 7
        }
      },
      "28": {
        start: {
          line: 113,
          column: 21
        },
        end: {
          line: 167,
          column: 1
        }
      },
      "29": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 166,
          column: 3
        }
      },
      "30": {
        start: {
          line: 115,
          column: 53
        },
        end: {
          line: 115,
          column: 61
        }
      },
      "31": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 161,
          column: 9
        }
      },
      "32": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 160,
          column: 9
        }
      },
      "33": {
        start: {
          line: 123,
          column: 10
        },
        end: {
          line: 125,
          column: 13
        }
      },
      "34": {
        start: {
          line: 127,
          column: 10
        },
        end: {
          line: 159,
          column: 15
        }
      },
      "35": {
        start: {
          line: 143,
          column: 28
        },
        end: {
          line: 143,
          column: 69
        }
      },
      "36": {
        start: {
          line: 144,
          column: 30
        },
        end: {
          line: 148,
          column: 9
        }
      },
      "37": {
        start: {
          line: 149,
          column: 14
        },
        end: {
          line: 149,
          column: 45
        }
      },
      "38": {
        start: {
          line: 150,
          column: 14
        },
        end: {
          line: 153,
          column: 17
        }
      },
      "39": {
        start: {
          line: 156,
          column: 14
        },
        end: {
          line: 158,
          column: 17
        }
      },
      "40": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 165,
          column: 7
        }
      },
      "41": {
        start: {
          line: 169,
          column: 19
        },
        end: {
          line: 192,
          column: 1
        }
      },
      "42": {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 191,
          column: 3
        }
      },
      "43": {
        start: {
          line: 171,
          column: 22
        },
        end: {
          line: 171,
          column: 32
        }
      },
      "44": {
        start: {
          line: 172,
          column: 21
        },
        end: {
          line: 172,
          column: 39
        }
      },
      "45": {
        start: {
          line: 173,
          column: 19
        },
        end: {
          line: 173,
          column: 30
        }
      },
      "46": {
        start: {
          line: 175,
          column: 17
        },
        end: {
          line: 175,
          column: 63
        }
      },
      "47": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 176,
          column: 73
        }
      },
      "48": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 186,
          column: 9
        }
      },
      "49": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 185,
          column: 11
        }
      },
      "50": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 190,
          column: 7
        }
      },
      "51": {
        start: {
          line: 194,
          column: 21
        },
        end: {
          line: 217,
          column: 1
        }
      },
      "52": {
        start: {
          line: 195,
          column: 2
        },
        end: {
          line: 216,
          column: 3
        }
      },
      "53": {
        start: {
          line: 196,
          column: 22
        },
        end: {
          line: 196,
          column: 37
        }
      },
      "54": {
        start: {
          line: 197,
          column: 19
        },
        end: {
          line: 197,
          column: 41
        }
      },
      "55": {
        start: {
          line: 198,
          column: 18
        },
        end: {
          line: 198,
          column: 30
        }
      },
      "56": {
        start: {
          line: 199,
          column: 15
        },
        end: {
          line: 199,
          column: 28
        }
      },
      "57": {
        start: {
          line: 201,
          column: 18
        },
        end: {
          line: 201,
          column: 53
        }
      },
      "58": {
        start: {
          line: 203,
          column: 20
        },
        end: {
          line: 206,
          column: 9
        }
      },
      "59": {
        start: {
          line: 207,
          column: 4
        },
        end: {
          line: 207,
          column: 30
        }
      },
      "60": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 211,
          column: 7
        }
      },
      "61": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 215,
          column: 7
        }
      },
      "62": {
        start: {
          line: 219,
          column: 18
        },
        end: {
          line: 235,
          column: 1
        }
      },
      "63": {
        start: {
          line: 220,
          column: 2
        },
        end: {
          line: 234,
          column: 3
        }
      },
      "64": {
        start: {
          line: 221,
          column: 22
        },
        end: {
          line: 221,
          column: 32
        }
      },
      "65": {
        start: {
          line: 222,
          column: 21
        },
        end: {
          line: 222,
          column: 39
        }
      },
      "66": {
        start: {
          line: 223,
          column: 19
        },
        end: {
          line: 223,
          column: 34
        }
      },
      "67": {
        start: {
          line: 225,
          column: 17
        },
        end: {
          line: 225,
          column: 63
        }
      },
      "68": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 226,
          column: 73
        }
      },
      "69": {
        start: {
          line: 227,
          column: 4
        },
        end: {
          line: 229,
          column: 7
        }
      },
      "70": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 233,
          column: 7
        }
      },
      "71": {
        start: {
          line: 237,
          column: 17
        },
        end: {
          line: 345,
          column: 1
        }
      },
      "72": {
        start: {
          line: 238,
          column: 2
        },
        end: {
          line: 344,
          column: 3
        }
      },
      "73": {
        start: {
          line: 239,
          column: 22
        },
        end: {
          line: 239,
          column: 53
        }
      },
      "74": {
        start: {
          line: 240,
          column: 22
        },
        end: {
          line: 240,
          column: 53
        }
      },
      "75": {
        start: {
          line: 242,
          column: 15
        },
        end: {
          line: 242,
          column: 16
        }
      },
      "76": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 246,
          column: 5
        }
      },
      "77": {
        start: {
          line: 245,
          column: 6
        },
        end: {
          line: 245,
          column: 23
        }
      },
      "78": {
        start: {
          line: 248,
          column: 15
        },
        end: {
          line: 248,
          column: 17
        }
      },
      "79": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 252,
          column: 5
        }
      },
      "80": {
        start: {
          line: 251,
          column: 6
        },
        end: {
          line: 251,
          column: 23
        }
      },
      "81": {
        start: {
          line: 254,
          column: 4
        },
        end: {
          line: 339,
          column: 9
        }
      },
      "82": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 332,
          column: 11
        }
      },
      "83": {
        start: {
          line: 335,
          column: 8
        },
        end: {
          line: 338,
          column: 11
        }
      },
      "84": {
        start: {
          line: 341,
          column: 4
        },
        end: {
          line: 343,
          column: 7
        }
      },
      "85": {
        start: {
          line: 347,
          column: 19
        },
        end: {
          line: 428,
          column: 1
        }
      },
      "86": {
        start: {
          line: 348,
          column: 2
        },
        end: {
          line: 427,
          column: 3
        }
      },
      "87": {
        start: {
          line: 349,
          column: 15
        },
        end: {
          line: 349,
          column: 28
        }
      },
      "88": {
        start: {
          line: 350,
          column: 4
        },
        end: {
          line: 422,
          column: 9
        }
      },
      "89": {
        start: {
          line: 416,
          column: 8
        },
        end: {
          line: 416,
          column: 42
        }
      },
      "90": {
        start: {
          line: 419,
          column: 8
        },
        end: {
          line: 421,
          column: 11
        }
      },
      "91": {
        start: {
          line: 424,
          column: 4
        },
        end: {
          line: 426,
          column: 7
        }
      },
      "92": {
        start: {
          line: 430,
          column: 19
        },
        end: {
          line: 460,
          column: 1
        }
      },
      "93": {
        start: {
          line: 431,
          column: 2
        },
        end: {
          line: 459,
          column: 3
        }
      },
      "94": {
        start: {
          line: 432,
          column: 15
        },
        end: {
          line: 432,
          column: 28
        }
      },
      "95": {
        start: {
          line: 434,
          column: 4
        },
        end: {
          line: 454,
          column: 9
        }
      },
      "96": {
        start: {
          line: 444,
          column: 8
        },
        end: {
          line: 447,
          column: 11
        }
      },
      "97": {
        start: {
          line: 450,
          column: 8
        },
        end: {
          line: 453,
          column: 11
        }
      },
      "98": {
        start: {
          line: 456,
          column: 4
        },
        end: {
          line: 458,
          column: 7
        }
      },
      "99": {
        start: {
          line: 462,
          column: 19
        },
        end: {
          line: 484,
          column: 1
        }
      },
      "100": {
        start: {
          line: 463,
          column: 2
        },
        end: {
          line: 483,
          column: 3
        }
      },
      "101": {
        start: {
          line: 464,
          column: 4
        },
        end: {
          line: 478,
          column: 9
        }
      },
      "102": {
        start: {
          line: 470,
          column: 8
        },
        end: {
          line: 472,
          column: 11
        }
      },
      "103": {
        start: {
          line: 475,
          column: 8
        },
        end: {
          line: 477,
          column: 11
        }
      },
      "104": {
        start: {
          line: 480,
          column: 4
        },
        end: {
          line: 482,
          column: 7
        }
      },
      "105": {
        start: {
          line: 486,
          column: 22
        },
        end: {
          line: 513,
          column: 1
        }
      },
      "106": {
        start: {
          line: 487,
          column: 2
        },
        end: {
          line: 512,
          column: 3
        }
      },
      "107": {
        start: {
          line: 488,
          column: 15
        },
        end: {
          line: 488,
          column: 28
        }
      },
      "108": {
        start: {
          line: 489,
          column: 4
        },
        end: {
          line: 507,
          column: 9
        }
      },
      "109": {
        start: {
          line: 496,
          column: 8
        },
        end: {
          line: 500,
          column: 9
        }
      },
      "110": {
        start: {
          line: 497,
          column: 10
        },
        end: {
          line: 499,
          column: 13
        }
      },
      "111": {
        start: {
          line: 501,
          column: 8
        },
        end: {
          line: 503,
          column: 11
        }
      },
      "112": {
        start: {
          line: 506,
          column: 8
        },
        end: {
          line: 506,
          column: 45
        }
      },
      "113": {
        start: {
          line: 509,
          column: 4
        },
        end: {
          line: 511,
          column: 7
        }
      },
      "114": {
        start: {
          line: 515,
          column: 18
        },
        end: {
          line: 560,
          column: 1
        }
      },
      "115": {
        start: {
          line: 516,
          column: 2
        },
        end: {
          line: 559,
          column: 3
        }
      },
      "116": {
        start: {
          line: 517,
          column: 17
        },
        end: {
          line: 517,
          column: 31
        }
      },
      "117": {
        start: {
          line: 518,
          column: 22
        },
        end: {
          line: 520,
          column: 6
        }
      },
      "118": {
        start: {
          line: 522,
          column: 21
        },
        end: {
          line: 522,
          column: 43
        }
      },
      "119": {
        start: {
          line: 524,
          column: 23
        },
        end: {
          line: 527,
          column: 5
        }
      },
      "120": {
        start: {
          line: 529,
          column: 4
        },
        end: {
          line: 553,
          column: 5
        }
      },
      "121": {
        start: {
          line: 530,
          column: 6
        },
        end: {
          line: 535,
          column: 7
        }
      },
      "122": {
        start: {
          line: 531,
          column: 8
        },
        end: {
          line: 534,
          column: 11
        }
      },
      "123": {
        start: {
          line: 536,
          column: 20
        },
        end: {
          line: 544,
          column: 7
        }
      },
      "124": {
        start: {
          line: 545,
          column: 6
        },
        end: {
          line: 552,
          column: 9
        }
      },
      "125": {
        start: {
          line: 554,
          column: 4
        },
        end: {
          line: 554,
          column: 65
        }
      },
      "126": {
        start: {
          line: 556,
          column: 4
        },
        end: {
          line: 558,
          column: 7
        }
      },
      "127": {
        start: {
          line: 562,
          column: 18
        },
        end: {
          line: 586,
          column: 1
        }
      },
      "128": {
        start: {
          line: 563,
          column: 2
        },
        end: {
          line: 585,
          column: 3
        }
      },
      "129": {
        start: {
          line: 564,
          column: 22
        },
        end: {
          line: 566,
          column: 6
        }
      },
      "130": {
        start: {
          line: 567,
          column: 4
        },
        end: {
          line: 569,
          column: 5
        }
      },
      "131": {
        start: {
          line: 568,
          column: 6
        },
        end: {
          line: 568,
          column: 78
        }
      },
      "132": {
        start: {
          line: 571,
          column: 18
        },
        end: {
          line: 573,
          column: 6
        }
      },
      "133": {
        start: {
          line: 574,
          column: 20
        },
        end: {
          line: 577,
          column: 9
        }
      },
      "134": {
        start: {
          line: 578,
          column: 4
        },
        end: {
          line: 578,
          column: 40
        }
      },
      "135": {
        start: {
          line: 580,
          column: 4
        },
        end: {
          line: 580,
          column: 77
        }
      },
      "136": {
        start: {
          line: 582,
          column: 4
        },
        end: {
          line: 584,
          column: 7
        }
      },
      "137": {
        start: {
          line: 588,
          column: 17
        },
        end: {
          line: 626,
          column: 1
        }
      },
      "138": {
        start: {
          line: 589,
          column: 2
        },
        end: {
          line: 625,
          column: 3
        }
      },
      "139": {
        start: {
          line: 590,
          column: 21
        },
        end: {
          line: 590,
          column: 38
        }
      },
      "140": {
        start: {
          line: 591,
          column: 25
        },
        end: {
          line: 591,
          column: 46
        }
      },
      "141": {
        start: {
          line: 592,
          column: 4
        },
        end: {
          line: 596,
          column: 5
        }
      },
      "142": {
        start: {
          line: 593,
          column: 6
        },
        end: {
          line: 595,
          column: 9
        }
      },
      "143": {
        start: {
          line: 597,
          column: 22
        },
        end: {
          line: 597,
          column: 32
        }
      },
      "144": {
        start: {
          line: 598,
          column: 19
        },
        end: {
          line: 598,
          column: 60
        }
      },
      "145": {
        start: {
          line: 599,
          column: 4
        },
        end: {
          line: 620,
          column: 9
        }
      },
      "146": {
        start: {
          line: 607,
          column: 8
        },
        end: {
          line: 612,
          column: 9
        }
      },
      "147": {
        start: {
          line: 608,
          column: 10
        },
        end: {
          line: 611,
          column: 13
        }
      },
      "148": {
        start: {
          line: 613,
          column: 8
        },
        end: {
          line: 616,
          column: 11
        }
      },
      "149": {
        start: {
          line: 619,
          column: 8
        },
        end: {
          line: 619,
          column: 41
        }
      },
      "150": {
        start: {
          line: 622,
          column: 4
        },
        end: {
          line: 624,
          column: 7
        }
      },
      "151": {
        start: {
          line: 628,
          column: 21
        },
        end: {
          line: 673,
          column: 1
        }
      },
      "152": {
        start: {
          line: 629,
          column: 2
        },
        end: {
          line: 672,
          column: 3
        }
      },
      "153": {
        start: {
          line: 630,
          column: 18
        },
        end: {
          line: 630,
          column: 33
        }
      },
      "154": {
        start: {
          line: 631,
          column: 19
        },
        end: {
          line: 631,
          column: 37
        }
      },
      "155": {
        start: {
          line: 632,
          column: 15
        },
        end: {
          line: 632,
          column: 28
        }
      },
      "156": {
        start: {
          line: 634,
          column: 21
        },
        end: {
          line: 634,
          column: 29
        }
      },
      "157": {
        start: {
          line: 635,
          column: 4
        },
        end: {
          line: 639,
          column: 5
        }
      },
      "158": {
        start: {
          line: 636,
          column: 6
        },
        end: {
          line: 638,
          column: 9
        }
      },
      "159": {
        start: {
          line: 640,
          column: 4
        },
        end: {
          line: 644,
          column: 5
        }
      },
      "160": {
        start: {
          line: 641,
          column: 6
        },
        end: {
          line: 643,
          column: 9
        }
      },
      "161": {
        start: {
          line: 646,
          column: 4
        },
        end: {
          line: 650,
          column: 7
        }
      },
      "162": {
        start: {
          line: 647,
          column: 6
        },
        end: {
          line: 649,
          column: 9
        }
      },
      "163": {
        start: {
          line: 651,
          column: 4
        },
        end: {
          line: 667,
          column: 9
        }
      },
      "164": {
        start: {
          line: 658,
          column: 8
        },
        end: {
          line: 661,
          column: 11
        }
      },
      "165": {
        start: {
          line: 664,
          column: 8
        },
        end: {
          line: 666,
          column: 11
        }
      },
      "166": {
        start: {
          line: 669,
          column: 4
        },
        end: {
          line: 671,
          column: 7
        }
      },
      "167": {
        start: {
          line: 675,
          column: 19
        },
        end: {
          line: 717,
          column: 1
        }
      },
      "168": {
        start: {
          line: 676,
          column: 2
        },
        end: {
          line: 716,
          column: 3
        }
      },
      "169": {
        start: {
          line: 677,
          column: 4
        },
        end: {
          line: 711,
          column: 9
        }
      },
      "170": {
        start: {
          line: 699,
          column: 19
        },
        end: {
          line: 701,
          column: 10
        }
      },
      "171": {
        start: {
          line: 700,
          column: 10
        },
        end: {
          line: 700,
          column: 26
        }
      },
      "172": {
        start: {
          line: 702,
          column: 8
        },
        end: {
          line: 705,
          column: 11
        }
      },
      "173": {
        start: {
          line: 708,
          column: 8
        },
        end: {
          line: 710,
          column: 11
        }
      },
      "174": {
        start: {
          line: 713,
          column: 4
        },
        end: {
          line: 715,
          column: 7
        }
      },
      "175": {
        start: {
          line: 719,
          column: 22
        },
        end: {
          line: 743,
          column: 1
        }
      },
      "176": {
        start: {
          line: 720,
          column: 2
        },
        end: {
          line: 742,
          column: 7
        }
      },
      "177": {
        start: {
          line: 723,
          column: 6
        },
        end: {
          line: 736,
          column: 7
        }
      },
      "178": {
        start: {
          line: 724,
          column: 8
        },
        end: {
          line: 726,
          column: 11
        }
      },
      "179": {
        start: {
          line: 727,
          column: 13
        },
        end: {
          line: 736,
          column: 7
        }
      },
      "180": {
        start: {
          line: 728,
          column: 8
        },
        end: {
          line: 730,
          column: 11
        }
      },
      "181": {
        start: {
          line: 732,
          column: 8
        },
        end: {
          line: 735,
          column: 11
        }
      },
      "182": {
        start: {
          line: 739,
          column: 6
        },
        end: {
          line: 741,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 23
          },
          end: {
            line: 18,
            column: 24
          }
        },
        loc: {
          start: {
            line: 18,
            column: 43
          },
          end: {
            line: 111,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 104,
            column: 7
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 47,
            column: 19
          },
          end: {
            line: 47,
            column: 20
          }
        },
        loc: {
          start: {
            line: 47,
            column: 28
          },
          end: {
            line: 49,
            column: 13
          }
        },
        line: 47
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 76,
            column: 19
          },
          end: {
            line: 76,
            column: 20
          }
        },
        loc: {
          start: {
            line: 76,
            column: 30
          },
          end: {
            line: 78,
            column: 13
          }
        },
        line: 76
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 87,
            column: 18
          },
          end: {
            line: 87,
            column: 19
          }
        },
        loc: {
          start: {
            line: 87,
            column: 28
          },
          end: {
            line: 97,
            column: 13
          }
        },
        line: 87
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 98,
            column: 19
          },
          end: {
            line: 98,
            column: 20
          }
        },
        loc: {
          start: {
            line: 98,
            column: 30
          },
          end: {
            line: 102,
            column: 13
          }
        },
        line: 98
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 113,
            column: 21
          },
          end: {
            line: 113,
            column: 22
          }
        },
        loc: {
          start: {
            line: 113,
            column: 41
          },
          end: {
            line: 167,
            column: 1
          }
        },
        line: 113
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 121,
            column: 12
          },
          end: {
            line: 121,
            column: 13
          }
        },
        loc: {
          start: {
            line: 121,
            column: 33
          },
          end: {
            line: 161,
            column: 7
          }
        },
        line: 121
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 142,
            column: 18
          },
          end: {
            line: 142,
            column: 19
          }
        },
        loc: {
          start: {
            line: 142,
            column: 28
          },
          end: {
            line: 154,
            column: 13
          }
        },
        line: 142
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 155,
            column: 19
          },
          end: {
            line: 155,
            column: 20
          }
        },
        loc: {
          start: {
            line: 155,
            column: 28
          },
          end: {
            line: 159,
            column: 13
          }
        },
        line: 155
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 169,
            column: 19
          },
          end: {
            line: 169,
            column: 20
          }
        },
        loc: {
          start: {
            line: 169,
            column: 39
          },
          end: {
            line: 192,
            column: 1
          }
        },
        line: 169
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 182,
            column: 13
          },
          end: {
            line: 182,
            column: 14
          }
        },
        loc: {
          start: {
            line: 182,
            column: 24
          },
          end: {
            line: 186,
            column: 7
          }
        },
        line: 182
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 194,
            column: 21
          },
          end: {
            line: 194,
            column: 22
          }
        },
        loc: {
          start: {
            line: 194,
            column: 41
          },
          end: {
            line: 217,
            column: 1
          }
        },
        line: 194
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 219,
            column: 18
          },
          end: {
            line: 219,
            column: 19
          }
        },
        loc: {
          start: {
            line: 219,
            column: 38
          },
          end: {
            line: 235,
            column: 1
          }
        },
        line: 219
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 237,
            column: 17
          },
          end: {
            line: 237,
            column: 18
          }
        },
        loc: {
          start: {
            line: 237,
            column: 37
          },
          end: {
            line: 345,
            column: 1
          }
        },
        line: 237
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 325,
            column: 12
          },
          end: {
            line: 325,
            column: 13
          }
        },
        loc: {
          start: {
            line: 325,
            column: 22
          },
          end: {
            line: 333,
            column: 7
          }
        },
        line: 325
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 334,
            column: 13
          },
          end: {
            line: 334,
            column: 14
          }
        },
        loc: {
          start: {
            line: 334,
            column: 22
          },
          end: {
            line: 339,
            column: 7
          }
        },
        line: 334
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 347,
            column: 19
          },
          end: {
            line: 347,
            column: 20
          }
        },
        loc: {
          start: {
            line: 347,
            column: 39
          },
          end: {
            line: 428,
            column: 1
          }
        },
        line: 347
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 415,
            column: 12
          },
          end: {
            line: 415,
            column: 13
          }
        },
        loc: {
          start: {
            line: 415,
            column: 22
          },
          end: {
            line: 417,
            column: 7
          }
        },
        line: 415
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 418,
            column: 13
          },
          end: {
            line: 418,
            column: 14
          }
        },
        loc: {
          start: {
            line: 418,
            column: 24
          },
          end: {
            line: 422,
            column: 7
          }
        },
        line: 418
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 430,
            column: 19
          },
          end: {
            line: 430,
            column: 20
          }
        },
        loc: {
          start: {
            line: 430,
            column: 39
          },
          end: {
            line: 460,
            column: 1
          }
        },
        line: 430
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 443,
            column: 12
          },
          end: {
            line: 443,
            column: 13
          }
        },
        loc: {
          start: {
            line: 443,
            column: 22
          },
          end: {
            line: 448,
            column: 7
          }
        },
        line: 443
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 449,
            column: 13
          },
          end: {
            line: 449,
            column: 14
          }
        },
        loc: {
          start: {
            line: 449,
            column: 22
          },
          end: {
            line: 454,
            column: 7
          }
        },
        line: 449
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 462,
            column: 19
          },
          end: {
            line: 462,
            column: 20
          }
        },
        loc: {
          start: {
            line: 462,
            column: 39
          },
          end: {
            line: 484,
            column: 1
          }
        },
        line: 462
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 469,
            column: 12
          },
          end: {
            line: 469,
            column: 13
          }
        },
        loc: {
          start: {
            line: 469,
            column: 22
          },
          end: {
            line: 473,
            column: 7
          }
        },
        line: 469
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 474,
            column: 13
          },
          end: {
            line: 474,
            column: 14
          }
        },
        loc: {
          start: {
            line: 474,
            column: 22
          },
          end: {
            line: 478,
            column: 7
          }
        },
        line: 474
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 486,
            column: 22
          },
          end: {
            line: 486,
            column: 23
          }
        },
        loc: {
          start: {
            line: 486,
            column: 42
          },
          end: {
            line: 513,
            column: 1
          }
        },
        line: 486
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 495,
            column: 12
          },
          end: {
            line: 495,
            column: 13
          }
        },
        loc: {
          start: {
            line: 495,
            column: 22
          },
          end: {
            line: 504,
            column: 7
          }
        },
        line: 495
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 505,
            column: 13
          },
          end: {
            line: 505,
            column: 14
          }
        },
        loc: {
          start: {
            line: 505,
            column: 22
          },
          end: {
            line: 507,
            column: 7
          }
        },
        line: 505
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 515,
            column: 18
          },
          end: {
            line: 515,
            column: 19
          }
        },
        loc: {
          start: {
            line: 515,
            column: 38
          },
          end: {
            line: 560,
            column: 1
          }
        },
        line: 515
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 562,
            column: 18
          },
          end: {
            line: 562,
            column: 19
          }
        },
        loc: {
          start: {
            line: 562,
            column: 38
          },
          end: {
            line: 586,
            column: 1
          }
        },
        line: 562
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 588,
            column: 17
          },
          end: {
            line: 588,
            column: 18
          }
        },
        loc: {
          start: {
            line: 588,
            column: 37
          },
          end: {
            line: 626,
            column: 1
          }
        },
        line: 588
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 606,
            column: 12
          },
          end: {
            line: 606,
            column: 13
          }
        },
        loc: {
          start: {
            line: 606,
            column: 22
          },
          end: {
            line: 617,
            column: 7
          }
        },
        line: 606
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 618,
            column: 13
          },
          end: {
            line: 618,
            column: 14
          }
        },
        loc: {
          start: {
            line: 618,
            column: 22
          },
          end: {
            line: 620,
            column: 7
          }
        },
        line: 618
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 628,
            column: 21
          },
          end: {
            line: 628,
            column: 22
          }
        },
        loc: {
          start: {
            line: 628,
            column: 41
          },
          end: {
            line: 673,
            column: 1
          }
        },
        line: 628
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 646,
            column: 63
          },
          end: {
            line: 646,
            column: 64
          }
        },
        loc: {
          start: {
            line: 646,
            column: 72
          },
          end: {
            line: 650,
            column: 5
          }
        },
        line: 646
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 657,
            column: 12
          },
          end: {
            line: 657,
            column: 13
          }
        },
        loc: {
          start: {
            line: 657,
            column: 22
          },
          end: {
            line: 662,
            column: 7
          }
        },
        line: 657
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 663,
            column: 13
          },
          end: {
            line: 663,
            column: 14
          }
        },
        loc: {
          start: {
            line: 663,
            column: 22
          },
          end: {
            line: 667,
            column: 7
          }
        },
        line: 663
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 675,
            column: 19
          },
          end: {
            line: 675,
            column: 20
          }
        },
        loc: {
          start: {
            line: 675,
            column: 39
          },
          end: {
            line: 717,
            column: 1
          }
        },
        line: 675
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 698,
            column: 12
          },
          end: {
            line: 698,
            column: 13
          }
        },
        loc: {
          start: {
            line: 698,
            column: 22
          },
          end: {
            line: 706,
            column: 7
          }
        },
        line: 698
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 699,
            column: 33
          },
          end: {
            line: 699,
            column: 34
          }
        },
        loc: {
          start: {
            line: 699,
            column: 42
          },
          end: {
            line: 701,
            column: 9
          }
        },
        line: 699
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 707,
            column: 13
          },
          end: {
            line: 707,
            column: 14
          }
        },
        loc: {
          start: {
            line: 707,
            column: 22
          },
          end: {
            line: 711,
            column: 7
          }
        },
        line: 707
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 719,
            column: 22
          },
          end: {
            line: 719,
            column: 23
          }
        },
        loc: {
          start: {
            line: 719,
            column: 42
          },
          end: {
            line: 743,
            column: 1
          }
        },
        line: 719
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 722,
            column: 10
          },
          end: {
            line: 722,
            column: 11
          }
        },
        loc: {
          start: {
            line: 722,
            column: 20
          },
          end: {
            line: 737,
            column: 5
          }
        },
        line: 722
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 738,
            column: 11
          },
          end: {
            line: 738,
            column: 12
          }
        },
        loc: {
          start: {
            line: 738,
            column: 20
          },
          end: {
            line: 742,
            column: 5
          }
        },
        line: 738
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        }, {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 103,
            column: 9
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 63,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 63,
            column: 11
          }
        }, {
          start: {
            line: 55,
            column: 17
          },
          end: {
            line: 63,
            column: 11
          }
        }],
        line: 53
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 12
          },
          end: {
            line: 62,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 12
          },
          end: {
            line: 62,
            column: 13
          }
        }, {
          start: {
            line: 59,
            column: 19
          },
          end: {
            line: 62,
            column: 13
          }
        }],
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 160,
            column: 9
          }
        }, {
          start: {
            line: 126,
            column: 15
          },
          end: {
            line: 160,
            column: 9
          }
        }],
        line: 122
      },
      "4": {
        loc: {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 246,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 246,
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
        line: 244
      },
      "5": {
        loc: {
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 244,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 244,
            column: 32
          }
        }, {
          start: {
            line: 244,
            column: 36
          },
          end: {
            line: 244,
            column: 49
          }
        }],
        line: 244
      },
      "6": {
        loc: {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
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
        line: 250
      },
      "7": {
        loc: {
          start: {
            line: 250,
            column: 8
          },
          end: {
            line: 250,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 250,
            column: 8
          },
          end: {
            line: 250,
            column: 32
          }
        }, {
          start: {
            line: 250,
            column: 36
          },
          end: {
            line: 250,
            column: 49
          }
        }, {
          start: {
            line: 250,
            column: 53
          },
          end: {
            line: 250,
            column: 63
          }
        }],
        line: 250
      },
      "8": {
        loc: {
          start: {
            line: 496,
            column: 8
          },
          end: {
            line: 500,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 496,
            column: 8
          },
          end: {
            line: 500,
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
        line: 496
      },
      "9": {
        loc: {
          start: {
            line: 529,
            column: 4
          },
          end: {
            line: 553,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 529,
            column: 4
          },
          end: {
            line: 553,
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
        line: 529
      },
      "10": {
        loc: {
          start: {
            line: 530,
            column: 6
          },
          end: {
            line: 535,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 530,
            column: 6
          },
          end: {
            line: 535,
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
        line: 530
      },
      "11": {
        loc: {
          start: {
            line: 567,
            column: 4
          },
          end: {
            line: 569,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 567,
            column: 4
          },
          end: {
            line: 569,
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
        line: 567
      },
      "12": {
        loc: {
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 596,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 596,
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
        line: 592
      },
      "13": {
        loc: {
          start: {
            line: 607,
            column: 8
          },
          end: {
            line: 612,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 607,
            column: 8
          },
          end: {
            line: 612,
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
        line: 607
      },
      "14": {
        loc: {
          start: {
            line: 635,
            column: 4
          },
          end: {
            line: 639,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 635,
            column: 4
          },
          end: {
            line: 639,
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
        line: 635
      },
      "15": {
        loc: {
          start: {
            line: 640,
            column: 4
          },
          end: {
            line: 644,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 640,
            column: 4
          },
          end: {
            line: 644,
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
        line: 640
      },
      "16": {
        loc: {
          start: {
            line: 723,
            column: 6
          },
          end: {
            line: 736,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 723,
            column: 6
          },
          end: {
            line: 736,
            column: 7
          }
        }, {
          start: {
            line: 727,
            column: 13
          },
          end: {
            line: 736,
            column: 7
          }
        }],
        line: 723
      },
      "17": {
        loc: {
          start: {
            line: 727,
            column: 13
          },
          end: {
            line: 736,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 727,
            column: 13
          },
          end: {
            line: 736,
            column: 7
          }
        }, {
          start: {
            line: 731,
            column: 13
          },
          end: {
            line: 736,
            column: 7
          }
        }],
        line: 727
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
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0
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
      "44": 0
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
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "353e3813ca3c283de7befd51272da807fbf2106e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wpj6tchq0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wpj6tchq0();
var userModel = (cov_wpj6tchq0().s[0]++, _models["default"].User);
var profileModel = (cov_wpj6tchq0().s[1]++, _models["default"].Profile);
var addressModel = (cov_wpj6tchq0().s[2]++, _models["default"].Address);
var reviewModel = (cov_wpj6tchq0().s[3]++, _models["default"].Review);
cov_wpj6tchq0().s[4]++;
var registerWorker = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _ref2, firstName, lastName, email, password;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cov_wpj6tchq0().f[0]++;
          cov_wpj6tchq0().s[5]++;
          _context2.prev = 2;
          _ref2 = (cov_wpj6tchq0().s[6]++, req.body), firstName = _ref2.firstName, lastName = _ref2.lastName, email = _ref2.email, password = _ref2.password;
          cov_wpj6tchq0().s[7]++;
          _context2.next = 7;
          return userModel.findOne({
            where: {
              email: email
            }
          }).then( /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(usedEmail) {
              var createdUser, token, gender, createdProfile;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    cov_wpj6tchq0().f[1]++;
                    cov_wpj6tchq0().s[8]++;
                    if (!usedEmail) {
                      _context.next = 8;
                      break;
                    }
                    cov_wpj6tchq0().b[0][0]++;
                    cov_wpj6tchq0().s[9]++;
                    return _context.abrupt("return", res.status(409).send({
                      error: "email taken!"
                    }));
                  case 8:
                    cov_wpj6tchq0().b[0][1]++;
                    cov_wpj6tchq0().s[10]++;
                    _context.next = 12;
                    return userModel.create({
                      firstName: req.body.firstName,
                      lastName: req.body.lastName,
                      email: req.body.email,
                      password: (0, _userHelper.hashPassword)(password),
                      roleId: req.body.roleId,
                      where: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        roleId: req.body.roleId
                      }
                    })["catch"](function (err) {
                      cov_wpj6tchq0().f[2]++;
                      cov_wpj6tchq0().s[11]++;
                      return res.status(400).send({
                        error: "".concat(err)
                      });
                    });
                  case 12:
                    createdUser = _context.sent;
                    token = (cov_wpj6tchq0().s[12]++, (0, _userHelper.generateToken)({
                      id: createdUser.userId
                    }, "30d"));
                    gender = (cov_wpj6tchq0().s[13]++, req.body.gender);
                    cov_wpj6tchq0().s[14]++;
                    if (!req.file) {
                      _context.next = 24;
                      break;
                    }
                    cov_wpj6tchq0().b[1][0]++;
                    cov_wpj6tchq0().s[15]++;
                    _context.next = 21;
                    return (0, _fileUpload.imageUpload)(req);
                  case 21:
                    req.body.picture = _context.sent;
                    _context.next = 27;
                    break;
                  case 24:
                    cov_wpj6tchq0().b[1][1]++;
                    cov_wpj6tchq0().s[16]++;
                    if (gender == "female") {
                      cov_wpj6tchq0().b[2][0]++;
                      cov_wpj6tchq0().s[17]++;
                      req.body.picture = "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
                    } else {
                      cov_wpj6tchq0().b[2][1]++;
                      cov_wpj6tchq0().s[18]++;
                      req.body.picture = "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";
                    }
                  case 27:
                    cov_wpj6tchq0().s[19]++;
                    _context.next = 30;
                    return profileModel.create({
                      userId: createdUser.userId,
                      picture: req.body.picture,
                      birthDate: req.body.birthDate,
                      gender: req.body.gender,
                      status: req.body.status,
                      maritalStatus: req.body.maritalStatus,
                      department: req.body.department,
                      phoneNumber: req.body.phoneNumber
                    })["catch"](function (error) {
                      cov_wpj6tchq0().f[3]++;
                      cov_wpj6tchq0().s[20]++;
                      return res.status(400).send({
                        error: "".concat(error)
                      });
                    });
                  case 30:
                    createdProfile = _context.sent;
                    cov_wpj6tchq0().s[21]++;
                    _context.next = 34;
                    return addressModel.create({
                      profileId: createdProfile.profileId,
                      country: req.body.country,
                      city: req.body.city,
                      street: req.body.street
                    }).then(function (data) {
                      cov_wpj6tchq0().f[4]++;
                      var message = (cov_wpj6tchq0().s[22]++, "\n        <h2>Congratulations ".concat(firstName, " ").concat(lastName, "! your account creation was successful.</h2>\n        <p>Copy the following token::: <em> \n        <a href=\"http://localhost:8080/verify/?").concat(token, "\">Click here</a></em></p>\n        "));
                      cov_wpj6tchq0().s[23]++;
                      (0, _nodemailer.sendEmail)(message, createdUser.email);
                      cov_wpj6tchq0().s[24]++;
                      return res.send({
                        message: "Sign up successfull"
                      });
                    })["catch"](function (error) {
                      cov_wpj6tchq0().f[5]++;
                      cov_wpj6tchq0().s[25]++;
                      return res.status(400).send({
                        error: "Error while creating user profile!!!"
                      });
                    });
                  case 34:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }());
        case 7:
          _context2.next = 15;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          cov_wpj6tchq0().s[26]++;
          console.log(req.body.firstName);
          cov_wpj6tchq0().s[27]++;
          return _context2.abrupt("return", res.status(400).send({
            error: "Fill all missing fields correctly. ".concat(_context2.t0)
          }));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return function registerWorker(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.registerWorker = registerWorker;
cov_wpj6tchq0().s[28]++;
var clientSignUp = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _ref5, firstName, lastName, email, password;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          cov_wpj6tchq0().f[6]++;
          cov_wpj6tchq0().s[29]++;
          _context4.prev = 2;
          _ref5 = (cov_wpj6tchq0().s[30]++, req.body), firstName = _ref5.firstName, lastName = _ref5.lastName, email = _ref5.email, password = _ref5.password;
          cov_wpj6tchq0().s[31]++;
          _context4.next = 7;
          return userModel.findOne({
            where: {
              email: email
            }
          }).then( /*#__PURE__*/function () {
            var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(usedEmail) {
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    cov_wpj6tchq0().f[7]++;
                    cov_wpj6tchq0().s[32]++;
                    if (!usedEmail) {
                      _context3.next = 8;
                      break;
                    }
                    cov_wpj6tchq0().b[3][0]++;
                    cov_wpj6tchq0().s[33]++;
                    return _context3.abrupt("return", res.status(409).send({
                      error: "email taken!"
                    }));
                  case 8:
                    cov_wpj6tchq0().b[3][1]++;
                    cov_wpj6tchq0().s[34]++;
                    _context3.next = 12;
                    return userModel.create({
                      firstName: req.body.firstName,
                      lastName: req.body.lastName,
                      email: req.body.email,
                      password: (0, _userHelper.hashPassword)(password),
                      roleId: req.body.roleId,
                      where: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        roleId: req.body.roleId
                      }
                    }).then(function (data) {
                      cov_wpj6tchq0().f[8]++;
                      var token = (cov_wpj6tchq0().s[35]++, (0, _userHelper.generateToken)({
                        id: data.userId
                      }, "30d"));
                      var message = (cov_wpj6tchq0().s[36]++, "\n        <h2>Congratulations ".concat(firstName, " ").concat(lastName, "! your account creation was successful.</h2>\n        <p>Click on the following url: <em> \n        <a href=\"http://localhost:8080/verify/?").concat(token, "\">Click here</a></em></p>\n        "));
                      cov_wpj6tchq0().s[37]++;
                      (0, _nodemailer.sendEmail)(message, data.email);
                      cov_wpj6tchq0().s[38]++;
                      return res.send({
                        message: "Client sign up successfull",
                        data: data
                      });
                    })["catch"](function (err) {
                      cov_wpj6tchq0().f[9]++;
                      cov_wpj6tchq0().s[39]++;
                      return res.status(400).send({
                        error: "Fill all missing fields correctly/".concat(err)
                      });
                    });
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x6) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 7:
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          cov_wpj6tchq0().s[40]++;
          return _context4.abrupt("return", res.send({
            error: "".concat(_context4.t0)
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function clientSignUp(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.clientSignUp = clientSignUp;
cov_wpj6tchq0().s[41]++;
var verifyUser = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _ref8, token, userInfo, userId, user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cov_wpj6tchq0().f[10]++;
          cov_wpj6tchq0().s[42]++;
          _context5.prev = 2;
          _ref8 = (cov_wpj6tchq0().s[43]++, req.params), token = _ref8.token;
          userInfo = (cov_wpj6tchq0().s[44]++, (0, _userHelper.decodeToken)(token));
          userId = (cov_wpj6tchq0().s[45]++, userInfo.id);
          cov_wpj6tchq0().s[46]++;
          _context5.next = 9;
          return userModel.findOne({
            where: {
              userId: userId
            }
          });
        case 9:
          user = _context5.sent;
          cov_wpj6tchq0().s[47]++;
          _context5.next = 13;
          return user.update({
            userVerified: true
          }, {
            where: {
              id: userId
            }
          });
        case 13:
          cov_wpj6tchq0().s[48]++;
          return _context5.abrupt("return", res.status(200).send({
            message: "Email verification successfull"
          })["catch"](function (error) {
            cov_wpj6tchq0().f[11]++;
            cov_wpj6tchq0().s[49]++;
            return res.status(400).send({
              error: "error"
            });
          }));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](2);
          cov_wpj6tchq0().s[50]++;
          return _context5.abrupt("return", res.status(500).send({
            message: "Email verification failed."
          }));
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 17]]);
  }));
  return function verifyUser(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.verifyUser = verifyUser;
cov_wpj6tchq0().s[51]++;
var subscribeMsg = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var userToken, decode, email, id, token, message;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          cov_wpj6tchq0().f[12]++;
          cov_wpj6tchq0().s[52]++;
          _context6.prev = 2;
          userToken = (cov_wpj6tchq0().s[53]++, (0, _checkToken["default"])(req));
          decode = (cov_wpj6tchq0().s[54]++, (0, _userHelper.decodeToken)(userToken));
          email = (cov_wpj6tchq0().s[55]++, decode.email);
          id = (cov_wpj6tchq0().s[56]++, decode.userId);
          token = (cov_wpj6tchq0().s[57]++, (0, _userHelper.generateToken)({
            userId: id
          }, "1d"));
          message = (cov_wpj6tchq0().s[58]++, "\n        <h2>Got subscription token.</h2>\n        <p>Copy the following token::: <em>".concat(token, "</em></p>\n        "));
          cov_wpj6tchq0().s[59]++;
          (0, _nodemailer.sendTweet)(message, email);
          cov_wpj6tchq0().s[60]++;
          return _context6.abrupt("return", res.send({
            msg: "Sent subscr..."
          }));
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](2);
          cov_wpj6tchq0().s[61]++;
          return _context6.abrupt("return", res.status(500).send({
            message: "".concat(_context6.t0)
          }));
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 15]]);
  }));
  return function subscribeMsg(_x9, _x10) {
    return _ref9.apply(this, arguments);
  };
}();
exports.subscribeMsg = subscribeMsg;
cov_wpj6tchq0().s[62]++;
var subscribe = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _ref11, token, userInfo, userId, user;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          cov_wpj6tchq0().f[13]++;
          cov_wpj6tchq0().s[63]++;
          _context7.prev = 2;
          _ref11 = (cov_wpj6tchq0().s[64]++, req.params), token = _ref11.token;
          userInfo = (cov_wpj6tchq0().s[65]++, (0, _userHelper.decodeToken)(token));
          userId = (cov_wpj6tchq0().s[66]++, userInfo.userId);
          cov_wpj6tchq0().s[67]++;
          _context7.next = 9;
          return userModel.findOne({
            where: {
              userId: userId
            }
          });
        case 9:
          user = _context7.sent;
          cov_wpj6tchq0().s[68]++;
          _context7.next = 13;
          return user.update({
            isSubscribed: true
          }, {
            where: {
              id: userId
            }
          });
        case 13:
          cov_wpj6tchq0().s[69]++;
          return _context7.abrupt("return", res.status(200).send({
            message: "You have successfully subscribed to our page."
          }));
        case 17:
          _context7.prev = 17;
          _context7.t0 = _context7["catch"](2);
          cov_wpj6tchq0().s[70]++;
          return _context7.abrupt("return", res.status(404).send({
            message: "".concat(_context7.t0)
          }));
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 17]]);
  }));
  return function subscribe(_x11, _x12) {
    return _ref10.apply(this, arguments);
  };
}();
exports.subscribe = subscribe;
cov_wpj6tchq0().s[71]++;
var getUsers = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pageAsNbr, sizeASNbr, page, size;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          cov_wpj6tchq0().f[14]++;
          cov_wpj6tchq0().s[72]++;
          _context8.prev = 2;
          pageAsNbr = (cov_wpj6tchq0().s[73]++, Number.parseInt(req.query.page));
          sizeASNbr = (cov_wpj6tchq0().s[74]++, Number.parseInt(req.query.size));
          page = (cov_wpj6tchq0().s[75]++, 0);
          cov_wpj6tchq0().s[76]++;
          if ((cov_wpj6tchq0().b[5][0]++, !Number.isNaN(pageAsNbr)) && (cov_wpj6tchq0().b[5][1]++, pageAsNbr > 0)) {
            cov_wpj6tchq0().b[4][0]++;
            cov_wpj6tchq0().s[77]++;
            page = pageAsNbr;
          } else {
            cov_wpj6tchq0().b[4][1]++;
          }
          size = (cov_wpj6tchq0().s[78]++, 20);
          cov_wpj6tchq0().s[79]++;
          if ((cov_wpj6tchq0().b[7][0]++, !Number.isNaN(sizeASNbr)) && (cov_wpj6tchq0().b[7][1]++, sizeASNbr > 0) && (cov_wpj6tchq0().b[7][2]++, size < 100)) {
            cov_wpj6tchq0().b[6][0]++;
            cov_wpj6tchq0().s[80]++;
            size = sizeASNbr;
          } else {
            cov_wpj6tchq0().b[6][1]++;
          }
          cov_wpj6tchq0().s[81]++;
          _context8.next = 14;
          return userModel.findAndCountAll({
            limit: size,
            offset: page * size,
            order: [["roleId", "ASC"]],
            include: [{
              model: _models["default"].Profile,
              as: "Profile",
              // attributes: ["profileId"],
              include: [{
                model: _models["default"].Address,
                as: "Address"
                // attributes: ["addressId"],
              }]
            }, {
              model: _models["default"].Category,
              as: "Categories"
            }, {
              model: _models["default"].Company,
              as: "Companies"
            }, {
              model: _models["default"].ProductComment,
              as: "ProductComments",
              attributes: ["comment"],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                attributes: ["productName"]
              }]
            }, {
              model: _models["default"].UserArticle,
              as: "UserArticles",
              attributes: ["article", "userArticleId"],
              include: [(0, _defineProperty2["default"])({
                model: _models["default"].UserComment,
                as: "UserComments",
                attributes: ["comment"],
                include: [{
                  model: _models["default"].User,
                  as: "Users",
                  attributes: ["email"]
                }]
              }, "include", [{
                model: _models["default"].Reply,
                as: "Replies",
                attributes: ["reply"]
              }])]
            }, {
              model: _models["default"].Review,
              as: "Reviews",
              attributes: ["review", "rate"]
            }]
          }).then(function (data) {
            cov_wpj6tchq0().f[15]++;
            cov_wpj6tchq0().s[82]++;
            return res.status(200).send({
              message: "Fetched all Users",
              body: data.rows,
              totalPages: Math.ceil(data.count / size),
              currentPage: page + 1,
              count: data.count
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[16]++;
            cov_wpj6tchq0().s[83]++;
            return res.status(400).send({
              message: "ERROR",
              err: err
            });
          });
        case 14:
          _context8.next = 20;
          break;
        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](2);
          cov_wpj6tchq0().s[84]++;
          return _context8.abrupt("return", res.status(500).send({
            message: "".concat(_context8.t0)
          }));
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 16]]);
  }));
  return function getUsers(_x13, _x14) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getUsers = getUsers;
cov_wpj6tchq0().s[85]++;
var getOneUser = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          cov_wpj6tchq0().f[17]++;
          cov_wpj6tchq0().s[86]++;
          _context9.prev = 2;
          id = (cov_wpj6tchq0().s[87]++, req.params.id);
          cov_wpj6tchq0().s[88]++;
          _context9.next = 7;
          return userModel.findOne({
            where: {
              email: id
            },
            include: [{
              model: _models["default"].Profile,
              as: "Profiles",
              include: [{
                model: _models["default"].Address,
                as: "Addresses"
              }]
            }, {
              model: _models["default"].Category,
              as: "Categories"
            }, {
              model: _models["default"].ProductComment,
              as: "ProductComments",
              attributes: ["comment"],
              include: [{
                model: _models["default"].Product,
                as: "Products",
                attributes: ["productName"]
              }]
            }, {
              model: _models["default"].UserArticle,
              as: "UserArticles",
              attributes: ["article", "userArticleId"],
              include: [(0, _defineProperty2["default"])({
                model: _models["default"].UserComment,
                as: "UserComments",
                attributes: ["comment"],
                include: [{
                  model: _models["default"].User,
                  as: "Users",
                  attributes: ["email"]
                }]
              }, "include", [{
                model: _models["default"].Reply,
                as: "Replies",
                attributes: ["reply"]
              }])]
            }, {
              model: _models["default"].Review,
              as: "Reviews",
              attributes: ["review", "rate"]
            }]
          }).then(function (data) {
            cov_wpj6tchq0().f[18]++;
            cov_wpj6tchq0().s[89]++;
            return res.status(200).send(data);
          })["catch"](function (error) {
            cov_wpj6tchq0().f[19]++;
            cov_wpj6tchq0().s[90]++;
            return res.send({
              message: "failed to get ".concat(error)
            });
          });
        case 7:
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](2);
          cov_wpj6tchq0().s[91]++;
          return _context9.abrupt("return", res.status(500).send({
            message: "".concat(_context9.t0)
          }));
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 9]]);
  }));
  return function getOneUser(_x15, _x16) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getOneUser = getOneUser;
cov_wpj6tchq0().s[92]++;
var updateUser = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          cov_wpj6tchq0().f[20]++;
          cov_wpj6tchq0().s[93]++;
          _context10.prev = 2;
          id = (cov_wpj6tchq0().s[94]++, req.params.id);
          cov_wpj6tchq0().s[95]++;
          _context10.next = 7;
          return userModel.update(req.body, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            where: {
              userId: id
            }
          }).then(function (data) {
            cov_wpj6tchq0().f[21]++;
            cov_wpj6tchq0().s[96]++;
            return res.status(200).send({
              message: "User updated successfully!",
              data: data
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[22]++;
            cov_wpj6tchq0().s[97]++;
            return res.status(400).send({
              message: "An error occured while updating User! The role or category assigned might be unavailable."
            });
          });
        case 7:
          _context10.next = 13;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](2);
          cov_wpj6tchq0().s[98]++;
          return _context10.abrupt("return", res.status(500).send({
            message: "".concat(_context10.t0)
          }));
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 9]]);
  }));
  return function updateUser(_x17, _x18) {
    return _ref16.apply(this, arguments);
  };
}();
exports.updateUser = updateUser;
cov_wpj6tchq0().s[99]++;
var deleteUser = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          cov_wpj6tchq0().f[23]++;
          cov_wpj6tchq0().s[100]++;
          _context11.prev = 2;
          cov_wpj6tchq0().s[101]++;
          _context11.next = 6;
          return userModel.destroy({
            where: {},
            truncate: false
          }).then(function (data) {
            cov_wpj6tchq0().f[24]++;
            cov_wpj6tchq0().s[102]++;
            return res.status(200).send({
              message: "Deleted"
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[25]++;
            cov_wpj6tchq0().s[103]++;
            return res.status(400).send({
              message: "Failed ".concat(err)
            });
          });
        case 6:
          _context11.next = 12;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](2);
          cov_wpj6tchq0().s[104]++;
          return _context11.abrupt("return", res.status(500).send({
            message: "".concat(_context11.t0)
          }));
        case 12:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 8]]);
  }));
  return function deleteUser(_x19, _x20) {
    return _ref17.apply(this, arguments);
  };
}();
exports.deleteUser = deleteUser;
cov_wpj6tchq0().s[105]++;
var deleteOneUser = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          cov_wpj6tchq0().f[26]++;
          cov_wpj6tchq0().s[106]++;
          _context12.prev = 2;
          id = (cov_wpj6tchq0().s[107]++, req.params.id);
          cov_wpj6tchq0().s[108]++;
          _context12.next = 7;
          return userModel.destroy({
            where: {
              userId: id
            }
          }).then(function (data) {
            cov_wpj6tchq0().f[27]++;
            cov_wpj6tchq0().s[109]++;
            if (data == 1) {
              cov_wpj6tchq0().b[8][0]++;
              cov_wpj6tchq0().s[110]++;
              return res.status(200).send({
                message: "User has been deleted successfully"
              });
            } else {
              cov_wpj6tchq0().b[8][1]++;
            }
            cov_wpj6tchq0().s[111]++;
            return res.status(400).send({
              message: "Failed to delete this user!"
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[28]++;
            cov_wpj6tchq0().s[112]++;
            return res.status(400).send({
              err: err
            });
          });
        case 7:
          _context12.next = 13;
          break;
        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12["catch"](2);
          cov_wpj6tchq0().s[113]++;
          return _context12.abrupt("return", res.status(500).send({
            message: "".concat(_context12.t0)
          }));
        case 13:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[2, 9]]);
  }));
  return function deleteOneUser(_x21, _x22) {
    return _ref18.apply(this, arguments);
  };
}();
exports.deleteOneUser = deleteOneUser;
cov_wpj6tchq0().s[114]++;
var userLogin = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var user, userExist, verified, validation, token;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          cov_wpj6tchq0().f[29]++;
          cov_wpj6tchq0().s[115]++;
          _context13.prev = 2;
          cov_wpj6tchq0().s[116]++;
          _context13.next = 6;
          return req.body;
        case 6:
          user = _context13.sent;
          cov_wpj6tchq0().s[117]++;
          _context13.next = 10;
          return userModel.findOne({
            where: {
              email: user.email
            }
          });
        case 10:
          userExist = _context13.sent;
          verified = (cov_wpj6tchq0().s[118]++, userExist.userVerified);
          cov_wpj6tchq0().s[119]++;
          _context13.next = 15;
          return (0, _userHelper.comparePassword)(req.body.password, userExist.password);
        case 15:
          validation = _context13.sent;
          cov_wpj6tchq0().s[120]++;
          if (!validation) {
            _context13.next = 35;
            break;
          }
          cov_wpj6tchq0().b[9][0]++;
          cov_wpj6tchq0().s[121]++;
          if (verified) {
            _context13.next = 26;
            break;
          }
          cov_wpj6tchq0().b[10][0]++;
          cov_wpj6tchq0().s[122]++;
          return _context13.abrupt("return", res.status(401).send({
            message: "Please reach to your email and click the verify email button to proceed!!!"
          }));
        case 26:
          cov_wpj6tchq0().b[10][1]++;
        case 27:
          cov_wpj6tchq0().s[123]++;
          _context13.next = 30;
          return (0, _userHelper.generateToken)({
            email: userExist.email,
            userId: userExist.userId,
            firstName: userExist.firstName,
            lastName: userExist.lastName
          }, "1d");
        case 30:
          token = _context13.sent;
          cov_wpj6tchq0().s[124]++;
          return _context13.abrupt("return", res.status(200).header("authenticate", token).send({
            message: "Logged in successfully",
            token: token,
            roleId: userExist.roleId,
            userId: userExist.userId,
            firstName: userExist.firstName,
            lastName: userExist.lastName
          }));
        case 35:
          cov_wpj6tchq0().b[9][1]++;
        case 36:
          cov_wpj6tchq0().s[125]++;
          return _context13.abrupt("return", res.status(400).send({
            error: "Incorrect password"
          }));
        case 40:
          _context13.prev = 40;
          _context13.t0 = _context13["catch"](2);
          cov_wpj6tchq0().s[126]++;
          return _context13.abrupt("return", res.status(404).send({
            error: "Invalid credentials."
          }));
        case 44:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 40]]);
  }));
  return function userLogin(_x23, _x24) {
    return _ref19.apply(this, arguments);
  };
}();
exports.userLogin = userLogin;
cov_wpj6tchq0().s[127]++;
var resetLink = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var userExist, token, message;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          cov_wpj6tchq0().f[30]++;
          cov_wpj6tchq0().s[128]++;
          _context14.prev = 2;
          cov_wpj6tchq0().s[129]++;
          _context14.next = 6;
          return userModel.findOne({
            where: {
              email: req.body.email
            }
          });
        case 6:
          userExist = _context14.sent;
          cov_wpj6tchq0().s[130]++;
          if (userExist) {
            _context14.next = 14;
            break;
          }
          cov_wpj6tchq0().b[11][0]++;
          cov_wpj6tchq0().s[131]++;
          return _context14.abrupt("return", res.status(404).send({
            message: "This user does not exist!!!"
          }));
        case 14:
          cov_wpj6tchq0().b[11][1]++;
        case 15:
          token = (cov_wpj6tchq0().s[132]++, _jsonwebtoken["default"].sign({
            id: userExist.userId
          }, process.env.SECRETE, {
            expiresIn: "1d"
          }));
          message = (cov_wpj6tchq0().s[133]++, "\n          <h2>First step to reseting your password.</h2>\n        <p>Copy the following token::: <em>".concat(process.env.FRONTEND_URL, "/resetPassword?token=").concat(token, "</em></p>\n        "));
          cov_wpj6tchq0().s[134]++;
          (0, _nodemailer.sendEmail)(message, userExist.email);
          cov_wpj6tchq0().s[135]++;
          return _context14.abrupt("return", res.status(200).send({
            message: "Reset password message sent!"
          }));
        case 23:
          _context14.prev = 23;
          _context14.t0 = _context14["catch"](2);
          cov_wpj6tchq0().s[136]++;
          return _context14.abrupt("return", res.status(500).send({
            message: "".concat(_context14.t0)
          }));
        case 27:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 23]]);
  }));
  return function resetLink(_x25, _x26) {
    return _ref20.apply(this, arguments);
  };
}();
exports.resetLink = resetLink;
cov_wpj6tchq0().s[137]++;
var resetPwd = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var password, confirm_pass, _ref22, token, userId;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          cov_wpj6tchq0().f[31]++;
          cov_wpj6tchq0().s[138]++;
          _context15.prev = 2;
          password = (cov_wpj6tchq0().s[139]++, req.body.password);
          confirm_pass = (cov_wpj6tchq0().s[140]++, req.body.confirm_pass);
          cov_wpj6tchq0().s[141]++;
          if (!(confirm_pass != password)) {
            _context15.next = 12;
            break;
          }
          cov_wpj6tchq0().b[12][0]++;
          cov_wpj6tchq0().s[142]++;
          return _context15.abrupt("return", res.status(400).send({
            message: "The passords you provided do not match!!!"
          }));
        case 12:
          cov_wpj6tchq0().b[12][1]++;
        case 13:
          _ref22 = (cov_wpj6tchq0().s[143]++, req.params), token = _ref22.token;
          userId = (cov_wpj6tchq0().s[144]++, _jsonwebtoken["default"].verify(token, process.env.SECRETE).id);
          cov_wpj6tchq0().s[145]++;
          _context15.next = 18;
          return userModel.update({
            password: (0, _userHelper.hashPassword)(password)
          }, {
            where: {
              userId: userId
            }
          }).then(function (data) {
            cov_wpj6tchq0().f[32]++;
            cov_wpj6tchq0().s[146]++;
            if (data == 1) {
              cov_wpj6tchq0().b[13][0]++;
              cov_wpj6tchq0().s[147]++;
              return res.status(200).send({
                message: "Password changed successfully!!!",
                data: data
              });
            } else {
              cov_wpj6tchq0().b[13][1]++;
            }
            cov_wpj6tchq0().s[148]++;
            return res.status(400).send({
              message: "Password reset failed!!!",
              data: data
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[33]++;
            cov_wpj6tchq0().s[149]++;
            return res.status(500).send(err);
          });
        case 18:
          _context15.next = 24;
          break;
        case 20:
          _context15.prev = 20;
          _context15.t0 = _context15["catch"](2);
          cov_wpj6tchq0().s[150]++;
          return _context15.abrupt("return", res.status(500).send({
            message: "".concat(_context15.t0)
          }));
        case 24:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 20]]);
  }));
  return function resetPwd(_x27, _x28) {
    return _ref21.apply(this, arguments);
  };
}();
exports.resetPwd = resetPwd;
cov_wpj6tchq0().s[151]++;
var createReview = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var token, decode, id, _ref24, rate;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          cov_wpj6tchq0().f[34]++;
          cov_wpj6tchq0().s[152]++;
          _context16.prev = 2;
          token = (cov_wpj6tchq0().s[153]++, (0, _checkToken["default"])(req));
          decode = (cov_wpj6tchq0().s[154]++, (0, _userHelper.decodeToken)(token));
          id = (cov_wpj6tchq0().s[155]++, decode.userId);
          _ref24 = (cov_wpj6tchq0().s[156]++, req.body), rate = _ref24.rate;
          cov_wpj6tchq0().s[157]++;
          if (!(rate > 5.0)) {
            _context16.next = 14;
            break;
          }
          cov_wpj6tchq0().b[14][0]++;
          cov_wpj6tchq0().s[158]++;
          return _context16.abrupt("return", res.send({
            message: "You can't rate beyond 5.0 please"
          }));
        case 14:
          cov_wpj6tchq0().b[14][1]++;
        case 15:
          cov_wpj6tchq0().s[159]++;
          if (!(rate < 1.0)) {
            _context16.next = 22;
            break;
          }
          cov_wpj6tchq0().b[15][0]++;
          cov_wpj6tchq0().s[160]++;
          return _context16.abrupt("return", res.send({
            message: "You can't rate below 1.0 please"
          }));
        case 22:
          cov_wpj6tchq0().b[15][1]++;
        case 23:
          cov_wpj6tchq0().s[161]++;
          _context16.next = 26;
          return reviewModel.destroy({
            where: {
              userId: id
            }
          })["catch"](function (err) {
            cov_wpj6tchq0().f[35]++;
            cov_wpj6tchq0().s[162]++;
            return res.status(500).send({
              message: "err"
            });
          });
        case 26:
          cov_wpj6tchq0().s[163]++;
          _context16.next = 29;
          return reviewModel.create({
            userId: id,
            review: req.body.review,
            rate: req.body.rate
          }).then(function (data) {
            cov_wpj6tchq0().f[36]++;
            cov_wpj6tchq0().s[164]++;
            return res.status(200).send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[37]++;
            cov_wpj6tchq0().s[165]++;
            return res.status(500).send({
              message: "err"
            });
          });
        case 29:
          _context16.next = 35;
          break;
        case 31:
          _context16.prev = 31;
          _context16.t0 = _context16["catch"](2);
          cov_wpj6tchq0().s[166]++;
          return _context16.abrupt("return", res.status(500).send({
            message: "".concat(_context16.t0)
          }));
        case 35:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 31]]);
  }));
  return function createReview(_x29, _x30) {
    return _ref23.apply(this, arguments);
  };
}();
exports.createReview = createReview;
cov_wpj6tchq0().s[167]++;
var getReviews = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          cov_wpj6tchq0().f[38]++;
          cov_wpj6tchq0().s[168]++;
          _context17.prev = 2;
          cov_wpj6tchq0().s[169]++;
          _context17.next = 6;
          return reviewModel.findAndCountAll({
            include: [{
              model: _models["default"].User,
              as: "Users",
              include: [{
                model: _models["default"].Profile,
                as: "Profiles",
                include: [{
                  model: _models["default"].Address,
                  as: "Addresses"
                }]
              }]
            }]
          }).then(function (data) {
            cov_wpj6tchq0().f[39]++;
            var dt = (cov_wpj6tchq0().s[170]++, data.rows.map(function (iti) {
              cov_wpj6tchq0().f[40]++;
              cov_wpj6tchq0().s[171]++;
              return iti.rate;
            }));
            cov_wpj6tchq0().s[172]++;
            return res.status(200).send({
              message: "success",
              data: data
            });
          })["catch"](function (err) {
            cov_wpj6tchq0().f[41]++;
            cov_wpj6tchq0().s[173]++;
            return res.status(500).send({
              message: "".concat(err)
            });
          });
        case 6:
          _context17.next = 12;
          break;
        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](2);
          cov_wpj6tchq0().s[174]++;
          return _context17.abrupt("return", res.status(500).send({
            message: "".concat(_context17.t0)
          }));
        case 12:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 8]]);
  }));
  return function getReviews(_x31, _x32) {
    return _ref25.apply(this, arguments);
  };
}();
exports.getReviews = getReviews;
cov_wpj6tchq0().s[175]++;
var deleteReviews = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          cov_wpj6tchq0().f[42]++;
          cov_wpj6tchq0().s[176]++;
          _context18.next = 4;
          return reviewModel.destroy({
            where: {}
          }).then(function (data) {
            cov_wpj6tchq0().f[43]++;
            cov_wpj6tchq0().s[177]++;
            if (data === 1) {
              cov_wpj6tchq0().b[16][0]++;
              cov_wpj6tchq0().s[178]++;
              return res.status(200).send({
                message: "Deleted ".concat(data, " review successfully!")
              });
            } else {
              cov_wpj6tchq0().b[16][1]++;
              cov_wpj6tchq0().s[179]++;
              if (data === 0) {
                cov_wpj6tchq0().b[17][0]++;
                cov_wpj6tchq0().s[180]++;
                return res.status(403).send({
                  message: "You don't have any more reviews to delete!"
                });
              } else {
                cov_wpj6tchq0().b[17][1]++;
                cov_wpj6tchq0().s[181]++;
                return res.status(200).send({
                  message: "Deleted ".concat(data, " reviews successfully!"),
                  data: data
                });
              }
            }
          })["catch"](function (err) {
            cov_wpj6tchq0().f[44]++;
            cov_wpj6tchq0().s[182]++;
            return res.status(400).send({
              message: "Failed ".concat(err)
            });
          });
        case 4:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function deleteReviews(_x33, _x34) {
    return _ref26.apply(this, arguments);
  };
}();
exports.deleteReviews = deleteReviews;