// Count Frequency of Elements
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];


const frequency = arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(frequency);