/**
 * 시작시간: 15:00
 * 종료시간: 15:30 -> 실패
 *
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 *
 * @returns {number}
 */

const solution1 = (N, road, K) => {
  let answer = 0;
  let timeCheck = 0;

  // DFS 탐색 -> 헬퍼 함수 구현

  const dfs = (to, time, index) => {};

  // road 2중 for문 순회
  road.forEach(([from, to, time], index) => {
    if (from === 1) {
      dfs(to, time, index);
    }
  });
};

console.log(
  solution1(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4
console.log(
  solution1(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4

/**
 * 시작시간: 모름
 * 종료시간: 오래걸림
 *
 * @param {*} N
 * @param {*} road
 * @param {*} K
 * @returns {number}
 */

function solution2(N, road, K) {
  // 각 마을까지 걸리는 시간을 저장하는 배열
  // K보다 커야함으로 Infinity 값 설정
  const delayTime = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);

  // 마을 별로 해당 마을 정보를 저장할 2차원 배열
  // N+1만큼의 방 생성
  const roads = Array.from(Array(N + 1), () => []);

  // 연결된 경로를 모두 roads에 저장
  road.forEach(([a, b, c]) => {
    roads[a].push({ to: b, time: c });
    roads[b].push({ to: a, time: c });
  });

  // 1번 마을까지 걸리는 시간 0으로 초기화
  let queue = [{ to: 1, time: 0 }];
  delayTime[1] = 0;

  while (queue.length) {
    let { to, time } = queue.shift();

    roads[to].forEach((next) => {
      // 1번 마을에서 다음 마을까지 걸리는 시간이 현재 마을까지 걸리는 시간 + 다음 마을까지 걸리는 시간보다 작을 경우
      if (delayTime[next.to] > delayTime[to] + next.time) {
        delayTime[next.to] = delayTime[to] + next.time;
        queue.push(next);
      }
    });
  }

  // K보다 작은 경로의 수를 반환
  return delayTime.filter((time) => time <= K).length;
}

console.log(
  solution2(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4
console.log(
  solution2(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4
