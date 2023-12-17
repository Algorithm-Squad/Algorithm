// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  // 방문 여부를 저장하는 배열
  const visited = Array(n).fill(false);

  const dfs = (i) => {
    visited[i] = true;
    // i번 컴퓨터와 연결된 컴퓨터들을 찾아서 dfs를 호출한다.
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    // 방문 여부가 false인 경우에만 dfs를 호출하고 answer를 증가시킨다.
    // 그 이유는, 방문 여부가 true인 경우에는 이미 이전 dfs에서 방문한 컴퓨터이기 때문이다.
    // 이전 dfs에서 방문한 컴퓨터라는 것은 연결된 네트워크이기 때문에 추가로 dfs를 호출할 필요가 없다.
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

// 매개변수
// n: 컴퓨터의 개수
// computers: 컴퓨터의 연결에 대한 정보를 담은 2차원 배열

// 출력
// 컴퓨터 네트워크의 개수

// 문제 설명 및 해결
// 컴퓨터의 개수 n과 컴퓨터의 연결에 대한 정보를 담은 2차원 배열 computers가 주어졌을 때,
// 네트워크의 개수를 구하는 문제이다.
// computers[i][j]는 i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 1, 아니면 0이다.
// computers[i][i]는 항상 1이다.
// 연결되어 있는 컴퓨터들을 하나의 네트워크라고 할 때,
// 컴퓨터 네트워크의 개수를 반환하면 된다.
// 컴퓨터 네트워크의 개수를 구하기 위해서는 dfs를 사용하면 된다.
// dfs를 사용하여 연결된 컴퓨터들을 모두 방문하고,
// 방문하지 않은 컴퓨터가 있다면 그 컴퓨터와 연결된 컴퓨터들을 모두 방문하면 된다.
// 이렇게 방문하지 않은 컴퓨터가 없을 때까지 반복하면, 컴퓨터 네트워크의 개수를 구할 수 있다.
