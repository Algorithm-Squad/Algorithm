/**
 * 283. Move Zeroes - easy
 * 문제 해석 : 배열을 복사하지않고 0을 맨 뒤로 위치시키기! (총 작업수를 최소화할 수록 좋음)
 * 투포인터알고리즘 : 1차원배열에서 각각 다른 원소를 가리키고 있는 2개의 포인터를 조작하면서 값을 얻는 형태 O(n)
 * 정렬도 하면서 0을 옮기는 문제인줄..?
 *
 * 시간복잡도 : O(n) [Runtime 85 ms] [Beats 96.74%]
 * 공간복잡도 : [Memory 46.8 MB] [Beats 40.63%]
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let start = 0;
  let end = 1;

  while(end < nums.length) {    // end 가 배열을 순회하면서
    if(nums[start] === 0 && nums[end] !== 0) {
      [nums[start], nums[end]]= [nums[end], 0]; // 0인 요소와 0이 아닌 다음요소를 바꿔치기
      start++;  // 0 요소 다음 인덱스를 증가시키고
    }
    if(nums[start] !== 0) {
      start++
    }
    end++;
    // 위의 조건에 부합하지 않는 경우 nums배열 내에서 조건에 만족할 때까지 요소를 탐색
    // (0의 인덱스는 그대로) [1,0,0,3,12] 에서 start = 1, end = 3 까지 올림
  }
  return nums;
};

const nums = [0,1,0,3,12];
// const nums = [0];
console.log(moveZeroes(nums));
// moveZeroes(nums);


/**
 * var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;
    while(right < nums.length){
        if(nums[left] !== 0){
            left++;
            right++;
            continue;
        }
        if(nums[right] !== 0){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return;
};
 */