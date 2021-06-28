const flatten = (arr) => {
  let output = [];

  for (const nums of arr) {
    if (Array.isArray(nums)) {
      for (const num of nums) {
        output.push(num);
      }

    } else {
      output.push(nums);

    }
  } return output;
};

module.exports = flatten;