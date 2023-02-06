"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _tweetController = require("../../controllers/tweetController.js");
var _productMiddleware = require("../../middlewares/productMiddleware.js");
var _multer = _interopRequireDefault(require("../../helpers/multer.js"));
function cov_m6nty8t49() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\tweetRoutes.js";
  var hash = "648ec49fbab74d5ebaacc9f8915aadbd9fbc657d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\tweetRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 31
        }
      },
      "1": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 60
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 27
        }
      },
      "3": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 33
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "648ec49fbab74d5ebaacc9f8915aadbd9fbc657d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_m6nty8t49 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_m6nty8t49();
var router = (cov_m6nty8t49().s[0]++, _express["default"].Router());
cov_m6nty8t49().s[1]++;
router.post("/", _multer["default"].single("image"), _productMiddleware.Auth, _tweetController.createTweet);
cov_m6nty8t49().s[2]++;
router.get("/", _tweetController.getTweets);
cov_m6nty8t49().s[3]++;
router["delete"]("/", _tweetController.deleteTweets);
var _default = router;
exports["default"] = _default;