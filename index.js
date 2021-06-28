// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  countOnly: countOnly,
  countLetters: countLetters
};

