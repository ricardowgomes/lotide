const findKeyByValue = (obj, value) => {
  const arrayOfKeys = Object.keys(obj);
  let output = '';

  for (const key of arrayOfKeys) {
    if (obj[key] === value) {
      output = key;
      break;

    } else {
      output = undefined;
    }

  } return output;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// DATA FOT TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// TEST
console.log("The Expanse is classified as: ", findKeyByValue(bestTVShowsByGenre, "The Expanse"))
console.log("Brooklyn Nine-Nine is classified as: ", findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))
console.log("The Wire is classified as: ", findKeyByValue(bestTVShowsByGenre, "The Wire"))

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);