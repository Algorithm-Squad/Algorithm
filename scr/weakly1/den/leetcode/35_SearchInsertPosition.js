/* 09:00 시작 09:35 끝 */
/*
제한조건 0(log n) : ex. 이진탐색
*/

/* 
[ 내 풀이 ]

처음 시도한 코드
-> wrong answer
-> 맞지 않은 test case 발생
*/
// var searchInsert = function(nums, target) {
//   if(nums.includes(target)){
//     return nums.findIndex((element) => element === target);
//   } else if (nums.includes(target + 1)) {
//     return nums.findIndex((element) => element === target + 1);
//   } else if (nums.includes(target - 1)) {
//     return nums.findIndex((element) => element === target - 1) + 1;
//   } else if (nums[nums.length - 1] < target) {
//     return nums.length - 1 + (target - nums[nums.length - 1] - 1);
//   } else {
//     return 0;
//   }
// };

/*
[ 내 풀이 ]

수정한 코드
시간복잡도: for문 사용
-> nums 내 요소들을 한번씩 다 돌아야되니까 최대 n번의 탐색(단순 탐색)이 필요, O(N)
-> 문제의 시간복잡도 제한조건(O(log n))에 부합하지 않은 것으로 추정되지만 정답 통과.

runtime: 64ms
memory: 41.7mb
*/

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));    // 2
console.log(searchInsert([1,3,5,6], 2));    // 1
console.log(searchInsert([1,3,5,6], 7));    // 4

/*
[ 내 풀이x 이진 탐색 검색 후 다시 풀어보기]

1. 변수 left : nums의 첫 번째 인덱스 = 0
2. 변수 right : nums의 길이 = nums.length
3. while문 사용, left 값이 right 값 보다 작으면 실행.
  3.1. 변수 mid : nums의 중앙 index = left + Math.floor(low + high) / 2
  3.2. 변수 guess : nums의 중간에 있는 요소 = nums[mid]
  3.3  if문 사용
    3.3.1 만약 guess가 target과 같다면, guess의 index안 mid 리턴
    3.3.2 만약 guess가 target 보다 크다면, 
            -> 배열에서 mid 기준 왼쪽을 탐색해야되기 때문에, 변수 rigth의 값을 mid로 재할당
            -> right = mid
    3.3.3 만약 target이 guess 보다 작다면,
            -> 배열에서 mid 기준 오른쪽을 탐색해야되기 때문에, 변수 left의 값을 mid + 1 로 재할당
            -> left = mid + 1
4. while문 다 돌고나서 left가 right보다 같거나 커지게 되면, 
배열에 target이 포함되어 있지 않다는 뜻이기 때문에, left 리턴  

runtime: 66ms
memory: 41.8mb
*/

// var searchInsert = function(nums, target) {
//   let left = 0;
//   let right = nums.length;

//   while(left < right) {
//     const mid = left + Math.floor((right - left) / 2);
//     const guess = nums[mid];
    
//     if(guess === target) {
//       return mid;
//     } else if(guess > target){
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// };

// console.log(searchInsert([1,3,5,6], 5));    // 2
// console.log(searchInsert([1,3,5,6], 2));    // 1
// console.log(searchInsert([1,3,5,6], 7));    // 4

