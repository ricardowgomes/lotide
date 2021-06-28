// FUNCTION IMPLEMENTATION
const findKey = (obj, callback) => {
  let output = '';

  for (const key in obj) {
    if (callback(obj[key])) {
      output = key;
      break;

    } else {
      output = undefined;
    }

  } return output;
};

module.exports = findKey;