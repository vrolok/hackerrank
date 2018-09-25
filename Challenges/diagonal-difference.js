function diagonalDifference(arr) {
  let ld = 0;
  let rd = 0;
  let len = arr[0].length;
  
  arr.forEach((a, i) => {
    ld += a[i];
    rd += a[--len];
  })

  return Math.abs(ld - rd)
}
