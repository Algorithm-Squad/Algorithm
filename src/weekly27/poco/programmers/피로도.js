// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(fatigue, dungeons) {
  const answer = [];
  const visitedDungeons = Array(dungeons.length).fill(false);

  function dfs(count, fatigue) {
    // count는 몇개의 던전을 진행했는지를 나타내는 변수
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      const currentDungeons = dungeons[i];
      const requiredFatigue = currentDungeons[0];
      const consumedFatigue = currentDungeons[1];
      const isDungeonVisited = visitedDungeons[i];

      if (fatigue >= requiredFatigue && !isDungeonVisited[i]) {
        // i번째 던전을 방문했다고 표시
        isDungeonVisited[i] = true;
        dfs(count + 1, fatigue - consumedFatigue);
        // 완전 탐색을 위한 i번째 던전 방문 취소 표시
        isDungeonVisited[i] = false;
      }
    }
  }

  dfs(0, fatigue);

  // 가장 많이 진행된 단계 수를 반환
  return Math.max(...answer);
}

// 매개변수
// k : 유저의 현재 피로도
// dungeons : 각 던전별 "최소 필요 피로도", "소모 피로도"로 이루어진 2차원 배열

// 출력
// 유저가 탐험할 수 있는 최대 던전 수

// 문제 해결 및 설명
// dfs를 통해 풀이
// 먼저 for문을 통해 모든 던젼을 순회하면서 현재 피로도가 던전의 최소 필요 피로도보다 크거나 같고, 해당 던전을 방문하지 않았다면
// 해당 던전을 방문했다고 표시하고, dfs를 호출한다
// dfs를 호출할 때는 현재까지 진행된 던전의 갯수에 1을 더하고, 현재 피로도에서 해당 던전의 소모 피로도를 뺀 값을 넘겨준다
// dfs가 종료되면 해당 던전을 방문했다고 표시한 것을 취소한다(모든 경우의 수를 탐색하기 위해서)
// 이렇게 모든 던전을 순회하면서 dfs를 호출하면서 가장 많이 진행된 단계 수를 구할 수 있다

// 다른 풀이
// 순열을 이용한 풀이
// 순열(순서있는 조합)을 이용해서 전체 순회할 수 있는 던전의 경우의 수를 모두 구하고
// 각 경우의 수에 대해서 피로도를 계산해서 최대 던전 수를 구한다
// dfs에 비해 효율이 좋을지는 의문이다
function permute(nums) {
  if (nums.length <= 1) return [nums];

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const permutations = permute(rest);

    result = result.concat(
      permutations.map((permutation) => [nums[i], ...permutation])
    );
  }

  return result;
}

function solution1(fatigue, dungeons) {
  const permutations = permute(dungeons);
  let maxCount = 0;

  permutations.forEach((permutation) => {
    let currentFatigue = fatigue;
    let count = 0;

    for (let i = 0; i < permutation.length; i++) {
      const [requiredFatigue, consumedFatigue] = permutation[i];
      if (currentFatigue < requiredFatigue) {
        break;
      }
      currentFatigue -= consumedFatigue;
      count++;
    }

    maxCount = Math.max(maxCount, count);
  });

  return maxCount;
}
