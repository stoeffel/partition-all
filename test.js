"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var partitionAll = _interopRequire(require("./index.js"));

var expect = _interopRequire(require("expect.js"));




it("#partition-all", function () {
  expect(partitionAll).to.be.a.Function;
  expect(partitionAll(1)).to.be.a.Function;

  expect(function () {
    return partitionAll("1", []);
  }).to.throwException();
  expect(function () {
    return partitionAll(null, []);
  }).to.throwException();
  expect(function () {
    return partitionAll(0, {});
  }).to.throwException();
  expect(function () {
    return partitionAll(0, null);
  }).to.throwException();

  expect(partitionAll(0)([])).to.eql([]);
  expect(partitionAll(0)([1])).to.eql([1]);
  expect(partitionAll(0)([1, 2])).to.eql([1, 2]);

  expect(partitionAll(1)([])).to.eql([]);
  expect(partitionAll(1)([1])).to.eql([[1]]);
  expect(partitionAll(1)([1, 2])).to.eql([[1], [2]]);

  expect(partitionAll(2)([1, 2])).to.eql([[1, 2]]);
  expect(partitionAll(2)([1, 2, 3])).to.eql([[1, 2], [3]]);
  expect(partitionAll(2)([1, 2, 3, 4])).to.eql([[1, 2], [3, 4]]);
  expect(partitionAll(2)([1, 2, 3, 4, 5])).to.eql([[1, 2], [3, 4], [5]]);

  expect(partitionAll(3)([1, 2])).to.eql([[1, 2]]);
  expect(partitionAll(3)([1, 2, 3])).to.eql([[1, 2, 3]]);
  expect(partitionAll(3)([1, 2, 3, 4])).to.eql([[1, 2, 3], [4]]);
  expect(partitionAll(3)([1, 2, 3, 4, 5])).to.eql([[1, 2, 3], [4, 5]]);
  expect(partitionAll(3)([1, 2, 3, 4, 5, 6])).to.eql([[1, 2, 3], [4, 5, 6]]);
  expect(partitionAll(3)([1, 2, 3, 4, 5, 6, 7])).to.eql([[1, 2, 3], [4, 5, 6], [7]]);
});