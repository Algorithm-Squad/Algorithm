/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * 시작시간: 17:30
 * 종료시간: 18:00
 * 
 * 8, 1 => 3,3
 * 10, 2 => 4,3
 * 12, 3 => 5,3
 * 14, 4 => 6,3
 * 16, 5 => 7,3
 * 18, 6 => 8,3
 * 
 * 풀이과정
 * 1. brown + yellow = width * height
 * 2. (height - 2) * (width - 2) = yellow
 * 
 * 첫 번째 예시
 * 1. 10 + 2 = width * height
 * 2. 2 = (height - 2) * (width - 2)
 */

function solution(brown, yellow) {
  const sum = brown + yellow;

  for(let width = brown; width > 0; width--){
    const height = sum / width;
    if((height - 2) * (width - 2) === yellow){
      return [width, height];
    }
  }
}

console.log(solution(10, 2)) // [4, 3]
console.log(solution(8, 1)) // [3, 3]
console.log(solution(24, 24)) // [8, 6]