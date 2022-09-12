"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArticle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _checkToken = _interopRequireDefault(require("../helpers/checkToken"));

var _userHelper = require("../helpers/userHelper");

var _fileUpload = require("../helpers/fileUpload");

var articleModel = _models["default"].UserArticle;

var createArticle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var token, decode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = (0, _checkToken["default"])(req);
            decode = (0, _userHelper.decodeToken)(token);

            if (!req.file) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return (0, _fileUpload.fileUpload)(req);

          case 6:
            req.body.image = _context.sent;
            _context.next = 10;
            break;

          case 9:
            req.body.image = "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";

          case 10:
            _context.next = 12;
            return articleModel.create({
              userId: decode.userId,
              image: req.body.image,
              title: req.body.title,
              article: req.body.article
            }).then(function (data) {
              return res.status(201).send({
                message: "success!!!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send(err);
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
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function createArticle(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createArticle = createArticle;