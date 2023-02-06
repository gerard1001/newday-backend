"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../../controllers/userController");
var _userMiddleware = require("../../middlewares/userMiddleware");
var _multer = _interopRequireDefault(require("../../helpers/multer"));
function cov_hyfnaih() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\userRoutes.js";
  var hash = "b43b66a2bb4dc444cfdecf0bd6d4a1f3c9602738";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\routes\\api\\userRoutes.js",
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
          column: 67
        }
      },
      "2": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 72
        }
      },
      "3": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 26
        }
      },
      "4": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 52
        }
      },
      "5": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 45
        }
      },
      "6": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 32,
          column: 31
        }
      },
      "7": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 37
        }
      },
      "8": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 49
        }
      },
      "9": {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 38,
          column: 33
        }
      },
      "10": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 40,
          column: 46
        }
      },
      "11": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 42,
          column: 39
        }
      },
      "12": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 44,
          column: 44
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b43b66a2bb4dc444cfdecf0bd6d4a1f3c9602738"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hyfnaih = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hyfnaih();
var router = (cov_hyfnaih().s[0]++, _express["default"].Router());
cov_hyfnaih().s[1]++;
router.post("/register", _multer["default"].single("picture"), _userController.registerWorker);
cov_hyfnaih().s[2]++;
router.post("/client_register", _multer["default"].single("picture"), _userController.clientSignUp);

// router.post("/", createProfile);
cov_hyfnaih().s[3]++;
router.get("/", _userController.getUsers);
cov_hyfnaih().s[4]++;
router.patch("/admin-update/:id", _userMiddleware.Auth, _userController.updateUser); //This update option will have an option to change the role. Only performed by the admin.
cov_hyfnaih().s[5]++;
router.patch("/:id", _userMiddleware.updateAuth, _userController.updateUser); //This will allow the user to update their information, exept their role.
cov_hyfnaih().s[6]++;
router.get("/:id", _userController.getOneUser);
cov_hyfnaih().s[7]++;
router["delete"]("/", _userMiddleware.Auth, _userController.deleteUser);
cov_hyfnaih().s[8]++;
router["delete"]("/:id", _userMiddleware.deleteAuth, _userController.deleteOneUser);
cov_hyfnaih().s[9]++;
router.post("/login", _userController.userLogin);
cov_hyfnaih().s[10]++;
router.get("/verify_user/:token", _userController.verifyUser);
cov_hyfnaih().s[11]++;
router.post("/reset_link/", _userController.resetLink);
cov_hyfnaih().s[12]++;
router.patch("/reset_pwd/:token", _userController.resetPwd);
var _default = router;
exports["default"] = _default;