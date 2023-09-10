// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  if (nums.length === 1) return [nums[0]];
  const answer = [];

  const countObj = {};

  nums.forEach((num) => {
    countObj[num] ? (countObj[num] += 1) : (countObj[num] = 1);
  });
  const countArr = [];
  for (let [key, value] of Object.entries(countObj)) {
    countArr.push([key, value]);
  }

  countArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answer.push(countArr[i][0]);
  }

  return answer;
};

// 매개변수
// nums : 숫자 타입을 요소로 갖는 배열

// 출력
// nums 배열 요소 중 빈번한 횟수를 기준으로 top k 번째까지 요소를 담은 배열

// 문제 설명 및 해결
// nums 배열 요소 중 빈번한 횟수를 기준으로 top k 번째까지 요소를 담은 배열을 반환하는 문제다.
// nums 배열을 먼저 순회하면서, countObj에 key는 요소, value는 갯수로 저장한다.
// 그리고 countObj를 순회하면서 countArr에 [key, value] 형태로 저장한다.
// 그리고 countArr를 value를 기준으로 내림차순 정렬한다.
// 그리고 countArr를 0부터 k보다 작은 숫자까지 순회하면서 answer에 key를 저장한다.
// 시간복잡도 sort 메서드 활용으로 O(nlogn)이다.
