"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _clientMiddleware = _interopRequireDefault(require("../../middlewares/clientMiddleware"));
var _articleCommentController = require("../../controllers/articleCommentController.js");
function cov_1bgnlj66vo() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\articleCommentRoutes.js";
  var hash = "45bb5b4232aa12a723df7da6067e10d25318c3be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\articleCommentRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 8,
          column: 31
        }
      },
      "1": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
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
    hash: "45bb5b4232aa12a723df7da6067e10d25318c3be"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bgnlj66vo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bgnlj66vo();
var router = (cov_1bgnlj66vo().s[0]++, _express["default"].Router());
cov_1bgnlj66vo().s[1]++;
router.post("/", _clientMiddleware["default"], _articleCommentController.postComment);
cov_1bgnlj66vo().s[2]++;
router.get("/", _articleCommentController.getComments);
var _default = router;
exports["default"] = _default;