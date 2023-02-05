"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tweetController = require("../../controllers/tweetController.js");

var _productMiddleware = require("../../middlewares/productMiddleware.js");

var _multer = _interopRequireDefault(require("../../helpers/multer.js"));

var router = _express["default"].Router();

router.post("/", _multer["default"].single("image"), _productMiddleware.Auth, _tweetController.createTweet);
router.get("/", _tweetController.getTweets);
router["delete"]("/", _tweetController.deleteTweets);
var _default = router;
exports["default"] = _default;