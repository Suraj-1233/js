// Flatten a 2D Array

const arr = [[1, 2], [3, 4], [5]];
// Output: [1, 2, 3, 4, 5]
const flattened = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5]
