/**
 * 괄호회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502#
 *
 * @param {*} s string - "[](){}"
 * @returns number - 괄호문법 맞는 string의 갯수
 */
function solution(s) {
  let answer = 0;

  const bracketsCheck = combination => {
    const brackets = {
      '(' : ')',
      '[' : ']',
      '{' : '}',
    }
    const stack = [];
    for(const a of combination) {
      if(brackets.hasOwnProperty(a)) stack.push(brackets[a]);
      else if(stack[stack.length - 1] === a) stack.pop();
      else return;
    }
    stack.length === 0 ? answer ++ : null;
  }

  for(let i = 0 ; i < s.length; i++) {
    const move = s.substring(0, i);
    const base = s.substring(i);
    const combination = base + move;
    bracketsCheck(combination);
  }
  return answer;
}