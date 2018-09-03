function processData(input) {
  /**
   * In this challenge, we practice calculating the mean, median, and mode.
   * @param {Function} input is a str e.g. '3\n1,2,3'. 1st part is length, 2nd - array
   */
  let len, str;
  [len, str] = input.split('\n');

  const strArr = str.split(' ');
  
  const convertToNum = arr => arr.map(i => Number.parseInt(i));
  const numArr = convertToNum(strArr).sort((a, b) => a - b);

  const format = x => {
    /**
     * toFixed(n), return float with 1 digit after dot
     */
    return x % 1 !== 0 ? parseFloat(x).toFixed(1) : x;
  };

  const sum = arr => arr.reduce((i, sum) => (sum += i));
  const mean = arr => sum(arr) / len;

  const median = (arr, len) => {
    if (len % 2 === 0) {
      return (arr[len / 2] + arr[len / 2 - 1]) / 2;
    } else {
      return arr[Math.floor(len / 2)];
    }
  };

  const mode = arr => {
    let obj = {};
    let occurrence = 0;
    let dubValue = 0;

    for (val of arr) {
      if (val in obj) {
        obj[val]++;
        if (occurrence < obj[val]) {
          occurrence = obj[val];
          dubValue = val;
        }
      } else {
        obj[val] = 1;
      }
    }
    return dubValue > 0 ? dubValue : arr[0];
  };

  console.log(format(mean(numArr)));
  console.log(format(median(numArr, len)));
  console.log(format(mode(numArr)));
}