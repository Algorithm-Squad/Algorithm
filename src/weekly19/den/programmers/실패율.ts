/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 
 * 시작시간: 16:30
 * 종료시간: 17:00
 */

interface StageInfo {
  stage: number,
  rate: number
}

function solution(N: number, stages: number[]): number[] {
  let stageRates: StageInfo[] = [];
  let users = stages.length;

  for(let i = 1; i <= N; i ++){
    const notCleared = stages.filter((stage) => stage === i).length;
    const rate = notCleared / users;
    users -= notCleared;
    stageRates.push({ stage: i, rate: rate });
  }

  stageRates.sort((a, b) => {
    if(a.rate === b.rate) return a.stage - b.stage;
    else return b.rate - a.rate;
  });

  return stageRates.map(obj => obj.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))  // [3,4,2,1,5]
console.log(solution(4, [4,4,4,4,4])) // [4,1,2,3]