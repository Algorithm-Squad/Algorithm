/**
 * 문제출처: https://leetcode.com/problems/counting-bits/
 * 시작: 15:10
 * 종료: 16:00
 * 
 * - Follow Up 
 * It is very easy to come up with a solution with a runtime of O(n log n). 
 * Can you do it in linear time O(n) and possibly in a single pass?
 */

var countBits = function(n) {
let numbers = [];

for(let i = 0; i <= n; i++) {
  let count = 0;
  let number = i;

  (function recursion(n){
    if(n === 0) return;
    if(n === 1) {
      count += 1;
      return;
    }
    const quotient = Math.floor(n / 2);
    const rest = n % 2;

    if(rest === 1) count += 1;
    recursion(quotient);
    return;
  })(number);
  numbers.push(count);
}
return numbers;
};

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]