// https://school.programmers.co.kr/learn/courses/30/lessons/142085

const solution = (n, k, enemy) => {
  // 이분탐색을 위한 left, right, mid 설정
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);

  // right가 left보다 작아지면 종료
  while (left <= right) {
    // index 0부터 mid까지 적들의 수를 내림차순으로 정렬
    const curRound = enemy.slice(0, mid).sort((a, b) => b - a);

    // 무적권 사용 가능한 횟수
    let skill = k;

    // 현재 남은 적의 수
    const curEnemy = curRound.reduce((prev, curr) => {
      // 무적권 사용해서 통과한 라운드의 병사 수는 제외
      if (skill) {
        skill--;
        return prev;
      }
      return prev + curr;
    }, 0);

    if (n - curEnemy >= 0) {
      // 지금 병사들로 충분히 막을 수 있다면 left를 늘려서 더 적은 병사들을 사용하도록 한다.
      left = mid + 1;
    } else {
      // 지금 병사들로 막지 못한다면 right를 줄여서 더 많은 병사들을 사용하도록 한다.
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left - 1;
};

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 5

// 매개변수
// n : 병사의 수
// k : 사용할 수 있는 무적권의 수
// enemy : 적의 수가 담긴 배열

// 출력
// 최대 몇 라운드까지 버틸 수 있는지 반환

// 문제 설명 및 해결
// n명으로 적군 n명을 제거할 수 있고, k개의 무적권을 사용할 수 있다.
// 최대 몇 라운드까지 버틸 수 있는지 구하는 문제이다.
// 두 번째 시도는 이분탐색을 활용한 방법이다.
// 이분탐색을 사용하기 위해 left와 right를 설정하고, mid를 구한다.
//

// 첫 번째 시도(실패)
// const solution = (n, k, enemy) => {
//   let answer = k;

//   // 병사의 수
//   let soldier = n;

//   // 만약 전체 라운드가 무적권보다 작거나 같으면, 전체 라운드 수를 반환
//   if (enemy.length <= k) return enemy.length;

//   // 적이 많은 라운드에 무적권을 사용하기 위해 내림차순으로 정렬하고, k개의 무적권을 사용할 수 있으므로 k개를 제외한 적을 반환한다.
//   const filteredEnemy = [...enemy].sort((a, b) => b - a).slice(k);

//   for (let i = 0; i < filteredEnemy.length; i++) {
//     if (soldier < filteredEnemy[i]) return answer;

//     soldier -= filteredEnemy[i];
//     answer += 1;
//   }

//   // for문을 모두 순회하면, 모든 라운드를 버틸 수 있으므로 enemy.length - 1을 반환한다.
//   return enemy.length - 1;
// };
