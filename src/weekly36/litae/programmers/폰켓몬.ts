export function solution(nums: number[]): number {
  const map = new Map();

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    }
  }

  return Math.min(map.size, nums.length / 2);
}

// 문제 풀이
// 1. 새로운 map을 생성
// 2. nums 배열을 돌면서 각 요소(num)을 키값으로 있는지 여부를 확인
// 3. map에 해당 요소(num)를 키값으로 하는 값이 없으면 해당 요소를 키값으로 하고 value를 1(임의의 값)로 생성
// 4. for문이 돌고 나면 map의 키값은 nums의 중복되는 숫자가 제거된 요소들이 키값으로 존재
// 5. map.size와 nums.length 중 작은 값을 리턴

// 이전 문제 풀이
// 원래 set으로 풀었다가 해쉬 문제라는 걸 확인하고 map으로 다시 풀었다
// function solution(nums: number[]): number {
//   const set = new Set(nums);
//   return Math.min(set.size, nums.length / 2);
// }
