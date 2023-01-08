/* 09:03 시작 09:53 종료 - 통과*/
/*
[ 내 풀이 ]
구현 과정
1. 배열 안에 0만 있을 때 변형x
  1-1. every 사용해서 배열에 0만 있는지 판별 -> true면 nums 리턴(some 사용?)
2. 0말고 다른 요소도 있을 때, 0을 찾아서 배열의 끝으로 이동
  2-1. for문 돌면서 0을 만나면, i index를 splice해서 배열에 0을 push한다.

-> 시간 복잡도: O(N)
*/

// var moveZeroes = function (nums) {
//   if(nums.every(element => element === 0)){
//     return nums;
//   }

//   const whereZerosAt = [];

//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0){
//       whereZerosAt.push(i);    
//     }
//   }

//   const reverseZeroIndex = whereZerosAt.reverse();

//   for(let i = 0; i < reverseZeroIndex.length; i++){
//     nums.splice(reverseZeroIndex[i], 1);
//     nums.push(0);
//   }
//   return nums;
// }

// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0]));

/*
[ 내 풀이 ]
sort 학습하고 풀어보기.
1. sort를 사용해 nums를 오름차순으로 정렬
2. nums 마지막 요소가 0이라면 nums 그대로 리턴
3. for문 사용해서 0이 아닌 수 찾기
  3.1 0이 아닌 수를 만나면,
    3.1.1 nums를 i 위치 부터 slice하고 변수 answer에 할당
    3.1.2 nums의 i index 이후 요소들 splice
    3.1.3 concat을 이용해 result에 nums를 이어 붙이고 result 리턴

-> 시간복잡도: O(nlogn(sort() 함수) + n)
*/

var moveZeroes = function (nums) {
  nums.sort(function(a,b) {
    return a - b;
  })
  // 0, 0, 1, 3, 12
  if(nums[nums.length - 1] === 0) return nums;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] != 0){
      var result = nums.slice(i);
      nums.splice(i, nums.length - i);
      return result.concat(nums);
    }
  }
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));