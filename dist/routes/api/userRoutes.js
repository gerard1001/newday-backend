"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../../controllers/userController");

var _userMiddleware = _interopRequireDefault(require("../../middlewares/userMiddleware"));

var _multer = _interopRequireDefault(require("../../helpers/multer"));

var router = _express["default"].Router();

router.post("/register", _multer["default"].single("picture"), _userController.registerUser); // router.post("/", createProfile);

router.get("/", _userController.getUser);
router.patch("/admin-update/:id", _userMiddleware["default"], _userController.updateUser); //This update option will have an option to change the role. Only performed by the admin.

router.patch("/:id", _userController.updateUser); //This will allow the user to update their information, exept their role.

router.get("/:id", _userController.getOneUser);
router["delete"]("/", _userMiddleware["default"], _userController.deleteUser);
router["delete"]("/:id", _userController.deleteOneUser);
router.post("/login", _userController.userLogin);
var _default = router;
exports["default"] = _default;