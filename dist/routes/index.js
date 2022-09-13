"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _categoryRoutes = _interopRequireDefault(require("./api/categoryRoutes.js"));

var _productRoutes = _interopRequireDefault(require("./api/productRoutes"));

var _classOneRoutes = _interopRequireDefault(require("./api/classOneRoutes"));

var _classTwoRoutes = _interopRequireDefault(require("./api/classTwoRoutes"));

var _userRoutes = _interopRequireDefault(require("./api/userRoutes"));

var _roleRoutes = _interopRequireDefault(require("./api/roleRoutes"));

var _assignUserToCategory = _interopRequireDefault(require("./api/assignUserToCategory"));

var _commentRoutes = _interopRequireDefault(require("./api/commentRoutes"));

var _articleRoutes = _interopRequireDefault(require("./api/articleRoutes"));

var _articleCommentRoutes = _interopRequireDefault(require("./api/articleCommentRoutes"));

var _tweetRoutes = _interopRequireDefault(require("./api/tweetRoutes"));

var _subscribeRoutes = _interopRequireDefault(require("./api/subscribeRoutes"));

var _reviewRoutes = _interopRequireDefault(require("./api/reviewRoutes"));

var router = _express["default"].Router();

router.use("/categories", _categoryRoutes["default"]);
router.use("/class1", _classOneRoutes["default"]);
router.use("/class2", _classTwoRoutes["default"]);
router.use("/products", _productRoutes["default"]);
router.use("/users", _userRoutes["default"]);
router.use("/subscribe", _subscribeRoutes["default"]);
router.use("/roles", _roleRoutes["default"]);
router.use("/user_category", _assignUserToCategory["default"]);
router.use("/comment", _commentRoutes["default"]);
router.use("/article", _articleRoutes["default"]);
router.use("/article_comment", _articleCommentRoutes["default"]);
router.use("/tweet", _tweetRoutes["default"]);
router.use("/review", _reviewRoutes["default"]);
var _default = router;
exports["default"] = _default;