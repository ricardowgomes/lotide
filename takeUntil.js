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

module.exports = takeUntil;