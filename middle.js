const middle = (arr) => {
  let output = [];

  if (arr.length < 2) {
    output = [];

  } else if (arr.length % 2 === 0) {
    const middleIndexSt = (arr.length / 2) - 1;
    const middleIndexNd = arr.length / 2;
    output.push(arr[middleIndexSt], arr[middleIndexNd]);

  } else {
    const middleIndex = Math.floor(arr.length / 2);
    output.push(arr[middleIndex]);

  } return output.join(', ');
};

module.exports = middle;