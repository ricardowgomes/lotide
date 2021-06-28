const assert = require('chai').assert;
const lotide = require('../index');

describe("#findKey", () => {
  it(`returns "noma" for this object`, () => {
    assert.strictEqual(lotide.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it(`returns "Akaleri" for this object`, () => {
    assert.strictEqual(lotide.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 3), "Akaleri");
  });
});