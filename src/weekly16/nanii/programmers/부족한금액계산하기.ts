/**
 * 부족한금액계산하기 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * @param {*} price 원래 이용료
 * @param {*} money 가진 돈
 * @param {*} count 이용 횟수
 * @returns
 */
function solution(price:number, money:number, count:number) :number {
  const total :number = price * (count * (count + 1) / 2);
  return total > money ? total - money : 0;
}