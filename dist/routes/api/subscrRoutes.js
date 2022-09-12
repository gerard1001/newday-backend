"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _subscrController = require("../../controllers/subscrController.js");

var _userMiddleware = require("../../middlewares/userMiddleware");

var router = _express["default"].Router();

router.get("/", _userMiddleware.authent, _subscrController.subscribeMsg);
router.get("/:token", _subscrController.subscribe);
var _default = router;
exports["default"] = _default;