"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("../../helpers/multer"));
var _clientMiddleware = _interopRequireDefault(require("../../middlewares/clientMiddleware"));
var _articleController = require("../../controllers/articleController");
function cov_1xv20uu1ro() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\articleRoutes.js";
  var hash = "6350767b75ac66cb4614e83c1c3ce9f8d3fb8360";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\articleRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "1": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 68
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 29
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6350767b75ac66cb4614e83c1c3ce9f8d3fb8360"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xv20uu1ro = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1xv20uu1ro();
var router = (cov_1xv20uu1ro().s[0]++, _express["default"].Router());
cov_1xv20uu1ro().s[1]++;
router.post("/", _multer["default"].single("image"), _clientMiddleware["default"], _articleController.createArticle);
cov_1xv20uu1ro().s[2]++;
router.get("/", _articleController.getArticles);
var _default = router;
exports["default"] = _default;