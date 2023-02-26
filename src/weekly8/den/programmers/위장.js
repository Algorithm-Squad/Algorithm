/**
 * 문제풀처: https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * 시작: 12:55 
 * 종료: 14:00
 * 
 */

function solution(clothes) {
  let closet = new Map();

  clothes.forEach((set) => {
    const [name, type] = set;
    if(!closet.has(type)) closet.set(type, []);
    closet.get(type).push(name);
  });

  const totalClothes = clothes.length;
  const totalType = closet.size;

  let totalCombination = 0;

  for(let i = 1; i <= totalType; i++){
    totalCombination += combination(totalClothes, i);
  }
  
  let sameTypeCombination = 0;

  if(totalType != 1){
    closet.forEach((names) => {
      if(names.length > 1 && names.length <= totalType) {
        for(let i = 2; i <= names.length; i++){
          sameTypeCombination += combination(names.length, i);
        };
      }
      if(names.length > 1 && names.length > totalType) {
        for(let i = 2; i <= names.length; i++){
          sameTypeCombination += combination(names.length, i);
        };
      }
    })
  }

  return totalCombination - sameTypeCombination;
}

function factorial(num){
  return num === 0 ? 1 : num * factorial(num - 1);
}

function combination(total, select){
  return factorial(total) / (factorial(select) * factorial(total - select));
}

console.log(solution([["crow_mask", "face"],
                      ["blue_sunglasses", "face"],
                      ["smoky_makeup", "face"]])); // 3

console.log(solution([["yellow_hat", "headgear"], 
                      ["blue_sunglasses", "eyewear"], 
                      ["green_turban", "headgear"]])); // 5


console.log(solution([["yellow_hat", "headgear"], 
                      ["blue_sunglasses", "eyewear"], 
                      ["green_turban", "headgear"],
                      ["1", "a"],
                      ["2", "a"]])); // 23