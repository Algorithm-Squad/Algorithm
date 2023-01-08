/**
 * 169. Majority Element - easy
 * int majorityCount = nums.length/2 보다 많은 수를 찾아라 !
 * 시간복잡도 : O(n) [Runtime 73 ms] [Beats 81.85%]
 * 공간복잡도 : O(n) [Memory 43.5 MB] [Beats 76.99%]
 *
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  // key, value pair Map객체를 만들고 싶었지만 value값 변경 방법이 생각이 안나 각 배열을 생성했습니다
  let key = [];
  let value = [];

  // 배열을 순회하면서
  nums.forEach((e) => {
    let index = key.indexOf(e);
    if(index !== -1) {
      value[index] += 1; //이전에 key가 있는지 확인후 해당 인덱스의 value를 ++
    } else {
      key.push(e); // 없으면 key, value array에 element를 push합니다
      value.push(1);
    }
  });
  return key.at(value.indexOf(Math.max(...value))); //value배열에서 가장 큰 수의 인덱스를 찾아 key의 인덱스 요소를 반환합니다
};

const nums = [3,2,3]; // 3
// const nums = [2,2,1,1,1,2,2]; // 2
console.log(majorityElement(nums));


/**leetCode - 처음 생각한 머릿속 코드들이 여기있었습니다...
var majorityElement = function(nums) {
    const map = new Map();
    let m = nums[0];
    for (let n of nums) {
        const count = map.has(n) ? map.get(n) + 1 : 1;
        map.set(n, count); //count 변경하는 방법이 있네
        m = count > map.get(m) ? n : m;
    }
    return m;
};

var majorityElement = function(nums) {
    const counts = {};
    for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > nums.length / 2) return num;
    }
};
 */