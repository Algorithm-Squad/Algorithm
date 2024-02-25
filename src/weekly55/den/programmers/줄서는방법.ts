/**
 * n: 3
 * [1,2,3]
 * [1,3,2]
 * [2,1,3]
 * [2,3,1]
 * [3,1,2]
 * [3,2,1]
 *
 * dfs를 통해 순열을 구한다.
 */

export const solution = (n: number, k: number): number[] => {
  const answer: number[][] = [];

  const sequenceLine = Array.from({ length: n }, (_, i) => i + 1);
  const visited = Array.from({ length: n }, () => false);

  const dfs = (depth: number, temp: number[]) => {
    if (depth === n) {
      answer.push(temp);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(depth + 1, [...temp, sequenceLine[i]]);
      visited[i] = false;
    }
  };

  dfs(0, []);

  return answer[k - 1];
};

console.log(solution(3, 5)); // [3,1,2]
