const assert = require('chai').assert;
const lotide = require('../index');

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it(`returns scifi for "The Expanse"`, () => {
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "scifi");
  });

  it(`returns comedy for "Brooklyn Nine-Nine"`, () => {
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it(`returns undefined for That '70s Show`, () => {
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it(`returns drama for The Wire`, () => {
    assert.strictEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});