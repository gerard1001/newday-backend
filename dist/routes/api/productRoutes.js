"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productController = require("../../controllers/productController");

var _classController = require("../../controllers/classController");

var _productMiddleware = require("../../middlewares/productMiddleware");

var _multer = _interopRequireDefault(require("../../helpers/multer"));

var _fileUpload = require("../../helpers/fileUpload");

var router = _express["default"].Router();

router.post("/", _productMiddleware.Auth, _fileUpload.imageArrayUpload, _multer["default"].array("images"), _productController.createProduct);
router.get("/", _productController.getProduct);
router.get("/:id", _productController.getOneProduct);
router.patch("/:id/", _fileUpload.updateImageArrayUpload, _multer["default"].array("images"), _productController.updateProduct);
router["delete"]("/:id/", _productController.deleteOneProduct);
router["delete"]("/", _productController.deleteProduct);
router.get("/product_of_class/:id", _classController.getClassProducts);
var _default = router;
exports["default"] = _default;