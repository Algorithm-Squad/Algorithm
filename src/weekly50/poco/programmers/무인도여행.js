// https://school.programmers.co.kr/learn/courses/30/lessons/154540

const solution = (maps) => {
  const result = [];
  const splitMaps = maps.map((map) => map.split(''));
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= splitMaps.length ||
      j >= splitMaps[0].length ||
      splitMaps[i][j] === 'X'
    )
      return 0;
    const now = parseInt(splitMaps[i][j]);
    splitMaps[i][j] = 'X';
    return now + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };
  for (let i = 0; i < splitMaps.length; i++) {
    for (let j = 0; j < splitMaps[i].length; j++) {
      if (splitMaps[i][j] !== 'X') result.push(dfs(i, j));
    }
  }
  return result.length ? result.sort((a, b) => a - b) : [-1];
};

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])); // [1, 1, 27]

// 매개변수
// maps: 1차원 배열

// 출력
// 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 반환

// 문제 설명 및 해결
// 지도를 나타내는 1차원 배열 maps가 매개변수로 주어질 때, "X"는 바다를 나타내며
// 상하좌우로 연결된 땅들은 하나의 무인도를 이룬다.
// 상하좌우로 연결된 땅들에 적힌 숫자들을 모두 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타낸다.
// 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 반환하고 만약 지낼 수 있는 무인도가
// 없다면 -1을 배열에 담아 반환하는 문제다.
// DFS를 사용해서 문제를 해결했다. 이중 for문으로 maps를 순회하며 "X"가 아닌 경우에 dfs를 실행했다.
// dfs안에서는 i와 j가 각각 탈출 조건에 맞다면 0을 반환하고, 아닌 경우에는 위, 아래, 왼쪽, 오른쪽으로 dfs를 실행했다.

// 첫 번째 시도
// DFS를 통해 문제 해결을 시도
// 이중 for문으로 maps를 순회하며 "X"가 아닌 경우에만 DFS를 실행하도록 했다.
// 테스트코드 3 ~ 19번 실패
// const solution = (maps) => {
//   const answer = [];
//   const splitMaps = maps.map((map) => map.split(''));
//   let tempDays = 0;

//   const dfs = (i, j) => {
//     if (i < 0 || i >= splitMaps.length || j < 0 || j >= splitMaps[i].length) {
//       return;
//     }
//     if (i + 1 < splitMaps.length && splitMaps[i + 1][j] !== 'X') {
//       tempDays += parseInt(splitMaps[i + 1][j]);
//       splitMaps[i + 1][j] = 'X';
//       dfs(i + 1, j);
//     }
//     if (i - 1 > 0 && splitMaps[i - 1][j] !== 'X') {
//       tempDays += parseInt(splitMaps[i - 1][j]);
//       splitMaps[i - 1][j] = 'X';
//       dfs(i - 1, j);
//     }
//     if (j + 1 < splitMaps[i].length && splitMaps[i][j + 1] !== 'X') {
//       tempDays += parseInt(splitMaps[i][j + 1]);
//       splitMaps[i][j + 1] = 'X';
//       dfs(i, j + 1);
//     }
//     if (j - 1 > 0 && splitMaps[i][j - 1] !== 'X') {
//       tempDays += parseInt(splitMaps[i][j - 1]);
//       splitMaps[i][j - 1] = 'X';
//       dfs(i, j - 1);
//     }
//   };

//   for (let i = 0; i < splitMaps.length; i++) {
//     for (let j = 0; j < splitMaps[i].length; j++) {
//       tempDays = 0;
//       if (splitMaps[i][j] === 'X') continue;
//       if (splitMaps[i][j] !== 'X') {
//         tempDays += parseInt(splitMaps[i][j]);
//         splitMaps[i][j] = 'X';
//         dfs(i, j);
//         answer.push(tempDays);
//       }
//     }
//   }
//   return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
// };
