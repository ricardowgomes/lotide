const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const eqArrays = (arr1, arr2) => {
  let output;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      output = true;

    } else {
      output = false;
      break;
    }

  } return output;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']) // => should pass
assertArraysEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), false) // => should fail


