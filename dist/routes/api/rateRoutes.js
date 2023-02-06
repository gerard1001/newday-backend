"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _ratingController = require("../../controllers/ratingController.js");
function cov_2hzvgzgu13() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\rateRoutes.js";
  var hash = "232bed64c755c2fd06e30ecc80a47f5ce5b7894f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\rateRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 31
        }
      },
      "1": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "2": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
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
    hash: "232bed64c755c2fd06e30ecc80a47f5ce5b7894f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hzvgzgu13 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hzvgzgu13();
var router = (cov_2hzvgzgu13().s[0]++, _express["default"].Router());
cov_2hzvgzgu13().s[1]++;
router.get("/", _ratingController.getRating);
cov_2hzvgzgu13().s[2]++;
router.get("/see", _ratingController.fetchRatings);
var _default = router;
exports["default"] = _default;