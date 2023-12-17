// 문제 자체가 이해가 되지 않네요ㅠ
function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  const dfs = (i) => {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}

// 왜 return이 2와 1이 나올까요..?
console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1
