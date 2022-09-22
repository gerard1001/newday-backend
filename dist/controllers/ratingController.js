"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRating = exports.fetchRatings = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var reviewModel = _models["default"].Review;
var ratingModel = _models["default"].Rating;

var getRating = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rate, dt, sum, i, avg, new_avg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return reviewModel.findAll({});

          case 2:
            rate = _context.sent;

            if (!(rate == "")) {
              _context.next = 6;
              break;
            }

            console.log("'No ratings yet'");
            return _context.abrupt("return", res.send({
              message: "No ratings yet"
            }));

          case 6:
            dt = rate.map(function (result) {
              return result.rate;
            });
            sum = 0;

            for (i = 0; i < dt.length; i++) {
              sum = sum + Number(dt[i]);
            }

            avg = sum / rate.length;
            new_avg = avg.toFixed(1);
            console.log("``````````````````");
            console.log(rate.length);
            console.log(sum);
            console.log(new_avg);
            console.log("``````````````````");
            _context.next = 18;
            return ratingModel.destroy({
              where: {}
            })["catch"](function (err) {
              return res.send({
                message: "".concat(err)
              });
            });

          case 18:
            _context.next = 20;
            return ratingModel.create({
              rating: new_avg
            }).then(function (data) {
              return res.send({
                message: "success",
                data: data
              });
            })["catch"](function (err) {
              return res.send({
                message: "".concat(err)
              });
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRating(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRating = getRating;

var fetchRatings = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ratingModel.findAll({}).then(function (data) {
              return res.send({
                message: "success",
                data: data
              });
            })["catch"](function (err) {
              return res.send({
                message: "".concat(err)
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchRatings(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchRatings = fetchRatings;