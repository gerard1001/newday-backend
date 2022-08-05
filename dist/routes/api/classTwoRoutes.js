"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _classTwoController = require("../../controllers/classTwoController");

var router = _express["default"].Router();

router.post('/', _classTwoController.createClassTwo);
router.get('/', _classTwoController.getClassTwo);
router.get('/:id', _classTwoController.getOneClassTwo);
router.patch('/:id/', _classTwoController.updateClassTwo);
router["delete"]('/', _classTwoController.deleteClassTwo);
var _default = router;
exports["default"] = _default;