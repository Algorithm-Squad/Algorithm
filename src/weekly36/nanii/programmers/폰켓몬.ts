/**
 * 폰켓몬 / Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param nums 폰켓몬의 종류가 담긴 1차원 배열
 * @returns 선택할 수 있는 폰켓몬의 최대 종류 수
 */
function solution(nums: number[]): number {
  const n = nums.length / 2;
  const map = new Map();

  nums.forEach((num) => {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  });

  const keysLength = [...map.keys()].length;

  if (n >= keysLength) return keysLength;
  return n;
}