const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (acc, curr) => (
    acc.concat(curr)
  );
  console.log(arrays.reduce(flatten));