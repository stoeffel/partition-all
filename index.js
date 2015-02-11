"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var curry = _interopRequire(require("chickencurry"));




var isInteger = function (value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
var isArray = function (arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
};

var _partitionAll = function (n, coll) {
  var result = [];
  var part = [];

  if (!isInteger(n)) {
    throw new Error("" + n + " should be a integer");
  }

  if (!isArray(coll)) {
    throw new Error("" + coll + " should be an array");
  }

  if (n === 0) {
    return coll;
  }

  coll.forEach(function (item, idx) {
    part.push(item);

    if ((idx + 1) % n === 0) {
      result.push(part);
      part = [];
    }
  });

  if (part.length > 0) {
    result.push(part);
  }

  return result;
};

module.exports = curry(_partitionAll);