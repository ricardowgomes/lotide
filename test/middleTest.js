const assert = require('chai').assert;
const lotide = require('../index');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(lotide.head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(lotide.head(['5']), '5');
  });
});