const assert = require('chai').assert;
const lotide = require('../index');

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("#map", () => {
  it(`returns ['g', 'c', 't', 'm', 't'] for words`, () => {
    assert.deepEqual(lotide.map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it(`returns [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] for numbers`, () => {
    assert.deepEqual(lotide.map(numbers, number => number * 2), [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]);
  });
});

