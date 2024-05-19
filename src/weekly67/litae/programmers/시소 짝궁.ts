export function solution(weights: number[]): number {
  let answer = 0;
  const store = {};
  const ratios = [1 / 2, 1, 2 / 3, 3 / 4, 2];

  weights
    .sort((a, b) => a - b)
    .forEach((weight) => {
      let temp: number;
      ratios.forEach((ratio) => {
        if (((temp = weight * ratio), store[temp])) {
          answer += store[temp];
        }
      });
      !store[weight] ? (store[weight] = 1) : store[weight]++;
    });

  return answer;
}

// 첫 번째 풀이
// 테스트 케이스 17개 중 9개 통과(52.9%) / 8개 시간초과

// function solution(weights: number[]): number {
//   let answer = 0;
//   const ratio = [1 / 2, 1, 2 / 3, 3 / 4, 2];
//   const sorted = weights.sort((a, b) => a - b);

//   for (let i = 0; i < weights.length - 1; i++) {
//     for (let j = i + 1; j < weights.length; j++) {
//       if (ratio.includes(sorted[i] / sorted[j])) answer++;
//     }
//   }

//   return answer;
// }
