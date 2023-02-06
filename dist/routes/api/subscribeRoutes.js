"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../../controllers/userController.js");
var _userMiddleware = require("../../middlewares/userMiddleware");
function cov_fkj575z8m() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\subscribeRoutes.js";
  var hash = "b533c1b65f8d773e915b829f2c93e6b433ac24de";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\subscribeRoutes.js",
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
          column: 39
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 33
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
    hash: "b533c1b65f8d773e915b829f2c93e6b433ac24de"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fkj575z8m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_fkj575z8m();
var router = (cov_fkj575z8m().s[0]++, _express["default"].Router());
cov_fkj575z8m().s[1]++;
router.get("/", _userMiddleware.authent, _userController.subscribeMsg);
cov_fkj575z8m().s[2]++;
router.get("/:token", _userController.subscribe);
var _default = router;
exports["default"] = _default;