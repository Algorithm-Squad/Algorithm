/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * 
 * 시작 시간: 14:30
 * 종료 시간: 15:30
 */

 function solution(numbers: number[], hand: string): string {
  let answer = '';
  const keyPad = {
    1: [1, 4],
    2: [2, 4],
    3: [3, 4],
    4: [1, 3],
    5: [2, 3],
    6: [3, 3],
    7: [1, 2],
    8: [2, 2],
    9: [3, 2],
    '*': [1, 1],
    0: [2, 1],
    '#': [3, 1],
  }
  
  const leftHandTargetList = [1, 4, 7];
  const rightHandTargetList = [3, 6, 9];

  let leftHandPosition = keyPad['*'];
  let rightHandPosition = keyPad['#'];

  numbers.forEach((number) => {
    if (leftHandTargetList.includes(number)) {
      answer += 'L';
      leftHandPosition = keyPad[number];
    } else if (rightHandTargetList.includes(number)) {
      answer += 'R';
      rightHandPosition = keyPad[number];
    } else {
      const leftDistanceX = Math.abs(keyPad[number][0] - leftHandPosition[0]); // X 거리의 절댓값을 사용
      const leftDistanceY = Math.abs(keyPad[number][1] - leftHandPosition[1]); // Y 거리의 절댓값을 사용

      const leftDistance = leftDistanceX + leftDistanceY; // 맨해튼 거리 계산

      const rightDistanceX = Math.abs(keyPad[number][0] - rightHandPosition[0]); // X 거리의 절댓값을 사용
      const rightDistanceY = Math.abs(keyPad[number][1] - rightHandPosition[1]); // Y 거리의 절댓값을 사용

      const rightDistance = rightDistanceX + rightDistanceY; // 맨해튼 거리 계산

      if (leftDistance > rightDistance) {
        answer += 'R';
        rightHandPosition = keyPad[number];
      } else if (leftDistance < rightDistance) {
        answer += 'L';
        leftHandPosition = keyPad[number];
      } else {
        if (hand === 'left') {
          answer += 'L';
          leftHandPosition = keyPad[number];
        } else {
          answer += 'R';
          rightHandPosition = keyPad[number];
        }
      }
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 	"right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"