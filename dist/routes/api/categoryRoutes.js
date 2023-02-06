"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryController = require("../../controllers/categoryController");
var _productMiddleware = require("../../middlewares/productMiddleware");
function cov_2454b0jtqe() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\categoryRoutes.js";
  var hash = "1aa548614bfde4f57fd366f7a143e78aeeb26d91";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\categoryRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 31
        }
      },
      "1": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "3": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 35
        }
      },
      "4": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 38
        }
      },
      "5": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 35
        }
      },
      "6": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 41
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1aa548614bfde4f57fd366f7a143e78aeeb26d91"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2454b0jtqe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2454b0jtqe();
var router = (cov_2454b0jtqe().s[0]++, _express["default"].Router());
cov_2454b0jtqe().s[1]++;
router.post("/", _productMiddleware.Auth, _categoryController.createCategory);
cov_2454b0jtqe().s[2]++;
router.get("/", _categoryController.getCategory);
cov_2454b0jtqe().s[3]++;
router.get("/:id", _categoryController.getOneCategory);
cov_2454b0jtqe().s[4]++;
router.patch("/:id/", _categoryController.updateCategory);
cov_2454b0jtqe().s[5]++;
router["delete"]("/", _categoryController.deleteCategory);
cov_2454b0jtqe().s[6]++;
router["delete"]("/:id", _categoryController.deleteOneCategory);
var _default = router;
exports["default"] = _default;