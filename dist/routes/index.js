"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryRoutes = _interopRequireDefault(require("./api/categoryRoutes.js"));
var _productRoutes = _interopRequireDefault(require("./api/productRoutes"));
var _productImagesRoutes = _interopRequireDefault(require("./api/productImagesRoutes.js"));
var _classRoutes = _interopRequireDefault(require("./api/classRoutes"));
var _userRoutes = _interopRequireDefault(require("./api/userRoutes"));
var _roleRoutes = _interopRequireDefault(require("./api/roleRoutes"));
var _assignUserToCategory = _interopRequireDefault(require("./api/assignUserToCategory"));
var _commentRoutes = _interopRequireDefault(require("./api/commentRoutes"));
var _articleRoutes = _interopRequireDefault(require("./api/articleRoutes"));
var _articleCommentRoutes = _interopRequireDefault(require("./api/articleCommentRoutes"));
var _tweetRoutes = _interopRequireDefault(require("./api/tweetRoutes"));
var _subscribeRoutes = _interopRequireDefault(require("./api/subscribeRoutes"));
var _reviewRoutes = _interopRequireDefault(require("./api/reviewRoutes"));
var _replyRoutes = _interopRequireDefault(require("./api/replyRoutes.js"));
var _rateRoutes = _interopRequireDefault(require("./api/rateRoutes.js"));
var _assignClassToCategory = _interopRequireDefault(require("./api/assignClassToCategory.js"));
var _assignProductToClass = _interopRequireDefault(require("./api/assignProductToClass.js"));
var _companyRoutes = _interopRequireDefault(require("./api/companyRoutes"));
var _comodityRoutes = _interopRequireDefault(require("./api/comodityRoutes"));
var _profileRoutes = _interopRequireDefault(require("./api/profileRoutes.js"));
function cov_1d0t9qg3nr() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\index.js";
  var hash = "3524b7375a688252bb1a9b98f0b604b753584c4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 23,
          column: 31
        }
      },
      "1": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "2": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 34
        }
      },
      "3": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 39
        }
      },
      "4": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 31,
          column: 43
        }
      },
      "5": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 33
        }
      },
      "6": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
          column: 38
        }
      },
      "7": {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 37,
          column: 38
        }
      },
      "8": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 42
        }
      },
      "9": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 41,
          column: 42
        }
      },
      "10": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 33
        }
      },
      "11": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 45,
          column: 50
        }
      },
      "12": {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 47,
          column: 52
        }
      },
      "13": {
        start: {
          line: 49,
          column: 0
        },
        end: {
          line: 49,
          column: 50
        }
      },
      "14": {
        start: {
          line: 51,
          column: 0
        },
        end: {
          line: 51,
          column: 38
        }
      },
      "15": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 34
        }
      },
      "16": {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 55,
          column: 38
        }
      },
      "17": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 57,
          column: 53
        }
      },
      "18": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 59,
          column: 34
        }
      },
      "19": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 61,
          column: 36
        }
      },
      "20": {
        start: {
          line: 63,
          column: 0
        },
        end: {
          line: 63,
          column: 32
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3524b7375a688252bb1a9b98f0b604b753584c4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d0t9qg3nr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1d0t9qg3nr();
var router = (cov_1d0t9qg3nr().s[0]++, _express["default"].Router());
cov_1d0t9qg3nr().s[1]++;
router.use("/categories", _categoryRoutes["default"]);
cov_1d0t9qg3nr().s[2]++;
router.use("/class", _classRoutes["default"]);
cov_1d0t9qg3nr().s[3]++;
router.use("/products", _productRoutes["default"]);
cov_1d0t9qg3nr().s[4]++;
router.use("/images", _productImagesRoutes["default"]);
cov_1d0t9qg3nr().s[5]++;
router.use("/users", _userRoutes["default"]);
cov_1d0t9qg3nr().s[6]++;
router.use("/profile", _profileRoutes["default"]);
cov_1d0t9qg3nr().s[7]++;
router.use("/company", _companyRoutes["default"]);
cov_1d0t9qg3nr().s[8]++;
router.use("/comodities", _comodityRoutes["default"]);
cov_1d0t9qg3nr().s[9]++;
router.use("/subscribe", _subscribeRoutes["default"]);
cov_1d0t9qg3nr().s[10]++;
router.use("/roles", _roleRoutes["default"]);
cov_1d0t9qg3nr().s[11]++;
router.use("/user_category", _assignUserToCategory["default"]);
cov_1d0t9qg3nr().s[12]++;
router.use("/category_class", _assignClassToCategory["default"]);
cov_1d0t9qg3nr().s[13]++;
router.use("/class_product", _assignProductToClass["default"]);
cov_1d0t9qg3nr().s[14]++;
router.use("/comment", _commentRoutes["default"]);
cov_1d0t9qg3nr().s[15]++;
router.use("/reply", _replyRoutes["default"]);
cov_1d0t9qg3nr().s[16]++;
router.use("/article", _articleRoutes["default"]);
cov_1d0t9qg3nr().s[17]++;
router.use("/article_comment", _articleCommentRoutes["default"]);
cov_1d0t9qg3nr().s[18]++;
router.use("/tweet", _tweetRoutes["default"]);
cov_1d0t9qg3nr().s[19]++;
router.use("/review", _reviewRoutes["default"]);
cov_1d0t9qg3nr().s[20]++;
router.use("/rate", _rateRoutes["default"]);
var _default = router;
exports["default"] = _default;