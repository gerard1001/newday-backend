"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _productController = require("../../controllers/productController");
var _classController = require("../../controllers/classController");
var _productMiddleware = require("../../middlewares/productMiddleware");
var _multer = _interopRequireDefault(require("../../helpers/multer"));
var _fileUpload = require("../../helpers/fileUpload");
function cov_hht76w0tc() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\productRoutes.js";
  var hash = "b0da95ce711222922908056cfa6ec0747382f1a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\productRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 31
        }
      },
      "1": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 80
        }
      },
      "2": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 28
        }
      },
      "3": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 34
        }
      },
      "4": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 28,
          column: 2
        }
      },
      "5": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 41
        }
      },
      "6": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 34
        }
      },
      "7": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 31,
          column: 54
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
    hash: "b0da95ce711222922908056cfa6ec0747382f1a6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hht76w0tc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hht76w0tc();
var router = (cov_hht76w0tc().s[0]++, _express["default"].Router());
cov_hht76w0tc().s[1]++;
router.post("/", _productMiddleware.Auth, _fileUpload.imageArrayUpload, _multer["default"].array("images"), _productController.createProduct);
cov_hht76w0tc().s[2]++;
router.get("/", _productController.getProduct);
cov_hht76w0tc().s[3]++;
router.get("/:id", _productController.getOneProduct);
cov_hht76w0tc().s[4]++;
router.patch("/:id/", _fileUpload.updateImageArrayUpload, _multer["default"].array("images"), _productController.updateProduct);
cov_hht76w0tc().s[5]++;
router["delete"]("/:id/", _productController.deleteOneProduct);
cov_hht76w0tc().s[6]++;
router["delete"]("/", _productController.deleteProduct);
cov_hht76w0tc().s[7]++;
router.get("/product_of_class/:id", _classController.getClassProducts);
var _default = router;
exports["default"] = _default;