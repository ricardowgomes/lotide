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
};

module.exports = countLetters;
