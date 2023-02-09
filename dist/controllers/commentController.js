"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var _userHelper = require("../helpers/userHelper");
var commentModel = _models["default"].ProductComment;
var productModel = _models["default"].Product;
var createComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, existingproduct, decode, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = (0, _checkToken["default"])(req);
          _context.next = 4;
          return productModel.findOne({
            where: {
              productId: req.body.productId
            }
          });
        case 4:
          existingproduct = _context.sent;
          decode = (0, _userHelper.decodeToken)(token);
          id = decode.userId;
          console.log(id);
          if (existingproduct) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(404).send({
            message: "You can not comment on a non existing product."
          }));
        case 10:
          _context.next = 12;
          return commentModel.create({
            productId: req.body.productId,
            userId: id,
            comment: req.body.comment
          }).then(function (data) {
            return res.status(201).send({
              message: "Comment posted successfully",
              data: data
            });
          })["catch"](function (err) {
            return res.status(400).send({
              message: "ERROR ".concat(err)
            });
          });
        case 12:
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function createComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createComment = createComment;