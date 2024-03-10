export function solution(n: number, left: number, right: number): number[] {
  const answer: number[] = [];

  const startRow = Math.floor(left / n);
  const startCol = left % n;
  const endRow = Math.floor(right / n);
  const endCol = right % n;

  for (let i = startRow; i <= endRow; i++) {
    const row: number[] = [];
    for (
      let j = i === startRow ? startCol : 0;
      j <= (i === endRow ? endCol : n - 1);
      j++
    ) {
      row.push((i > j ? i : j) + 1);
    }
    answer.push(...row);
  }

  return answer;
}

// 문제 풀이
// 1. 몫과 나머지를 이용하여 시작하는 지점(left)와 끝나는 지점(right)의 좌표를 구할 수 있음
// 2. 찾은 시작점과 끝나는 지점만 반복문을 돌려 해당하는 값을 찾아냄

// 첫 번째 접근
// 규칙: 좌표의 (x, y)값 중 더 큰 값이 해당 위치의 숫자가 됨(ex, (1, 1)의 값은 2)
// 이중반복문을 통해 (x, y)값을 비교하고 둘 중 더 큰 값에 + 1(인덱스는 0부터 시작하기 때문)을 하여 answer 배열을 만듦
// 완성된 answer 배열을 slice로 잘라 반환
// 불필요한 반복문으로 인해 효율성이 떨어짐

// function solution(n, left, right) {
//     const answer = [];

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             answer.push((i > j ? i : j) + 1);
//         }
//     }

//     return answer.slice(left, right + 1);
// }
