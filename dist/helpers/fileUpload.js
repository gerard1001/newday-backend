"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadCompanyLogo = exports.uploadClassImage = exports.updateImageArrayUpload = exports.imageUpload = exports.imageArrayUpload = exports.fileUpload = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
var _models = _interopRequireDefault(require("../database/models"));
/* eslint-disable import/prefer-default-export */

var productModel = _models["default"].Product;
var fileUpload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var imageUrl;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          imageUrl = "";
          _context2.next = 3;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "newday_api/products"
          }, /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, image) {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!err) {
                      _context.next = 3;
                      break;
                    }
                    console.log(err, "********");
                    throw new Error(err);
                  case 3:
                    imageUrl = image.url;
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 3:
          console.log(imageUrl, "******");
          return _context2.abrupt("return", imageUrl);
        case 5:
        case "end":
          return _context2.stop();
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
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          imageUrl = "";
          _context4.next = 3;
          return _cloudinary["default"].uploader.upload(req.file.path, {
            folder: "newday_api/profile"
          }, /*#__PURE__*/function () {
            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, image) {
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!err) {
                      _context3.next = 3;
                      break;
                    }
                    console.log(err, "********");
                    throw new Error(err);
                  case 3:
                    imageUrl = image.url;
                  case 4:
                  case "end":
                    return _context3.stop();
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
    }, _callee4);
  }));
  return function imageUpload(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.imageUpload = imageUpload;
var imageArrayUpload = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var urls, imageId, file, _file, i;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          urls = [];
          imageId = [];
          if (req.body.images) {
            _context5.next = 5;
            break;
          }
          console.log(req.body);
          return _context5.abrupt("return", res.status(400).json({
            message: "images should not be empty"
          }));
        case 5:
          if (Array.isArray(req.body.images)) {
            _context5.next = 17;
            break;
          }
          _context5.next = 8;
          return _cloudinary["default"].uploader.upload(req.body.images.path)["catch"](function (err) {
            console.log(err);
            throw new Error(err);
          });
        case 8:
          file = _context5.sent;
          if (file) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 11:
          urls.push(file.url);
          imageId.push(file.public_id);
          req.body.images = urls;
          req.body.imagesId = imageId;
          _context5.next = 31;
          break;
        case 17:
          i = 0;
        case 18:
          if (!(i < req.body.images.length)) {
            _context5.next = 29;
            break;
          }
          _context5.next = 21;
          return _cloudinary["default"].uploader.upload(req.body.images[i].path);
        case 21:
          _file = _context5.sent;
          if (_file) {
            _context5.next = 24;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 24:
          urls.push(_file.url);
          imageId.push(_file.public_id);
        case 26:
          i++;
          _context5.next = 18;
          break;
        case 29:
          req.body.images = urls;
          req.body.imagesId = imageId;
        case 31:
          req.data = req.body;
          next();
        case 33:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function imageArrayUpload(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.imageArrayUpload = imageArrayUpload;
var updateImageArrayUpload = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var id, availableImages, urls, imageId, _urls, _imageId, file, _file2, i;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return productModel.findOne({
            where: {
              productId: id
            }
          });
        case 3:
          availableImages = _context6.sent;
          console.log(req.body.images, "*****");
          if (req.body.images) {
            _context6.next = 15;
            break;
          }
          console.log("FIRST CASE");
          urls = availableImages.dataValues.images;
          imageId = availableImages.dataValues.imagesId;
          req.body.images = urls;
          req.body.imagesId = imageId;
          req.data = req.body;
          next();
          _context6.next = 49;
          break;
        case 15:
          console.log("SECOND CASE");
          _urls = [];
          _imageId = [];
          if (req.body.images) {
            _context6.next = 21;
            break;
          }
          console.log(req.body);
          return _context6.abrupt("return", res.status(400).json({
            message: "images should not be empty"
          }));
        case 21:
          if (Array.isArray(req.body.images)) {
            _context6.next = 33;
            break;
          }
          _context6.next = 24;
          return _cloudinary["default"].uploader.upload(req.body.images.path)["catch"](function (err) {
            console.log(err);
            throw new Error(err);
          });
        case 24:
          file = _context6.sent;
          if (file) {
            _context6.next = 27;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 27:
          _urls.push(file.url);
          _imageId.push(file.public_id);
          req.body.images = _urls;
          req.body.imagesId = _imageId;
          _context6.next = 47;
          break;
        case 33:
          i = 0;
        case 34:
          if (!(i < req.body.images.length)) {
            _context6.next = 45;
            break;
          }
          _context6.next = 37;
          return _cloudinary["default"].uploader.upload(req.body.images[i].path);
        case 37:
          _file2 = _context6.sent;
          if (_file2) {
            _context6.next = 40;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "not able to upload"
          }));
        case 40:
          _urls.push(_file2.url);
          _imageId.push(_file2.public_id);
        case 42:
          i++;
          _context6.next = 34;
          break;
        case 45:
          req.body.images = _urls;
          req.body.imagesId = _imageId;
        case 47:
          req.data = req.body;
          next();
        case 49:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateImageArrayUpload(_x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateImageArrayUpload = updateImageArrayUpload;
var uploadCompanyLogo = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var uploadFile;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          if (!req.body.companyLogo) {
            _context7.next = 9;
            break;
          }
          _context7.next = 4;
          return _cloudinary["default"].uploader.upload(req.body.companyLogo.path);
        case 4:
          uploadFile = _context7.sent;
          /* istanbul ignore next */
          req.body.companyLogo = uploadFile.url;
          console.log(req.body, "******");
          req.data = req.body; //Send something to the next step.
          next();
        case 9:
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          throw new Error(_context7.t0);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 11]]);
  }));
  return function uploadCompanyLogo(_x13, _x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();
exports.uploadCompanyLogo = uploadCompanyLogo;
var uploadClassImage = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var uploadFile;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          if (!req.body.coverImage) {
            _context8.next = 9;
            break;
          }
          _context8.next = 4;
          return _cloudinary["default"].uploader.upload(req.body.coverImage.path);
        case 4:
          uploadFile = _context8.sent;
          /* istanbul ignore next */
          req.body.coverImage = uploadFile.url;
          console.log(req.body, "******");
          req.data = req.body; //Send something to the next step.
          next();
        case 9:
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          throw new Error(_context8.t0);
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function uploadClassImage(_x16, _x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
exports.uploadClassImage = uploadClassImage;