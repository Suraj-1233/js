const arr = [1, 2, 3, 2, 1, 4];
// Output: [1, 2, 3, 4]
const unique = arr.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
  }, []);
  console.log(unique);
  