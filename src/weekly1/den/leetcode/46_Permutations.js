/* 1/7(토) 시작시간 16:00, */
/* 순열!

for문 돌기
1. 빈 array 생성
2. nums[i] push
3. nums[i + 1 ~ i ~ ] 

-> 구현 실패
*/

var permute = function(nums) {
  return nums.map((element) => Array(nums.length - 1).fill([element]));
}

// var permute = function(nums) {
//   let temp = []
//   let result = []

//   function backtracking(temp, nums) {
//     if(nums.length == 0) {
//         result.push([...temp])
//         return
//      }
  
//     for(let i=0; i<nums.length; i++) {
//         temp.push(nums[i])
//         nums.splice(i, 1)
//         backtracking(temp, nums)
//         nums.splice(i, 0, temp.pop())
//      }
//   }
//   backtracking(temp, nums)
//   return result
// };

// console.log(permute([1,2,3]));     // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([1,2,3]));   // [[1,2],[1,3],[1,4]
