/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/120850
 */

function solution(my_string: string): number[] {
  return my_string.split("")
          .sort()
          .filter(char => !Number.isNaN(Number(char)))
          .map(string => Number(string));
}

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]

	
	