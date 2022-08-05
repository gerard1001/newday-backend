"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageUpload = exports.fileUpload = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));

/* eslint-disable import/prefer-default-export */
var fileUpload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var imageUrl;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            imageUrl = "";
            _context2.next = 3;
            return _cloudinary["default"].uploader.upload(req.file.path, {
              folder: "newday_api/products"
            }, /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, image) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!err) {
                          _context.next = 2;
                          break;
                        }

                        throw new Error(err);

                      case 2:
                        imageUrl = image.url;
                        console.log("Cheeeck this broooo", imageUrl);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 3:
            return _context2.abrupt("return", imageUrl);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fileUpload(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fileUpload = fileUpload;

var imageUpload = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req) {
    var imageUrl;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            imageUrl = "";
            _context4.next = 3;
            return _cloudinary["default"].uploader.upload(req.file.path, {
              folder: "newday_api/profile"
            }, /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, image) {
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!err) {
                          _context3.next = 2;
                          break;
                        }

                        throw new Error(err);

                      case 2:
                        imageUrl = image.url;
                        console.log("Cheeeck this broooo", imageUrl);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x5, _x6) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 3:
            return _context4.abrupt("return", imageUrl);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function imageUpload(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.imageUpload = imageUpload;