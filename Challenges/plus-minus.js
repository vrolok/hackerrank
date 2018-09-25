function plusMinus(arr) {
  let neg = 0;
  let pos = 0;
  let zero = 0;
  let len = arr.length;

  arr.forEach(el => {
    if (el < 0) {
      neg++;
    } 
    else if (el > 0) {
      pos++;
    } else {
      zero++;
    }
  })

  let round = (x) => parseFloat(x).toFixed(6);
  
  console.log(round(pos / len));
  console.log(round(neg / len));
  console.log(round(zero / len));
}
