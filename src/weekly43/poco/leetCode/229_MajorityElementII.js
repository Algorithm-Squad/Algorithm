// https://leetcode.com/problems/majority-element-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const answer = [];
  const numsObj = {};

  nums.forEach((num) => {
    if (!numsObj[num]) {
      numsObj[num] = 1;
    } else {
      numsObj[num]++;
    }
  });

  for (let key in numsObj) {
    if (numsObj[key] > nums.length / 3) {
      answer.push(key);
    }
  }

  return answer;
};

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열에서 nums 배열 길의 / 3보다 많은 횟수로 등장하는 요소들을 배열로 반환

// 문제 설명 및 해결
// nums 배열에서 nums 배열 길의 / 3보다 많은 횟수로 등장하는 요소들을 배열로 반환하는 문제이다.
// hash를 사용해서 문제를 해결했다.
// nums 배열의 요소들의 갯수를 세어서 numsObj에 저장한다.
// numsObj의 요소들 중에서 nums 배열 길의 / 3보다 많은 횟수로 등장하는 요소들을 answer에 push한다.
// 문제에서는 nums 배열의 길이 / 3 이상이라고 했지만, for in 문의 if 조건문에 크거나 같은 경우의 조건을
// 사용하면 문제를 해결할 수 없다.
