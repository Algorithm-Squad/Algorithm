/**
 * 이모티콘 할인행사 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * @param users 사용자와 구매기준을 담은 배열 [[40, 10000], [25, 10000]]
 * @param emoticons 이모티콘의 정가를 담은 배열
 * @returns 최대 목적을 달성했을 때 가입자수 와 매출액을 담은 배열 (가입자수가 우선)
 */
function solution(users: number[][], emoticons: number[]) {
  const discount = [10, 20, 30, 40];
  const arr = [];

  const dfs = (emoticons: number[], result: number[][]) => {
    if (!emoticons.length) {
      arr.push(result);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      dfs(emoticons.slice(1), [
        ...result,
        [discount[i], emoticons[0] * (1 - discount[i] * 0.001)],
      ]);
    }
  };

  dfs(emoticons, []); // 비율별로 조합한 계산값을 저장

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let [subscribers, totalIncome] = [0, 0]; // subscribers가 가장 큰 때의 subscribers, totalIncome 을 반환
    for (let j = 0; j < users.length; j++) {
      // 유저별로 이모티콘을 구매할 수 있는지 확인
      let get = arr[i].filter(([percent, _]) => percent >= users[j][0]);
      if (!get.length) continue;

      let sum = 0;
      for (let k = 0; k < get.length; k++) {
        sum += get[k][1];
      }

      // 더한 값이 유저의 기준보다 큰지 확인
      if (sum >= users[j][1]) subscribers++;
      totalIncome += sum;
    }

    // to be continue...
  }

  return result;
}

/**
[
  [ [ 10, 6930 ], [ 10, 8910 ] ],
  [ [ 10, 6930 ], [ 20, 8820 ] ],
  [ [ 10, 6930 ], [ 30, 8730 ] ],
  [ [ 10, 6930 ], [ 40, 8640 ] ],
  [ [ 20, 6860 ], [ 10, 8910 ] ],
  [ [ 20, 6860 ], [ 20, 8820 ] ],
  [ [ 20, 6860 ], [ 30, 8730 ] ],
  [ [ 20, 6860 ], [ 40, 8640 ] ],
  [ [ 30, 6790 ], [ 10, 8910 ] ],
  [ [ 30, 6790 ], [ 20, 8820 ] ],
  [ [ 30, 6790 ], [ 30, 8730 ] ],
  [ [ 30, 6790 ], [ 40, 8640 ] ],
  [ [ 40, 6720 ], [ 10, 8910 ] ],
  [ [ 40, 6720 ], [ 20, 8820 ] ],
  [ [ 40, 6720 ], [ 30, 8730 ] ],
  [ [ 40, 6720 ], [ 40, 8640 ] ]
]
 */
