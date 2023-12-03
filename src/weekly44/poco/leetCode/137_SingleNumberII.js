// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const curValue = map.get(nums[i]);
      map.set(nums[i], curValue + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) return key;
  }
};

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열에서 한 번만 등장하는 요소

// 문제 설명 및 해결
// 정수를 요소로 갖는 배열 nums가 주어졌을 때, 한 번만 등장하는 요소를 구하는 문제이다.
// 시간복잡도는 O(n)으로 해결해야 하며 공간복잡도는 O(1)로 해결해야 한다.
// 공간복잡도가 O(1)이라는 것은 추가적인 배열을 사용하지 않고 해결해야 한다는 것이다.
// map을 사용해서 문제를 해결했다.
// map의 key는 nums 배열의 요소이고, value는 해당 요소의 등장 횟수이다.
// for문을 사용하여 map에 key가 있으면 해당 key의 value에 +1을 해주고, 없으면 key를 추가하고 value를 1로 할당한다.
// map을 순회하면서 value가 1인 key를 반환한다.
