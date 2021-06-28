const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it(`returns [2] for ["Hello", "Lighthouse", "Labs"])`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns 2 for ["Yo Yo", "Lighthouse", "Labs"].length)`, () => {
    assert.lengthOf(tail(["Hello", "Lighthouse", "Labs"]), 2);
  });
});