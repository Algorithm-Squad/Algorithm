/**
 * 위장 / Lv2 /
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 문제해석 : 2차원배열에서 [0 : 이름][1: 종류] -> key: 종류, Value: 아이템명
 * 2개, 1개 => 2 + 1 + (2*1)
 * 3개, 2개, 1개 => (3 + 2 + 1) + (3*2 + 3*1+ 2*1) + (3*2*1)
 * (a + b + c) + (a*b + b*c+ c*a) + (a*b*c) = (a+1)(b+1)(c+1) - 1
 * x^3 + (a + b+ c)x^2 + (a*b + b*c + c*a)x + (a*b*c) = (a+x)(b+x)(c+x)
 *
 * 시간복잡도 : O(n)
 * 공간복잡도 : O(n)
 *
 * @param {*} clothes
 * @returns
 */
function solution(clothes) {
  const map = new Map();

  clothes.forEach((cloth) => {
    const item = cloth[1];
    if(!map.has(item)) map.set(item, 1);
    else map.set(item, map.get(item) + 1);
  });

  return [...map.values()].reduce((acc, cur) => {
    return acc = acc * (cur + 1)
  }, 1) - 1;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]; //5
// const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]; //3
console.log(solution(clothes));