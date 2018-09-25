function miniMaxSum(arr) {
  arr.sort();
  
  const sum = arr => arr.reduce((i, sum) => (sum += i));

  console.log(sum(arr.slice(0, 4)), sum(arr.slice(1)));
}
