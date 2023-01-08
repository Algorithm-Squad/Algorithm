function combinationSum(candidates: number[], target: number): number[][] {
  const answer: number[][] = [];
  let combination: number[] = [];

  const backtracking = (sum = 0, pointer = 0) => {
    if (sum === target) return answer.push(combination.slice());

    for (let i = pointer; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        combination.push(candidates[i]);
        backtracking(sum + candidates[i], i);
        combination.pop();
      }
    }
  };

  backtracking();

  return answer;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
