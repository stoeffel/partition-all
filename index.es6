'use strict';

import curry from 'chickencurry';


let isInteger = (value) => typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
let isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

let _partitionAll = (n, coll) => {
  let result = [];
  let part = [];

  if (!isInteger(n)) {
    throw new Error(`${n} should be a integer`);
  }

  if (!isArray(coll)) {
    throw new Error(`${coll} should be an array`);
  }

  if (n === 0) {
    return coll;
  }

  coll.forEach((item, idx) => {
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

export default curry(_partitionAll);
