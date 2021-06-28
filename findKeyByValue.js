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

module.exports = findKeyByValue;
