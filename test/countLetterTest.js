const assert = require('chai').assert;
const lotide = require('../index');

describe("#countLetters", () => {
  it(`returns 2 for "lighthouse in the house".l`, () => {
    assert.strictEqual(lotide.countLetters("lighthouse in the house").l, 1);
  });

  it(`returns 5 for "My bed and sheets are on fire".e`, () => {
    assert.strictEqual(lotide.countLetters("My bed and sheets are on fire").e, 5);
  });

  it(`returns 2 for "Lighthouse Labs".l`, () => {
    assert.strictEqual(lotide.countLetters("Lighthouse Labs").l, 2);
  });
});
