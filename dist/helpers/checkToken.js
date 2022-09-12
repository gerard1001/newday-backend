"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = checkToken;

function checkToken(req) {
  var Token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  return Token;
}