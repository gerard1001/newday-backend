"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../../controllers/userController");
var _userMiddleware = require("../../middlewares/userMiddleware");
function cov_2h00bffthx() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\reviewRoutes.js";
  var hash = "85411b0078a4fb2430da797bf679100a51a63f9a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\reviewRoutes.js",
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
          column: 40
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 28
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 46
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
    hash: "85411b0078a4fb2430da797bf679100a51a63f9a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h00bffthx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2h00bffthx();
var router = (cov_2h00bffthx().s[0]++, _express["default"].Router());
cov_2h00bffthx().s[1]++;
router.post("/", _userMiddleware.authent, _userController.createReview);
cov_2h00bffthx().s[2]++;
router.get("/", _userController.getReviews);
cov_2h00bffthx().s[3]++;
router["delete"]("/", _userMiddleware.reviewAuth, _userController.deleteReviews);
var _default = router;
exports["default"] = _default;