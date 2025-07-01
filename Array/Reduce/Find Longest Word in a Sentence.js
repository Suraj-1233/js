 const sentence = "Reduce is very powerful and cool";
const longest = sentence.split(" ").reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
  console.log(longest); // "powerful"
  