function solution(numbers, target) {
  let answer = 0;

  (function dfs(index, sum) {
    if (index === numbers.length && sum != target) return;
    if (index === numbers.length && sum === target) {
      answer++;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  })(0, 0)
  
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));

// function solution(numbers, target) {
//   var answer = 0;

//   (function DFS(numbers, array = []){
//     if(numbers.length === 0) {
//       const result = array.reduce((pv, cv) => pv + cv, 0)
//       if(result === target) answer += 1;
//       return;
//     }

//     let number = numbers.pop();
//     let plus = number * 1;
//     let minus = number * -1;

//     let plusArray = [...array];
//     let minusArray = [...array];

//     plusArray.push(plus)
//     minusArray.push(minus)
//     DFS(numbers, plusArray)
//     DFS(numbers, minusArray)
//   })(numbers);

//   return answer;
// }

// console.log(solution([1, 1, 1, 1, 1], 3));
// console.log(solution([4, 1, 2, 1], 4));
