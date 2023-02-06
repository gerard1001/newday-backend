"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("../../helpers/multer"));
var _classController = require("../../controllers/classController");
var _categoryController = require("../../controllers/categoryController");
var _productMiddleware = require("../../middlewares/productMiddleware");
var _fileUpload = require("../../helpers/fileUpload");
function cov_eyc23as2x() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\classRoutes.js";
  var hash = "02782958320a741872a2f444335a1f25ac96f960";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\classRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 31
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "2": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 28
        }
      },
      "3": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 33
        }
      },
      "4": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 64
        }
      },
      "5": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 34
        }
      },
      "6": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 38
        }
      },
      "7": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 57
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
      "6": 0,
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02782958320a741872a2f444335a1f25ac96f960"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_eyc23as2x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_eyc23as2x();
var router = (cov_eyc23as2x().s[0]++, _express["default"].Router());
cov_eyc23as2x().s[1]++;
router.post("/", _productMiddleware.Auth, _fileUpload.uploadClassImage, _multer["default"].single("coverImage"), _classController.createClass);
cov_eyc23as2x().s[2]++;
router.get("/", _classController.getClasses);
cov_eyc23as2x().s[3]++;
router.get("/:id/", _classController.getOneClass);
cov_eyc23as2x().s[4]++;
router.patch("/:id/", _multer["default"].single("coverImage"), _classController.updateClass);
cov_eyc23as2x().s[5]++;
router["delete"]("/", _classController.deleteClasses);
cov_eyc23as2x().s[6]++;
router["delete"]("/:id", _classController.deleteOneClass);
cov_eyc23as2x().s[7]++;
router.get("/class_of_category/:id", _categoryController.getCategoryClasses);
var _default = router;
exports["default"] = _default;