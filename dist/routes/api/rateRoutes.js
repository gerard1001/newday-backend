"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _ratingController = require("../../controllers/ratingController.js");
var router = _express["default"].Router();
router.get("/", _ratingController.getRating);
router.get("/see", _ratingController.fetchRatings);
var _default = router;
exports["default"] = _default;