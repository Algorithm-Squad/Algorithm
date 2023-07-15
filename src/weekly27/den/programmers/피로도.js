/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/87946
 * 시작시간: 19:40
 * 종료시간: 20:40
 * 
 * 위 코드 풀이과정.
 * 1. 재귀함수를 만든다.
 * 2. 재귀함수의 인자로 남은 피로도, 남은 던전, 카운트를 넣는다. 
 * 3. 남은 던전이 없으면, answer와 count를 비교하여 더 큰 값을 answer에 넣는다.
 * 4. 남은 던전이 있으면, 남은 던전을 순회하며, 피로도가 남은 던전의 최소 피로도보다 크거나 같으면, 재귀함수를 호출한다.
 * 5. 재귀함수를 호출할 때, 피로도에서 소모되는 피로도를 뺀 값을 넣고, 남은 던전에서 현재 던전을 제외한 던전을 넣고, 카운트에 1을 더한다.
 * 6. 재귀함수가 종료되면, answer를 반환한다.
 */

function solution(k, dungeons) {
  let answer = 0;
  
  const recursion = (remainingK, remainingDungeons, count) => {
    if (remainingDungeons.length === 0) {
      answer = Math.max(answer, count);
      return;
    }
    remainingDungeons.forEach(([least, consume], i) => {
      if (remainingK >= least) {
        const remain = remainingK - consume;

        recursion(
          remain,
          remainingDungeons.filter((_, index) => index !== i),
          count + 1
        );
      }
    });
  }

  recursion(k, dungeons, 0);
  return answer;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]])); // 3

