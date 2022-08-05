"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _roleController = require("../../controllers/roleController");

var router = _express["default"].Router();

router.post('/', _roleController.createRole);
router.get('/', _roleController.getRole);
router.get('/:id', _roleController.getOneRole);
router.patch('/:id/', _roleController.updateRole);
router["delete"]('/', _roleController.deleteRole);
var _default = router;
exports["default"] = _default;