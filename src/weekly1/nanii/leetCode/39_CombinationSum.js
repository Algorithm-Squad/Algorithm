/**
 * 39. Combination Sum
 * 문제 해석 : 주어진 배열 요소를 합하여 target을 만들 수 있는 모든 경우의 수를 배열로 나타내기
 *
 * 시간복잡도 : [Runtime 70 ms] [Beats 98.69%]
 * 공간복잡도 : [Memory 45.1 MB] [Beats 75.62%]
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let output = [];
  let answer = [];

  function backtrack (index, sum) {
    if(sum === target) {
      output.push([...answer]);
    } else {
      for(let i = index; i < candidates.length; i ++ ) {
        const arrSum = sum + candidates[i]; //sum = 0 부터 시작

        if(arrSum <= target) {
          answer.push(candidates[i]);
          backtrack(i, arrSum);
          // console.log(answer);
          answer.pop(); //answer 에서 마지막 요소를 뺌 - 합이 target될 때까지 빼고 더하기를 반복
        }
      }
    }
  }
  backtrack(0,0);
  return output;
};


candidates = [2,3,6,7];
target = 7;

// candidates = [2,3,5];
// target = 8;

// candidates = [2];
// target = 1;
console.log(combinationSum(candidates, target));