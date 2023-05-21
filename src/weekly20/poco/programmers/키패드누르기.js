// https://school.programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
  // 위치 찾아주는 함수
  function findKey(key) {
    let keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['*', 0, '#'],
    ];
    for (let i = 0; i <= keypad.length; i++) {
      for (let j = 0; j <= keypad[i].length; j++) {
        if (keypad[i][j] === key) {
          return [i, j];
        }
      }
    }
  }

  let answer = '';
  let left = '*'; // 시작점
  let right = '#'; // 시작점

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      left = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      right = number - 2;
    } else {
      let r = findKey(right);
      let l = findKey(left);
      let middle = findKey(number);
      // 손위치와 눌러야할 키패드 거리 구하기
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      if (rr === ll) {
        // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === 'right' ? ((right = number), (answer += 'R')) : ((left = number), (answer += 'L'));
      } else if (rr > ll) {
        // 오른손의 거리가 더 멀다면
        answer += 'L';
        left = number;
      } else {
        // 왼손의 거리가 더 멀다면
        answer += 'R';
        right = number;
      }
    }
  });

  return answer;
}

// 매개변수
// numbers : 순서대로 누를 번호가 담긴 배열
// hand : 왼손잡이인지, 오른손 잡이인지

// 출력
// numbers의 각 번호를 누를때의 엄지손가락이 왼손인지 오른손인지를
// 나타내는 str

// 문제 설명 및 해결
// 키패드를 누른다고 가정했을 때,
// 1, 4, 7는 왼손으로, 3, 6, 9 오른손으로 누른다
// 그외 2, 5, 8, 0의 경우 눌러야하는 번호와 가까운 손을 사용한다
// 거리가 같은 경우, hand로 주어진 주 사용 손으로 누른다

// 키패드와 동일한 모양의 2차원 배열을 먼저 선언하고
// 2,5,8,0의 경우 현재 왼손의 위치와 현재 오른손의 위치를 비교해가면서 거리가 가까운 손을 선택하는 방법

// 도저히 제 머리로는 해결을 할 수가 없어서 블로그 보고 공부했습니다
