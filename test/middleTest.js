const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4,]);
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4,]));