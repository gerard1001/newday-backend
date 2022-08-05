"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.generateToken = exports.decodeToken = exports.comparePassword = void 0;

var _require = require("bcryptjs"),
    hashSync = _require.hashSync,
    compareSync = _require.compareSync,
    genSaltSync = _require.genSaltSync;

var jwt = require("jsonwebtoken");

var hashPassword = function hashPassword(pwd) {
  var salt = genSaltSync(10);
  return hashSync(pwd, salt);
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(plainPassword, hashedPassword) {
  var compare = compareSync(plainPassword, hashedPassword);
  return compare;
};

exports.comparePassword = comparePassword;

var generateToken = function generateToken(payload, expiresIn) {
  var token = jwt.sign(payload, "datasudobuy", {
    expiresIn: expiresIn
  });
  return token;
};

exports.generateToken = generateToken;

var decodeToken = function decodeToken(token) {
  var verify = jwt.verify(token, "datasudobuy");
  return verify;
};

exports.decodeToken = decodeToken;