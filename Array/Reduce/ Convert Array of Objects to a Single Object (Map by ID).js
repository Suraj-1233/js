const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Neha" },
    { id: 3, name: "Ravi" }
  ];
  // Output: { 1: 'Aman', 2: 'Neha', 3: 'Ravi' }
  

  const mapped = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});
  console.log(mapped);
  
