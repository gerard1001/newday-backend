"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _roleController = require("../../controllers/roleController");
function cov_1evsxb48kv() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\roleRoutes.js";
  var hash = "64b723fdca2ec0f0cf0fadcf0eb7195b2f100f3e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\roleRoutes.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 31
        }
      },
      "1": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 29
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "3": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "5": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 31
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
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "64b723fdca2ec0f0cf0fadcf0eb7195b2f100f3e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1evsxb48kv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1evsxb48kv();
var router = (cov_1evsxb48kv().s[0]++, _express["default"].Router());
cov_1evsxb48kv().s[1]++;
router.post('/', _roleController.createRole);
cov_1evsxb48kv().s[2]++;
router.get('/', _roleController.getRole);
cov_1evsxb48kv().s[3]++;
router.get('/:id', _roleController.getOneRole);
cov_1evsxb48kv().s[4]++;
router.patch('/:id/', _roleController.updateRole);
cov_1evsxb48kv().s[5]++;
router["delete"]('/', _roleController.deleteRole);
var _default = router;
exports["default"] = _default;