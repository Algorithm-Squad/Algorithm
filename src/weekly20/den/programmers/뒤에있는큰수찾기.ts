/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/154539
 * 
 * 시작 시간: 16:10
 * 종료 시간: 17:00
 */

function solution(numbers: number[]): number[] {
  const answer: number[] = Array(numbers.length).fill(-1);
  const stack: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop() ?? 0] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

// stack의 길이가 0일 때, undefined가 나올 수 있어서, typescript에서는 error가 발생한다. 이를 방지하기 위해선 몇 가지 방법이 있다.
// 1. 느낌표 추가
// ex. answer[stack.pop()!] = numbers[i]; !를 사용하거나,
// 2. Nullish 병합 연산자(??)를 사용
// ex. answer[stack.pop() ?? 0] = numbers[i];
// 3. 조건문 추가하기
// ex.  const popped = stack.pop();
//      if (popped !== undefined) {
//         answer[popped] = numbers[i];
//      }

/**
 * 아래 결과
 * ~ 테스트 9: 통과
 * ~ 이후: 시간 초과
 */

// function solution(numbers: number[]): number[] {
//   return numbers.map((number, index, originalArray) => {
//     const biggerNumber = numbers.slice(index).find(element => element > number);
//     return biggerNumber ? biggerNumber : -1;
//   })
// }

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
	
	