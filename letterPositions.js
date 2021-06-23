const letterPositions = (sentence) => {
  const results = {};
  let newArray = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
        newArray.push(i);
        results[sentence[i]] = newArray;
        newArray = [];

      } else {
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
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





// TEST CODE
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]); // => should pass
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => should pass
assertArraysEqual(letterPositions("hello").l, [2]); // => should fail