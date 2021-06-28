// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  let totalCount = {};

  for (const names of allItems) {
    if (!totalCount[names]) {
      totalCount[names] = 1;

    } else if (names === names) {
      totalCount[names] += 1;

    }
  }

  for (const items in itemsToCount) {
    if (itemsToCount[items] === false) {
      delete totalCount[items];
    }
  }

  return totalCount;
};

module.exports = countOnly;