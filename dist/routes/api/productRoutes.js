"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("../../helpers/multer"));

var _productController = require("../../controllers/productController");

var router = _express["default"].Router();

router.post("/", _multer["default"].single("productImage"), _productController.createProduct);
router.get("/", _productController.getProduct);
router.get("/:id", _productController.getOneProduct);
router.patch("/:id/", _multer["default"].single("productImage"), _productController.updateProduct);
router["delete"]("/:id/", _productController.deleteOneProduct);
router["delete"]("/", _productController.deleteProduct);
var _default = router;
exports["default"] = _default;