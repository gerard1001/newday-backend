"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userCategoryController = require("../../controllers/userCategoryController");
var _userMiddleware = require("../../middlewares/userMiddleware");
function cov_1oh4bbcx32() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\assignUserToCategory.js";
  var hash = "10531ca768968b80bf7f16e01908a24d02dcd797";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\assignUserToCategory.js",
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
          column: 35
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
    hash: "10531ca768968b80bf7f16e01908a24d02dcd797"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oh4bbcx32 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1oh4bbcx32();
var router = (cov_1oh4bbcx32().s[0]++, _express["default"].Router());
cov_1oh4bbcx32().s[1]++;
router.post("/", _userMiddleware.Auth, _userCategoryController.assignUser);
cov_1oh4bbcx32().s[2]++;
router.get("/", _userCategoryController.getAssignments);
cov_1oh4bbcx32().s[3]++;
router.get("/:id", _userCategoryController.getOneAssignment);
var _default = router;
exports["default"] = _default;