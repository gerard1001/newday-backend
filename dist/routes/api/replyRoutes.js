"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _articleCommentController = require("../../controllers/articleCommentController.js");
var _clientMiddleware = _interopRequireDefault(require("../../middlewares/clientMiddleware.js"));
function cov_srxx8pno8() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\replyRoutes.js";
  var hash = "f5399a4109f0e710b10bf0a06988d00573fcdd23";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\replyRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 31
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 42
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f5399a4109f0e710b10bf0a06988d00573fcdd23"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_srxx8pno8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_srxx8pno8();
var router = (cov_srxx8pno8().s[0]++, _express["default"].Router());
cov_srxx8pno8().s[1]++;
router.post("/", _clientMiddleware["default"], _articleCommentController.createReply);
var _default = router;
exports["default"] = _default;