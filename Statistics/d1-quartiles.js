function processData(input) {
  /**
   * In this challenge, we practice calculating quartiles.
   * @param {Function} input is a str e.g. '3\n1,2,3',
   * 1st part is length, 2nd - int array
   */
  let len, str;
  [len, str] = input.split('\n');

  const strArr = str.split(' ');
  
  const convertToNum = arr => arr.map(i => Number.parseInt(i));
  const numArr = convertToNum(strArr).sort((a, b) => a - b);
  const numLen = Number.parseInt(len);
  
  const median = arr => {
    const len = arr.length;
    const mid = len / 2;
    if (len % 2 === 0) {
      // returns an avg of 2 mid elements
      return (arr[mid] + arr[mid - 1]) / 2;
    } else {
      // returns a mid element
      return arr[Math.floor(mid)];
    }
  };
  
  const halves = (arr, len) => {
    const mid = len / 2;
    if (len % 2 === 0) {
      return [arr.slice(0, mid), arr.slice(mid)]
    } else {
      return [arr.slice(0, mid), arr.slice(mid + 1)]
    }
  }
  const lu = halves(numArr, numLen);
  const q1 = median(lu[0]);
  const q2 = median(numArr);
  const q3 = median(lu[1]);

  console.log(`${q1}\n${q2}\n${q3}`);
}