const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should fail
assertArraysEqual([1, 2, 3, 5, "hi!"], [1, 2, 3, 5, "hi!"]); // => should pass
assertArraysEqual([1, "2", 3], [1, 2, 3]); // => should fail