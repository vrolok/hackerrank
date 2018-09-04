function processData(input) {
  /**
  * In this challenge, we practice calculating a weighted mean.
  * @param {Function} input is a str e.g. '3\n1,2,3\n4,5,6', 
  * 1st part is length, 2nd - int array, 3rd - weights
  */
  let len, strX, strW;
  [len, strX, strW] = input.split('\n');

  const strArrX = strX.split(' ');
  const strArrW = strW.split(' ');
  
  const convertToNum = arr => arr.map(i => Number.parseInt(i));
  const numArrX = convertToNum(strArrX);
  const numArrW = convertToNum(strArrW);

  const format = x => parseFloat(x).toFixed(1);

  const sum = arr => arr.reduce((i, sum) => (sum += i));

  const xw = numArrX.map((x, i) => x * numArrW[i]);
  const sumXW = sum(xw);
  const sumW = sum(numArrW);

  const weghtedMean = sumXW / sumW;

  console.log(format(weghtedMean));
}