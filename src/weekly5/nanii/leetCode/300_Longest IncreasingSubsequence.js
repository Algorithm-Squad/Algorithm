/**
 * 300. Longest Increasing Subsequence / Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 문제 해석 : 배열에서 증가하는 시퀀스 (연속되는 요소의 길이)가 가장 긴 nums 반환 -> O(n log(n)) 으로 구현해보기
 * ((a, b) => a - b) : 오름차순
 *
 * 시간복잡도 :
 * 공간복잡도 :
 *
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  return nums.reduce((acc, cur) => {
    const last = acc.at(-1);
    // console.log('acc', acc, 'cur',cur);
    if(last < cur) acc.push(cur);
    else {
      // console.log('바꿀 인덱스',acc.findIndex(v => v >= cur));
      acc[acc.findIndex(v => v >= cur)] = cur;
    }
    return acc;
  }, [nums[0]]);
};

const nums = [10,9,2,5,3,7,101,18]; //4
// const nums = [0,1,0,3,2,3]; //4
// const nums = [7,7,7,7,7,7,7];  //1
console.log(lengthOfLIS(nums));