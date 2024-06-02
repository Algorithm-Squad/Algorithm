function solution(topping: number[]): number {
  var answer = 0;
  // 전체 토핑을 담는 Map 객체(key: 토핑 이름, value: 토핑 개수)
  const toppingMap = new Map();
  // 1명이 가진 토핑 종류
  const ATopping = new Set();

  // for문으로 topping 배열을 Map 객체로 정리
  for (let i = 0; i < topping.length; i++) {
    // toppingMap에 토핑이 존재하는 경우 기존의 개수에 + 1, 없는 경우 새로운 토핑을 추가하고 개수를 1로 초기화
    toppingMap.has(topping[i])
      ? toppingMap.set(topping[i], toppingMap.get(topping[i]) + 1)
      : toppingMap.set(topping[i], 1);
  }

  // for문으로 topping을 돌며 토핑 하나씩 전체 Map에서 ATopping으로 이동(Map은 다른 한명이 가진 토핑이 됨)
  for (let i = 0; i < topping.length; i++) {
    let count = toppingMap.get(topping[i]) - 1;
    ATopping.add(topping[i]);

    count === 0
      ? toppingMap.delete(topping[i])
      : toppingMap.set(topping[i], count);

    // Map에서 Set으로 토핑을 하나씩 옮기면서, 두개의 토핑 종류 개수가 같을 경우 answer + 1
    if (ATopping.size === toppingMap.size) answer++;
  }

  return answer;
}

// 20문제 중 2문제 통과(18문제 시간초과)
// slice는 시간복잡도 O(n)
// 토핑의 길이는 최대 1,000,000

// function solution(topping: number[]): number {
//   let answer = 0;

//   for (let i = 1; i < topping.length; i++) {
//     let left = new Set(topping.slice(0, i));
//     let right = new Set(topping.slice(i, topping.length));

//     if (left.size === right.size) {
//       answer++;
//     }
//   }

//   return answer;
// }
