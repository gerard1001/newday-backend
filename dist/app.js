"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _models = _interopRequireDefault(require("../src/database/models"));
var _routes = _interopRequireDefault(require("./routes"));
var _cors = _interopRequireDefault(require("cors"));
var _expressFormData = _interopRequireDefault(require("express-form-data"));
var port = process.env.PORT;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_expressFormData["default"].parse());
app.use(_expressFormData["default"].union());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use("/api/v2/", _routes["default"]);
_models["default"].sequelize.sync().then(function () {
  app.listen(port, function () {
    console.log("listening on: http://localhost:".concat(port));
  });
});