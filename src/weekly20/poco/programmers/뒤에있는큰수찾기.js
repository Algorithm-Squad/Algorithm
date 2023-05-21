// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    // 조건 - 인덱스가 존재하고 해당 존재하는 인덱스 순서의 숫자가 현재 수 보다 낮을경우
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      // answer의 인덱스 위치에 현재 들어온 수를 넣어준다.
      answer[stack.pop()] = numbers[i];
    }
    // 현재 인덱스를 넣어준다.
    stack.push(i);
  }

  // 마지막은 확인할 수 없으므로 미리 셋팅한 -1 그대로다
  return answer;
}
console.log(solution([2, 3, 3, 5]));

// 매개변수
// numbers : 정수로 이루어진 배열

// 출력
// 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열 return

// 문제 설명 및 해결
// 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서
// 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 한다
// 뒷 큰수가 존재하지 않는 경우에는 -1을 담는다

// 실패한 풀이 이후에 구글링 및 블로그 통해서 공부
//스택이 비었다면 numbers의 인덱스를 넣어줍니다.

// 스택에 원소가 하나라도 있고, numbers[스택의 끝 원소인 인덱스]가 현재 탐색한 numbers의 원소보다 작다면,
// answer[stack에서 pop한 인덱스]를 현재 탐색한 numbers의 원소로 바꿔줍니다.
// 이 조건이 만족할 경우 계속 반복해줍니다.

// 실패한 풀이 - 20,21,22,23 테스트 시간 초과
/*
function solution(numbers) {
  let bigger = 0;
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      answer.push(-1);
      break;
    }

    const cur = numbers[i];
    bigger = cur;
    for (let j = i + 1; j < numbers.length; j++) {
      const next = numbers[j];
      if (next > bigger) {
        bigger = next;
        break;
      }
    }
    cur === bigger ? answer.push(-1) : answer.push(bigger);
  }
  return answer;
}
*/
