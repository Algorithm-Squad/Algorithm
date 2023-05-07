/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * 
 * 시작시간: 17:40
 * 종료시간: 18:10
 */

function solution(lottos:number[], win_nums:number[]):number[] {
  const matched = lottos.filter(number => win_nums.includes(number)).length;
  const zeros = lottos.filter(number => number === 0).length;

  let minRank = 7 - matched >= 6 ? 6 : 7 - matched;
  let maxRank = minRank - zeros < 1 ? 1 : minRank - zeros;

  return [maxRank, minRank];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));  // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]