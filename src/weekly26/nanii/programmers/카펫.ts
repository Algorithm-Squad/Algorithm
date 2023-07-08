/**
 * 카펫 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * @param brown 개수
 * @param yellow 개수
 * @returns 카펫의 가로, 세로 크기
 */
function solution(brown: number, yellow:number): number[] {
  const answer = [];
  const total = brown + yellow;
  for(let width = 3; width < total; width ++) {
    const height = total / width;
    if(height % 1) continue;
    const yellowCount = (width - 2) * (height - 2);
    if(yellowCount === yellow) {
      answer.push(height, width);
      break;
    }
  }
  return answer;
}