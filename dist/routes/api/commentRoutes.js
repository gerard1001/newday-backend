"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _commentController = require("../../controllers/commentController.js");
var _clientMiddleware = _interopRequireDefault(require("../../middlewares/clientMiddleware.js"));
var router = _express["default"].Router();
router.post("/", _clientMiddleware["default"], _commentController.createComment);
var _default = router;
exports["default"] = _default;