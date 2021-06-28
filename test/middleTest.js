const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3])", () => {
    assert.strictEqual(middle([1, 2, 3]), "2");
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(middle([1, 2, 3, 4]), "2, 3");
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), "3, 4");
  });
});