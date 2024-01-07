/**
 * 921. Minimum Add to Make Parentheses Valid / Medium
 * https://leetcode.com/problems/battleships-in-a-board/
 * @param {*} s
 * @returns 유효하게 만드는데 필요한 최소 이동 횟수 ?? 채우는 데 필요한 최소 괄호 수 말하는건가??
 */
var minAddToMakeValid = function (s) {
  let stack = [];
  let count = 0;

  // 괄호가 열리면 스택에 넣고, 닫히면 뺌
  // 스택에 남아있는 괄호 수가 필요한 최소 괄호 수
  // 닫는 괄호가 먼저 나오면 무조건 추가해야함

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === '(') {
      stack.push(cur);
      continue;
    }

    if (stack.length > 0) {
      stack.pop();
    } else {
      count++;
    }
  }
  return count + stack.length;
};
