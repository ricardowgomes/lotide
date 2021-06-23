// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let output = {};

  for (const letter of str) {
    letter.toLowerCase();

    if (!output[letter.toLowerCase()] && letter.toLowerCase() !== " ") {
      output[letter.toLowerCase()] = 1;

    } else if (letter.toLowerCase() === letter.toLowerCase() && letter !== " ") {
      output[letter.toLowerCase()] += 1;
    }

  } return output;
}

// TEST CODE
console.log(countLetters("lighthouse in the house"))
console.log(countLetters("Lighthouse Labs"))

const result = countLetters("Lighthouse Labs")
assertEqual(result.l, 2);
assertEqual(result.h, 2);
assertEqual(result.t, 2);