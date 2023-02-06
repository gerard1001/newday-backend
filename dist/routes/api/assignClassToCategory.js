"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryClassController = require("../../controllers/categoryClassController.js");
var _productMiddleware = require("../../middlewares/productMiddleware");
function cov_137e2810ay() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\assignClassToCategory.js";
  var hash = "65d9ed0ed98004acf5d235da420ec6b9f65d0f58";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\assignClassToCategory.js",
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
          column: 36
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 32
        }
      },
      "3": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 37
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
    hash: "65d9ed0ed98004acf5d235da420ec6b9f65d0f58"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_137e2810ay = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_137e2810ay();
var router = (cov_137e2810ay().s[0]++, _express["default"].Router());
cov_137e2810ay().s[1]++;
router.post("/", _productMiddleware.Auth, _categoryClassController.assignClass);
cov_137e2810ay().s[2]++;
router.get("/", _categoryClassController.getAssignments);
cov_137e2810ay().s[3]++;
router.get("/:id", _categoryClassController.getOneAssignment);
var _default = router;
exports["default"] = _default;