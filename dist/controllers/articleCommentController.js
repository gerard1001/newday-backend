"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postComment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));

var _userHelper = require("../helpers/userHelper");

var commentModel = _models["default"].UserComment;

var postComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = (0, _checkToken["default"])(req);
            decode = (0, _userHelper.decodeToken)(token);
            _context.next = 5;
            return commentModel.create({
              userId: decode.userId,
              userArticleId: req.body.userArticleId,
              comment: req.body.comment
            }).then(function (data) {
              return res.status(200).send({
                message: "success",
                data: data
              });
            })["catch"](function (err) {
              res.status(400).send({
                err: err
              });
            });

          case 5:
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
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function postComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postComment = postComment;