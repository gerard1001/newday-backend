"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userHelper = require("../helpers/userHelper");

var _models = _interopRequireDefault(require("../database/models"));

var userModel = _models["default"].User;

var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, legalUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers.authorization && req.headers.authorization.split(" ")[1];

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(404).send({
              message: "Unauthorized to perform this action."
            }));

          case 3:
            decode = (0, _userHelper.decodeToken)(token);
            _context.next = 6;
            return userModel.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role", "roleId"]
              }]
            });

          case 6:
            legalUser = _context.sent;

            if (!(legalUser.roleId != 1)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(403).send({
              message: "THis action can only be performed by the admin!!!"
            }));

          case 9:
            req.user = legalUser;
            console.log("`````````````````LEGALUSER````````````````````", legalUser.roleId);
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = Auth;
exports["default"] = _default;