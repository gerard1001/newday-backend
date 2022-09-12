"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var storage = _multer["default"].diskStorage({
  filename: function filename(req, file, cb) {
    cb(null, "".concat(new Date().toISOString().replace(/:/g, "-"), "-").concat(file.originalname));
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  console.log("`````````````````MULTER```````````````````", req.body);

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/webp") {
    cb(null, true);
  } else {
    cb({
      message: "unsupported file format"
    }, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024
  },
  fileFilter: fileFilter
});
var _default = upload;
exports["default"] = _default;