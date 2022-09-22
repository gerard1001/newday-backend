"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _classController = require("../../controllers/classController");

var router = _express["default"].Router();

router.post("/", _classController.createClass);
router.get("/", _classController.getClasses);
router.get("/:id/", _classController.getOneClass);
router.patch("/:id/", _classController.updateClass);
router["delete"]("/", _classController.deleteClasses);
router["delete"]("/:id", _classController.deleteOneClass);
var _default = router;
exports["default"] = _default;