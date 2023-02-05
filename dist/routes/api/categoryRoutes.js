"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _categoryController = require("../../controllers/categoryController");

var _productMiddleware = require("../../middlewares/productMiddleware");

var router = _express["default"].Router();

router.post("/", _productMiddleware.Auth, _categoryController.createCategory);
router.get("/", _categoryController.getCategory);
router.get("/:id", _categoryController.getOneCategory);
router.patch("/:id/", _categoryController.updateCategory);
router["delete"]("/", _categoryController.deleteCategory);
router["delete"]("/:id", _categoryController.deleteOneCategory);
var _default = router;
exports["default"] = _default;