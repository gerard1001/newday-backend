"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _classOneController = require("../../controllers/classOneController");

var router = _express["default"].Router();

router.post('/', _classOneController.createClassOne);
router.get('/', _classOneController.getClassOne);
router.get('/:id/', _classOneController.getOneClassOne);
router.patch('/:id/', _classOneController.updateClassOne);
router["delete"]('/', _classOneController.deleteClassOne);
router["delete"]('/:id', _classOneController.deleteOneClassOne);
var _default = router;
exports["default"] = _default;