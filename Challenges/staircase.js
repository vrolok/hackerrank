function staircase(n) {
  let step = n;
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(--step) + '#'.repeat(i));
  }
}
