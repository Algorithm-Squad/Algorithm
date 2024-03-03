export function solution(s: string): number {
  // 스택 생성
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    // 스택의 맨 마지막 문자와 현재 순서의 문자를 비교하여 같을 경우 두 문자를 제거, 다를 경우 현재 문자를 스택에 추가
    !stack.length || stack[stack.length - 1] !== s[i]
      ? stack.push(s[i])
      : stack.pop();
  }

  return stack.length ? 0 : 1;
}

// 예시 baabaa

// loop 1.
// stack.length === 0 이므로 s[0]을 stack에 추가

// loop 2.
// stack.length === 1 이므로 stack[0]과 s[1]를 비교, 두 문자가 b, a로 다르기 때문에 s[1]를 stack에 추가

// loop 3.
// stack.length === 2 이므로 stack[1]과 s[2]를 비교, 두 문자가 a, a가 같기 때문에 stack에서 stack[1]를 제거

// loop 4.
// stack.length === 1 이므로 stack[0]과 s[3]를 비교, 두 문자가 b, b가 같기 때문에 stack에서 stack[1]를 제거

// loop 5.
// stack.length === 0 이므로 s[4]을 stack에 추가

// loop 6.
// stack.length === 1 이므로 stack[0]과 s[5]를 비교, 두 문자가 a, a가 같기 때문에 stack에서 stack[0]를 제거
