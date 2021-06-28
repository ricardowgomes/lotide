const assert = require('chai').assert;
const lotide = require('../index');

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(lotide.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => (x < 0)), [1, 2, 5, 7, 2]);
  });

  it(`returns ['I've', 'been', 'to', 'Hollywood'] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]`, () => {
    assert.deepEqual(lotide.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});