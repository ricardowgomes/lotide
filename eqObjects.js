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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false