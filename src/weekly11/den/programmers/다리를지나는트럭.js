/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * 
 * 시간복잡도: O(N^2)
 * 
 * @param {*} bridge_length 
 * @param {*} weight 
 * @param {*} truck_weights 
 * @returns 
 */

function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let time = 0;
      
  while(bridge.length) {
    bridge.shift();
    if(truck_weights.length){
      const sumBridge = bridge.reduce((a,b) => a + b, 0);
      sumBridge + truck_weights[0] <= weight 
      ? bridge.push(truck_weights.shift()) 
      : bridge.push(0);
    } 
    time++;
  }
  return time;
}

console.log(solution(2, 10, [7,4,5,6]));  // 8
console.log(solution(100, 100, [10]));    // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));   // 110