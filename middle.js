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

const middle = (arr) => {
  let output = [];

  if (arr.length < 2) {
    output = [];

  } else if (arr.length % 2 === 0) {
    const middleIndexSt = (arr.length / 2) - 1;
    const middleIndexNd = arr.length / 2;
    output.push(arr[middleIndexSt], arr[middleIndexNd]);

  } else {
    const middleIndex = Math.floor(arr.length / 2);
    output.push(arr[middleIndex]);

  } return output;
};

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));