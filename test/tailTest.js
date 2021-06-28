const assert = require('chai').assert;
const lotide = require('../index');

describe("#tail", () => {
  it(`returns [2] for ["Hello", "Lighthouse", "Labs"])`, () => {
    assert.deepEqual(lotide.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns 2 for ["Yo Yo", "Lighthouse", "Labs"].length)`, () => {
    assert.lengthOf(lotide.tail(["Hello", "Lighthouse", "Labs"]), 2);
  });
});