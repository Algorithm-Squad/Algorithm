/**
 * 괄호변환 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/60058?language=javascript
 * @param {*} p
 * @returns
 * 개수는 맞지만 짝이 맞지 않은 형태로 작성되어 오류가 발생 -> 소스코드에 작성된 모든 괄호를 뽑아 올바른 순서대로 배치
 * 균형잡힌 괄호 문자열이 매개변수로 주어질 때 올바른 괄호 문자열로 변환하여 return
 */
function solution(p) {
  if (p === '') return '';
  const [u, v] = divide(p);

  if (isCorrect(u)) {
    // u가 올바른 괄호 문자열이라면
    return u + solution(v); // v에 대해 재귀적으로 수행
  }

  // u가 올바른 괄호 문자열이 아니라면
  let answer = '(' + solution(v) + ')';
  // 첫번째 문자열에 "("를 붙이고 재귀를 수행한 결과에 ")"를 붙임

  // u에서 첫번째와 마지막 문자 제거하고 나머지 문자열의 괄호 방향을 뒤집어서 answer에 붙임
  for (let i = 1; i < u.length - 1; i++) {
    const curU = u[i];
    if (curU === '(') answer += ')';
    else answer += '(';
  }
  return answer;
}

// 균형잡힌 괄호 문자열로 분리
const divide = (str) => {
  let left = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    if (cur === '(') left++; // 여는 괄호면 left 증가
    else right++; // 닫는 괄호면 right 증가

    if (left === right) {
      return [str.slice(0, i + 1), str.slice(i + 1)];
    }
  }
};

const isCorrect = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    if (cur === '(') stack.push(cur);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // "()(())()"
