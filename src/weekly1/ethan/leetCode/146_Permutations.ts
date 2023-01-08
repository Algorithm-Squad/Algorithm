function permute(nums: number[]): number[][] {
  const answer: Array<Array<number>> = [];

  const dfs = (cases: Array<number> = []) => {
    if (cases.length === nums.length) answer.push(cases);

    console.log(cases);
    for (let i = 0; i < nums.length; i++) {
      if (!cases.includes(nums[i])) dfs([...cases, nums[i]]);
    }
  };

  dfs();

  return answer;
}

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
console.log(permute([1])); // [[1]]
