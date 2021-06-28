// index.js
const head   = require('./head'); // OK
const tail   = require('./tail'); // OK
const middle = require('./middle'); // OK
const flatten = require('./flatten'); // OK
const takeUntil = require('./takeUntil'); // OK
const map = require('./map'); // OK
const letterPositions = require('./letterPositions'); // OK
const findKeyByValue = require('./findKeyByValue'); // OK
const findKey = require('./findKey'); // OK
const countOnly = require('./countOnly'); // OK
const countLetters = require('./countLetters');

module.exports = {
  head, tail, middle, flatten, takeUntil, findKeyByValue, findKey, countOnly, map, letterPositions, countLetters
};
