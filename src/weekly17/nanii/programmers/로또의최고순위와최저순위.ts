/**
 * 로또의 최고순위와 최저순위 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * @param lottos 로또 번호를 담은 배열
 * @param win_nums 당첨 번호를 담은 배열
 * @returns 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열
 */
function solution(lottos: number[], win_nums: number[]) :number[] {
  let count: number = 0;
  let zero: number = 0;

  for(let i = 0; i < lottos.length; i ++) {
    const lotto:number = lottos[i];
    if(lotto === 0) {
      zero++;
      continue;
    } else {
      if(win_nums.includes(lotto)) count++;
    }
  }
  return [7 - Math.max(count + zero, 1), 7 - Math.max(count, 1)];
}