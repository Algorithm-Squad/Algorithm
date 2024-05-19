/**
 * 시소짝꿍 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/152996
 * @param {*} weights 몸무게 목록
 * @returns 존재하는 시소 짝꿍 수
 * 중심으로부터 2m, 3m, 4m 지점에 좌석이 하나씩 있음
 * 마주보고 탔을 때 사람 무게, 좌석 간의 거리 곱이 같을 때 시소 짝꿍
 */
function solution(weights) {
  let answer = 0;
  const answerMap = new Map();

  const sortedWeights = weights.sort((a, b) => b - a); // 큰 값부터 짝꿍 가능 여부 판단
  const ratio = [1, 3 / 2, 2, 4 / 3]; // 각 자리에서 나올 수 있는 비율

  sortedWeights.forEach((w) => {
    // 현재 무게에서 가능한 짝꿍 수 계산
    ratio.forEach((r) => {
      // 비율을 순회하면서 현재 무게와 곱한 값이 Map에 존재하면 짝꿍 수 증가
      if (answerMap.has(w * r)) answer += answerMap.get(w * r);
    });

    // 현재 무게를 Map Key로 추가하고
    answerMap.set(w, (answerMap.get(w) ?? 0) + 1);
  });

  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
