// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
  if (nums.length === 0) return -1;
  const pivotIdx = Math.floor(nums.length / 2);
  const pivot = nums[pivotIdx];

  if (pivot === target) {
    return pivotIdx;
  }

  if (pivot < target) {
    const right = nums.slice(pivotIdx + 1);
    const result = search(right, target);
    return result === -1 ? -1 : result + pivotIdx + 1;
  }

  if (pivot > target) {
    const left = nums.slice(0, pivotIdx);
    const result = search(left, target);
    return result === -1 ? -1 : result;
  }
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
// 매개변수
// nums : 정렬된 배열
// target : 찾고자 하는 값

// 출력
// target의 인덱스

// 문제 해결 및 설명
// 오름차순으로 정렬된 배열 nums와 target이 주어지고, target의 idx를 구하는 문제
// 문제 요구사항에서 시간 복잡도는 logN을 요구하고 있고, 이진 탐색을 구현하는 문제
// 이진 탐색은 배열의 중간 값을 기준으로 탐색 범위를 좁혀가며 값을 찾는 알고리즘
// 추가로 좁혀진 범위에 대해서 확인하는 방법으로는 재귀를 사용
// 재귀의 탈출 조건은 nums의 길이가 0일때, pivot과 target이 같은 경우이고,
// 만약 현재 pivot보다 target이 큰 경우에는 pivot의 오른쪽을 탐색하는데, 그 결과 값 idx에는
// 현재 pivotIdx + 1을 더해준다(최초 nums에서의 idx를 찾아야하기 때문)
