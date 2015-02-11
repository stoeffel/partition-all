partition-all
================

[![Build Status](https://travis-ci.org/stoeffel/partition-all.svg)](https://travis-ci.org/stoeffel/partition-all) [![npm version](https://badge.fury.io/js/partition-all.svg)](http://badge.fury.io/js/partition-all)
> Returns a sequence of arrays, but may include partitions with fewer than n items at the end.

Installation
------------

`npm install partition-all --save`

Usage
-----

```js
var partitionAll = require('partition-all');

partitionAll(2, [1, 2, 3, 4, 5, 6]); // => [[1, 2], [3, 4], [5, 6]]
partitionAll(2, [1, 2, 3, 4, 5]); // => [[1, 2], [3, 4], [5]]
partitionAll(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [4, 5]]

var partition2 = partitionAll(2);

partition2([1, 2, 3, 4, 5, 6]); // => [[1, 2], [3, 4], [5, 6]]
```
