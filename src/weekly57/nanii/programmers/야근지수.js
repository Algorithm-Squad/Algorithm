/**
 * 야근지수 / Lv.3
 * https://school.programmers.co.kr/learn/courses/30/lessons/12927
 * @param {*} n
 * @param {*} works
 * @returns
 * 야근지수 : 시작시점 + 남은 일의 작업량을 제곱하여 더한 값
 * 1시간동안 1만큼 처리가능할 때 퇴근 까지 남은 시간 N, 일에대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴
 */
function solution(n, works) {
  // 배열에서 1씩 빼고, 제곱해서 더한값을 리턴

  // 1. 배열을 내림차순으로 정렬
  const sortedWorks = works.sort((a, b) => b - a);

  // 2. 배열의 첫번째 요소부터 1씩 빼고, n을 감소시킴
  for (const i in sortedWorks) {
    if (n === 0) break;
    sortedWorks[i] -= 1;
    n -= 1;
  }

  // 3. n 만큼 빼고 남은 배열의 요소들을 제곱하여 더한값을 리턴
  const result = sortedWorks.reduce((acc, cur) => acc + cur ** 2, 0);
  return result < n ? 0 : result;
}
