const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  let output;

  for (const keys in object1) {
    if (object1[keys].length !== object2[keys].length) {
      output = false;
      break;
    }

    if (Array.isArray(object1[keys])) {
      output = eqArrays(object1[keys], object2[keys]);

    } else {
      if (object1[keys] === object2[keys]) {
        output = true;

      } else {
        output = false;
        break;
      }
    }
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    output = false;
  }

  return output;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  let output;

  if (eqObjects(actual, expected)) {
    output = true;

  } else {
    output = false;
  }

  return (output ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};



// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => should pass

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => should fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => should pass

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => should fail