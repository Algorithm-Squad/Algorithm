/**
 * 다리를 지나는 트럭 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * pseudocode : 트럭배열의 0번째부터 차례대로 다리위를 건넌다
 * 다리의 길이만큼 시간이 지나야 다리를 진난 것이며 이때 최대 견딜 수 있는 무게는 weight
 * 
 *
 * 시간복잡도 :
 * 공간복잡도 :
 *
 * @param {*} bridge_length
 * @param {*} weight
 * @param {*} truck_weights
 * @returns
 */

function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  let bridge_Q = Array(bridge_length).fill(0);

  // while 종료조건 (남은 트럭배열의 길이가 0이 될때까지)
  while(truck_weights.length > 0) {
    time ++;
    // 트럭 0번째 인덱스부터 차례대로 shift() 트럭 하나가 건너기 시작;
    bridge_Q.shift();

    // 다음 트럭이 올라올 수 있는지 확인하기 위해 다리위의 트럭 무게를 잰다 (이거때문에 시간이 많이 소요되는듯);
    let curWeight = bridge_Q.reduce((acc, cur) => acc + cur);
    if(truck_weights[0] + curWeight > weight) {
      //만약 무게를 초과한다면, 시간만 ++ 이므로 0을 푸시
      bridge_Q.push(0);
    } else {
      //무게를 초과하지 않는다면, 다리큐에 현재 트럭을 올린다
      curTruck = truck_weights.shift();
      bridge_Q.push(curTruck);
    }
  }
  return time + bridge_length; //마지막 트럭이 올라간 뒤로 다리의 길이를 더해야 모두 지나간 것을 뜻함
}

// const [bridge_length, weight, truck_weights] = [2, 10, [7, 4, 5, 6]]; //8
const [bridge_length, weight, truck_weights] = [100, 100, [10]]; //101
// const [bridge_length, weight, truck_weights] = [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]]; //110
console.log(solution(bridge_length, weight, truck_weights));