// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = function (s) {
  const bracket = {
    '(': 1,
    ')': 1,
    '[': 2,
    ']': 2,
    '{': 3,
    '}': 3,
  };
  const array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      array.push(bracket[s[i]]);
    } else {
      if (bracket[s[i]] !== array[array.length - 1]) return false;
      array.pop();
    }
  }
  return array.length === 0 ? true : false;
};

// 문제 설명
// 괄호(소,중,대)로 이루어진 문자열이 주어지고, 해당 문자열의 괄호가 정확히 열고 닫히는 지에 대해서 판단하는 문제.
// 괄호짝을 맞추는 문제로 stack 형태로 문제에 접근함.
// 먼저, 괄호(소,중,대)마다 다른 value값을 갖는 객체를 선언하였고, 주어진 문자열을 탐색하면서,
// 여는 괄호가 나올 경우, array 배열에 push를 하고, 닫는 괄호가 나올 경우, 괄호의 종류(소,중,대)가 맞는지
// 미리 선언해둔 객체의 key로 확인함. 만약 array 배열의 마지막 괄호와 현재 닫는 괄호의 종류가 일치하지 않는 경우,
// false를 return 하게 하였고, 일치하는 경우, array 배열의 마지막 요소를 pop해서 제거함.
// for문 순회 완료 후에 array 배열의 길이를 체크하여, 남아있는 여는 괄호가 있다면 false 아닌 경우 true 반환
// for문으로 주어진 매게변수 전부 순회로 O(n), push, pop의 새로운 데이터 추가, 삭제 시간복잡도 O(1) = 즉, 시간복잡도 O(n)
