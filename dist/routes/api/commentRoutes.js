"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _commentController = require("../../controllers/commentController.js");
var _clientMiddleware = _interopRequireDefault(require("../../middlewares/clientMiddleware.js"));
function cov_2ip1oz6quv() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\commentRoutes.js";
  var hash = "20ba29d8a8084ab9e9d034ad43b1d2918b814950";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\commentRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 7,
          column: 31
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 44
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
    hash: "20ba29d8a8084ab9e9d034ad43b1d2918b814950"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ip1oz6quv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ip1oz6quv();
var router = (cov_2ip1oz6quv().s[0]++, _express["default"].Router());
cov_2ip1oz6quv().s[1]++;
router.post("/", _clientMiddleware["default"], _commentController.createComment);
var _default = router;
exports["default"] = _default;