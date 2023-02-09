"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = exports.getPaginatedData = void 0;
/* eslint-disable no-nested-ternary */

var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};
exports.getPagination = getPagination;
var getPaginatedData = function getPaginatedData(data, page, limit) {
  var totalItems = data.count,
    result = data.rows;
  var currentPage = page ? +page : 0;
  var totalPages = Math.ceil(totalItems / limit);
  return {
    totalItems: totalItems,
    result: result,
    totalPages: totalPages,
    currentPage: currentPage
  };
};
exports.getPaginatedData = getPaginatedData;