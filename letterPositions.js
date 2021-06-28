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

module.exports = letterPositions;