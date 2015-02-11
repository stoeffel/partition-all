'use strict';

import curry from 'chickencurry';


let _partitionAll = (n, coll) => {
  let result = [];
  let part = [];

  if (!Number.isInteger(n)) {
    throw new Error(`${n} should be a integer`);
  }

  if (!Array.isArray(coll)) {
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
