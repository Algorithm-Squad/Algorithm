// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    let left = i - 1;

    // left가 0보다는 커야한다. 0번째보다 작은 idx는 존재하지 않기 때문이다.
    // nums[left]가 cur보다 크다면, nums[left]와 nums[left + 1]의 자리를 바꾼다.
    while (left >= 0 && nums[left] > cur) {
      nums[left + 1] = nums[left];
      nums[left] = cur;
      cur = nums[left];
      left--;
    }
  }
};
console.log(sortColors([2, 0, 1])); // [0,1,2]
console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]

// 매개변수
// nums : 0, 1, 2를 요소로 갖는 배열

// 출력
// nums 배열을 0, 1, 2 순서로 정렬해서 반환

// 문제 설명 및 해결
// 0, 1, 2를 요소로 갖는 배열 nums가 주어졌을 때, nums 배열을 0, 1, 2 순서로 정렬해서 반환하는 문제이다.
// 라이브러리의 sort 메서드를 사용하지 않고 문제를 해결해야 하며 제자리 정렬을 해야한다.
// 선택 정렬을 사용해서 문제를 해결했다. 선택 정렬은 in place 제자리 정렬이며, 중복데이터의
// 자리를 교체하지 않는 stable 정렬이다.
// 선택 정렬은 배열의 1번째 요소부터 순회하면서 해당 요소를 기준으로 그 이전의 요소들과 비교한다.
// 기준 요소보다 이전의 요소가 더 크다면, 기준 요소와 이전 요소의 자리를 바꾼다.
// 선택 정렬은 정렬되어 있는 배열의 경우, 시간복잡도는 O(n) 이지만, 정렬이 하나도 되지 않은 배열의 경우 O(n^2)이다.

// 처음 시도한 풀이
// nums 배열을 순회하면서 count 배열의 요소를 증가시킨다.
// count 배열의 요소는 각 idx는 nums 배열의 요소가 되며, 요소의 값은 nums 배열의 요소가 몇 개 있는지를 의미한다.
// 하지만, 문제에서 제자리 정렬을 하라는 것을 파악하지 못하였기 때문에 실패!
// 결국 아무것도 return 하지 않고 nums 배열을 제자리 정렬해야하는 것이다.
// nums 배열을 nums = []; 로 초기화해도 문제가 해결되지 않는다.

// const sortColors = function (nums) {
//   const answer = [];
//   const count = [0, 0, 0];

//   nums.forEach((num) => {
//     count[num]++;
//   });

//   count.forEach((num, idx) => {
//     const temp = new Array(num).fill(idx);
//     answer.push(...temp);
//   });

//   return answer;
// };

// leetCode에서 본 빠른 방법
// 나는 nums = []; 로 nums 배열을 초기화했는데
// nums.length = 0;으로 초기화를 하면 해결된다
// const sortColors = function (nums) {
//   const count = [0, 0, 0];

//   nums.forEach((num) => {
//     count[num]++;
//   });

//   nums.length = 0;
//   // nums = [];
//   // nums.length = 0으로 nums 배열을 초기화하면 문제가 해결된다
//   // 하지만, nums = [] 초기화하면 문제가 해결되지 않는다.
//   // 그 이유는 nums = []는 nums 배열을 새롭게 정의하는 것이기 때문이다.
//   // nums = []로 새롭게 정의하면 nums 배열의 참조값이 변경되기 때문에
//   // nums 배열을 참조하는 변수들의 값이 변경되지 않는다.

//   count.forEach((num, idx) => {
//     nums.push(...new Array(num).fill(idx));
//   });
// };
