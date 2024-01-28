/**
 * 연속된 부분수열의 합 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * @param {*} sequence = 수열
 * @param {*} k = 부분 수열의 합
 * @returns 조건을 만족하면서 수열의 길이가 가장 짧은 수열의 [시작인덱스, 마지막인덱스]를 배열로 반환
 */
function solution(sequence, k) {
  const answer = [];

  let [first, last] = [0, 0];
  const length = sequence.length;
  let sum = sequence[first]; // 초기값을 넣고 시작
  while (last < length) {
    if (sum < k) sum += sequence[++last]; // k 보다 작으면 last index를 오른쪽으로 이동한 후 더함
    if (sum > k) sum -= sequence[first++]; // k 보다 크면 first index를 빼고, first index를 오른쪽으로 이동
    if (sum === k) {
      answer.push([first, last]); // K와 같으면 answer 배열에 현재 조합을 넣고 (오른쪽으로 한칸씩 이동)
      sum += sequence[++last]; // last index를 오른쪽으로 이동시키고 더함
      sum -= sequence[first++]; // first index의 값을 뺀 후 오른쪽으로 이동
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}

// 시간 초과
function solution(sequence, k) {
  let answer = [];

  for (let i = 0; i < sequence.length; i++) {
    let sum = 0;
    for (let j = i; j < sequence.length; j++) {
      sum += sequence[j];
      if (sum === k) answer.push([i, j]);
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
