"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userCategoryController = require("../../controllers/userCategoryController");

var _userMiddleware = require("../../middlewares/userMiddleware");

var router = _express["default"].Router();

router.post("/", _userMiddleware.Auth, _userCategoryController.assignUser);
router.get("/", _userCategoryController.getAssignments);
router.get("/:id", _userCategoryController.getOneAssignment);
var _default = router;
exports["default"] = _default;