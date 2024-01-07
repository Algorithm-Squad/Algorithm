function minAddToMakeValid(s: string): number {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      const lastOfStack = stack.at(-1);
      if (lastOfStack === "(") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return stack.length;
}

// 문제 풀이
// 1. 반복문을 돌면서 문자가 "("인 경우 스택(배열)에 넣는다.
// 2. "("가 아닌 경우 스택의 마지막 문자가 "("이면 해당 요소를 제거한다.
// 3. "("가 아닐 경우 스택에 추가한다.
// 4. 최종 스택의 길이가 필요한 이동수가 된다.
