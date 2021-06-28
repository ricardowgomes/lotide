const assert = require('chai').assert;
const lotide = require('../index');

describe("#letterPositions", () => {
  it(`returns 1 for ("hello").e`, () => {
    assert.deepEqual(lotide.letterPositions("hello").e, [1]);
  });

  it(`returns [2, 3] for ("hello").l`, () => {
    assert.deepEqual(lotide.letterPositions("hello").l, [2, 3]);
  });
});