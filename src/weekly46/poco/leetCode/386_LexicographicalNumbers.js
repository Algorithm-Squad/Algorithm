// https://leetcode.com/problems/lexicographical-numbers/description/
/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
  const result = [];
  const visited = new Array(n + 1).fill(false);
  visited[0] = true;

  const dfs = (i) => {
    visited[i] = true;
    result.push(i);
    for (let j = 0; j <= 9; j++) {
      const next = i * 10 + j;
      if (next <= n && !visited[next]) {
        dfs(next);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  return result;
};

console.log(lexicalOrder(200)); //[1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
// 매개변수
// n: 1 이상 5,000 이하의 자연수

// 출력
// 1부터 n까지의 정수를 사전 순으로 정렬한 배열

// 문제 설명 및 해결
// 정수 n이 주어지면 [1, n] 범위의 모든 숫자를 사전 순으로 정렬하여 반환하는 문제
// O(n)의 시간 안에 실행되고 O(1)의 추가 공간을 사용하는 알고리즘을 구현해야 한다.
// 사전 순으로 정렬이란 의미는 1, 10, 100, 1000, ... 순으로 정렬하는 것이다.
// 즉, 1, 10, 2, 3의 순서로 정렬해야한다.
// visited 배열을 사용하여 방문 여부를 저장하고,
// 해당 visited[i]가 false인 경우에만 dfs를 호출한다.
// dfs 함수에서는 visited[i]를 true로 바꾸고, result 배열에 i를 push한다.
// 그리고 0부터 9까지의 숫자를 i * 10 + j로 계산하여 next에 저장한다.
// next가 n보다 작거나 같고, 방문하지 않은 경우에만 dfs를 호출한다.
// 이렇게 dfs를 호출하면, 1, 10, 100, 1000, ... 순으로 정렬된다.
// 만약 매개변수 n이 1000보다 작을 때, dfs의 매개변수가 10일 때, j가 0부터 9까지 반복하면서
// 100이 다음 dfs로 호출되지만, 100의 next 1000은 n보다 크기 때문에 dfs를 호출하지 않는다.
// 따라서, 100 다음에는 j가 1 증가하여 101이 push가 된다.
// 이렇게 1, 10, 100, 101, 102, ... 순으로 정렬된다.
// 결국 사전적으로 정렬이라는 의미는 숫자의 n번째 자리가 빠른 경우를 말한다.
