/**
 * 실패율 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * @param N 전체 스테이지의 개수 (1~500)
 * @param stages 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열
 * @returns 실패율 내림차순 으로 스테이지 번호가 담긴 배열
 * 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 */

function solution(N:number, stages:number[]):number[] {
  const answer = [];

  let failureRateArray:number[][] = [];
  let person = 0;
  let total = stages.length ;
  // 스테이지 번호별로 그 번호와 같은 숫자를 카운트하고 도달한 사람으로 나눈값을 배열에 넣음
  for(let i = 1; i <= N; i++) {
    for(let j = 0; j < stages.length; j++) {
      if(stages[j] === i) {
        person++;
      } else continue;
    }
    const failureRate = !total ? 0 : person / total;
    failureRateArray.push([i, failureRate]);
    total -= person;
    person = 0;
  }

  // 그 배열을 내림차순으로 정렬하고 스테이지 번호를 배열로 반환
  const sortedStageInfo = failureRateArray.sort((a, b) => b[1] - a[1]);
  return sortedStageInfo.map((rate) => rate[0]);
}