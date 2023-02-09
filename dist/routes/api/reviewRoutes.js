"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../../controllers/userController");
var _userMiddleware = require("../../middlewares/userMiddleware");
var router = _express["default"].Router();
router.post("/", _userMiddleware.authent, _userController.createReview);
router.get("/", _userController.getReviews);
router["delete"]("/", _userMiddleware.reviewAuth, _userController.deleteReviews);
var _default = router;
exports["default"] = _default;