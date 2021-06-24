const takeUntil = (array, callback) => {
  let output = [];

  for (const el of array) {
    if (callback(el)) {
      break;
    }

    output.push(el);
  }

  return output;
};

const assertArraysEqual = (arr1, arr2) => {
  let output;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      output = true;

    } else {
      output = false;
      break;
    }

  } (output ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// TESTS
assertArraysEqual(results1, [1, 2, 5, 7, 2]) // => should pass
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']) // => should pass