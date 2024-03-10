function solution(n: number, works: number[]): number {
  if (works.reduce((pre, cur) => pre + cur) <= n) return 0;

  let sorted = works.sort((a, b) => b - a);
  const length = works.length;

  while (n) {
    const max = sorted[0];

    for (let i = 0; i < length; i++) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if (n === 0) break;
    }
  }

  return sorted.reduce((pre, cur) => pre + cur * cur, 0);
}

// 문제 풀이
// 1. 퇴근 전까지 모든 업무를 끝낼 수 있는 경우(잔업의 총 합 <= 퇴근까지 남은 시간)는 0을 반환
// 2. works 배열을 내림차순으로 정렬하여 sorted에 저장
// 3. while문을 돌면서 가장 큰 수(sorted[0])를 max 변수에 저장
// 4. for문을 돌면서 가장 큰 수와 같거나

// 효율성 테스트 실패(시간 초과)

// export function solution(n: number, works: number[]): number {
//   if (works.reduce((pre, cur) => pre + cur) <= n) return 0;

//   while (n > 0) {
//     works.sort((a, b) => b - a);
//     let temp = works[0];
//     works[0] = temp - 1;
//     n--;
//   }

//   return works.reduce((pre, cur) => pre + cur * cur, 0);
// }

// 반복문에서 매번 sort로 정렬을 하고 있기 때문에 비효율적
//
