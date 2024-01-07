// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const lastStack = stack[stack.length - 1];
    if (lastStack === '(' && s[i] === ')') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
};

console.log(minAddToMakeValid('(())))'));

// 매개변수
// s : 괄호로만 이루어진 문자열

// 출력
// 괄호를 추가하여 올바른 괄호 문자열로 만들기 위해 추가해야 하는 최소 괄호 개수

// 문제 설명 및 해결
// 괄호로만 이루어진 문자열 s가 주어졌을 때, 올바른 괄호 문자열로 만들기 위해 추가해야 하는 최소 괄호 개수를 구하는 문제
// 올바른 괄호를 만들기 위해 추가 괄호가 필요하다는 것은 곧 짝이 맞지 않는 여는 괄호 혹은 닫는 괄호가 있다는 의미이다.
// 문자열 s를 순회하면서 여는 괄호는 stack에 push를 하고,
// 닫는 괄호의 경우, stack의 마지막 요소가 여는 괄호인 경우에는 올바른 괄호이므로 stack의 마지막 요소를 pop하고
// 그외의 경우에는 stack에 push를 한다.
// 문자열 s에 대한 순회가 끝나고 stack에 남아있는 요소, 즉 stack의 길이가 곧 추가해야 하는 최소 괄호 개수이다.
