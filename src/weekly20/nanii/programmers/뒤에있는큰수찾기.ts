/**
 * 뒤에 있는 큰 수 찾기 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/154539#
 * @param numbers 정수로 이루어진 배열
 * @returns 모든 원소에 대한 뒷 큰수를 차례로 담은 배열
 */

function solution(numbers: number[]):number[] {
  const answer = [];
  const stack:number[] = [];
  const indexStack:number[] = [];

  for(let i = 0; i < numbers.length; i++) {
    while(indexStack && numbers[indexStack[indexStack.length - 1]] < numbers[i]) {
      answer[indexStack.pop()] = numbers[i];
    }
    indexStack.push(i);
    answer.push(-1);
  }
  return answer;
}