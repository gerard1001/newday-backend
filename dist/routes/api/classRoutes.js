"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("../../helpers/multer"));

var _classController = require("../../controllers/classController");

var _categoryController = require("../../controllers/categoryController");

var _productMiddleware = require("../../middlewares/productMiddleware");

var _fileUpload = require("../../helpers/fileUpload");

var router = _express["default"].Router();

router.post("/", _productMiddleware.Auth, _fileUpload.uploadClassImage, _multer["default"].single("coverImage"), _classController.createClass);
router.get("/", _classController.getClasses);
router.get("/:id/", _classController.getOneClass);
router.patch("/:id/", _multer["default"].single("coverImage"), _classController.updateClass);
router["delete"]("/", _classController.deleteClasses);
router["delete"]("/:id", _classController.deleteOneClass);
router.get("/class_of_category/:id", _categoryController.getCategoryClasses);
var _default = router;
exports["default"] = _default;