// https://school.programmers.co.kr/learn/courses/30/lessons/250136

const solution = (land) => {
  let queue = [[0, 0]]; // bfs의 큐 (x, y)
  const dx = [-1, 1, 0, 0]; // 좌우 이동
  const dy = [0, 0, -1, 1]; // 상하 이동
  const n = land.length; // y 길이
  const m = land[0].length; // x 길이
  let oilMap = new Map(); // { idx : 해당 idx에서 얻을 수 있는 석유량 }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let indexSet = new Set(); // 석유 덩어리를 얻을 수 있는 열의 Index를 저장
      let tempCount = 0; // 해당 석유 덩어리의 석유량
      if (land[j][i] === 1) {
        queue = [[j, i]];
        while (queue.length > 0) {
          let [y, x] = queue.shift();
          if (land[y][x] === 1) {
            land[y][x] = 0;
            tempCount++;
            if (!indexSet.has(x)) indexSet.add(x);

            for (let k = 0; k < 4; k++) {
              let ny = y + dy[k];
              let nx = x + dx[k];

              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < m &&
                ny < n &&
                land[ny][nx] === 1
              ) {
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
      if (tempCount !== 0) {
        for (let idx of indexSet) {
          oilMap.set(
            idx,
            oilMap.has(idx) ? oilMap.get(idx) + tempCount : tempCount
          );
        }
      }
    }
  }

  const answer = Math.max(...oilMap.values());
  return answer;
};

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);

// 매개변수
// land : 석유가 묻힌 땅과 석유 덩어리를 나타내는 2차원 정수 배열

// 출력
// 시추관 하나를 설치해 뽑을 수 있는 가장 많은 석유량을 반환하는 문제

// 문제 설명 및 해결
// 2차원 배열 land가 매개변수로 주어진다.
// 0은 땅, 1은 석유가 묻힌 땅을 나타낸다.
// 하나의 시추관을 설치해 뽑을 수 있는 가장 많은 석유량을 반환하는데, 시추관은 열 하나를 관통하는 형태여야 하며, 열과 열 사이에 시추관을 뚫을 수 없다.
// bfs를 사용해서 하나의 석유 덩어리의 크기를 구하고, 해당 석유 덩어리의 열을 저장하는 Set을 만들었다.
// 하나의 석유 덩어리의 크기를 구한 뒤, 해당 석유 덩어리의 열을 저장하는 Set을 순회하며
// 해당 열을 key로 하는 Map에 석유 덩어리의 크기를 저장했다.
// Map의 value 중 가장 큰 값을 반환했다.
// 두 번째 시도와 비슷한 방식인데, 효율성 테스트 5번을 통과하는게 신기하다.

// 첫 번째 시도
// dfs를 통해 전체 land를 순회하여 하나의 land의 count(석유량)과 해당 land의 col(열)을 저장하는 객체를 만들었다.
// dfs를 통해 만들어진 landObj를 순회하며 각 열에 해당하는 land의 count를 더해 answer에 저장했다.
// 정확성 테스트는 모두 통과하였으나, 효율성 테스트 2,3,5 시간 초과, 런타임 에러 발생

// const solution = (land) => {
//   let answer = 0;
//   const landObj = {};
//   let landNum = 0;

//   const dfs = (i, j) => {
//     if (
//       i < 0 ||
//       j < 0 ||
//       i >= land.length ||
//       j >= land[i].length ||
//       land[i][j] === 0
//     ) {
//       return;
//     }

//     if (land[i][j] === 1) {
//       landObj[landNum].count += 1;
//       landObj[landNum].col.add(j);
//     }

//     land[i][j] = 0;

//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);
//   };
//   for (let i = 0; i < land.length; i++) {
//     for (let j = 0; j < land[i].length; j++) {
//       if (land[i][j] === 1) {
//         landObj[landNum] = {
//           count: 0,
//           col: new Set([j]),
//         };
//         dfs(i, j);
//         landNum++;
//       }
//     }
//   }

//   for (let x = 0; x < land[0].length; x++) {
//     let temp = 0;
//     for (const key in landObj) {
//       if (landObj[key].col.has(x)) {
//         temp += landObj[key].count;
//       }
//     }
//     answer = Math.max(answer, temp);
//   }
//   return answer;
// };

// 두 번째 시도
// dfs를 통해 석유가 묻힌 땅의 크기를 구하고, 해당 땅의 열을 저장하는 Set을 만들었다.
// 석유가 묻힌 하나의 땅의 크기를 구한 뒤, 해당 땅의 열을 저장하는 Set을 순회하며
// 해당 열을 key로 하는 Map에 석유가 묻힌 땅의 크기를 저장했다.
// 효율성 테스트 5번 런타임 에러

// const solution = (land) => {
//   const oilMap = new Map();
//   let temp = 0;
//   let oilIndex = new Set();

//   const dfs = (i, j) => {
//     if (
//       i < 0 ||
//       j < 0 ||
//       i >= land.length ||
//       j >= land[i].length ||
//       land[i][j] === 0
//     ) {
//       return;
//     }

//     if (land[i][j] === 1) {
//       temp += 1;
//       oilIndex.add(j);
//     }

//     land[i][j] = 0;

//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);
//   };

//   for (let i = 0; i < land.length; i++) {
//     for (let j = 0; j < land[i].length; j++) {
//       if (land[i][j] === 1) {
//         dfs(i, j);
//         if (temp !== 0) {
//           for (let idx of oilIndex) {
//             oilMap.set(idx, oilMap.has(idx) ? oilMap.get(idx) + temp : temp);
//           }
//         }
//         temp = 0;
//         oilIndex = new Set();
//       }
//     }
//   }

//   return Math.max(...oilMap.values());
// };
