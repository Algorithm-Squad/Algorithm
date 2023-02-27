/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/42747
 */

function solution(arr) {
  let result = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      result = i + 1;
    }
  }
  return result;
}

console.log(solution([3,0,6,1,5])); // 3
console.log(solution([1,2,3,4,5,]));