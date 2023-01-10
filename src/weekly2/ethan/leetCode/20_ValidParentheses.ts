/*
  1. 열린 괄호를 만날 때, 수행하는 동작 구상하기
  2. 닫는 괄호를 만날 때, 수행하는 동작 구상하기
  3. 엣지 케이스(괄호 전체 갯수 일치 여부, 스택이 비어있는지 여부) 구상하기
*/

function isValid(s: string): boolean {
  const stack: Array<string> = [];

  for (const bracket of s) {
    if (bracket === '(') stack.push(')');
    else if (bracket === '[') stack.push(']');
    else if (bracket === '{') stack.push('}');
    // 닫는 괄호를 만나게 되는 경우, 최근에 넣었던 괄호를 꺼내 현재 닫는 괄호와 짝이 맞는지 비교한다.
    else if (stack.pop() !== bracket) return false;
  }
  return stack.length === 0;
}
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('[')); // false
console.log(isValid('[[[]')); // false
console.log(isValid('{[]}')); // true
