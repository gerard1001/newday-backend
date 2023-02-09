"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));
var ClientAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = (0, _checkToken["default"])(req);
          if (token) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(401).send({
            message: "you are not logged in!!"
          }));
        case 4:
          next();
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send({
            message: "".concat(_context.t0)
          }));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function ClientAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = ClientAuth;
exports["default"] = _default;