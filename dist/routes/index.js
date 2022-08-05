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

var router = _express["default"].Router();

router.use("/categories", _categoryRoutes["default"]);
router.use("/class1", _classOneRoutes["default"]);
router.use("/class2", _classTwoRoutes["default"]);
router.use("/products", _productRoutes["default"]);
router.use("/users", _userRoutes["default"]);
router.use("/roles", _roleRoutes["default"]);
var _default = router;
exports["default"] = _default;