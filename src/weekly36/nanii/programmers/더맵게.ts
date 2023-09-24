/**
 * 더 맵게 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 * @param scoville 스코빌 지수가 담긴 1차원 배열
 * @param K 원하는 스코빌 지수
 * @returns 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수
 */
// [2차 시도: 시간초과]
function solution(scoville: number[], K: number): number {
  var answer = 0;
  let array = [...scoville];
  array.sort((a, b) => a - b); // 오름차순으로 정렬

  while (array[0] < K) {
    if (array.length < 2) return -1;
    const sumOfmins = array[0] + array[1] * 2;
    array = [...array.slice(2), sumOfmins].sort((a, b) => a - b);
    answer++;
  }

  return answer;
}

/**
[1차 시도: 시간초과 + 테스트 몇개 실패함]
function solution(scoville: number[], K: number): number {
  var answer = 0;
  let array = [...scoville];

  while (array.length > 1) {
    array = findMinSum(array);
    answer ++;
    if (isAllOverK(array, K)) return answer;
  }
  return -1;
}

const isAllOverK = (arr: number[], k: number) => {
  return arr.every((a) => a > k);
}

const findMinSum = (arr: number[]) => {
  arr.sort((a, b) => a - b);

  const min1 = arr[0];
  const min2 = arr[1];
  const sumOfmins = min1 + min2 * 2;

  return [sumOfmins,...arr.slice(2)];
}
*/