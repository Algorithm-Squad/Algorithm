function lexicalOrder(n: number): number[] {
  const answer: number[] = [];

  function dfs(num) {
    for (let i = 0; i <= 9; i++) {
      const curNum = num * 10 + i;
      if (curNum === 0) continue;
      if (curNum > n) return;

      answer.push(curNum);
      dfs(curNum);
    }
  }
  dfs(0);

  return answer;
}
