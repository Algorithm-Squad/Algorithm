function checkBracket(string) {
  const container = [];

  const obj = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < string.length; i++) {
    const cur = string[i];
    if (container.length === 0) {
      container.push(cur);
      continue;
    }

    container.at(-1) === obj[cur] ? container.pop() : container.push(cur);
  }
  return container.length === 0 ? true : false;
}

function solution(s) {
  let answer = 0;

  for (let j = 0; j < s.length; j++) {
    const str = s.substring(j) + s.substring(0, j);
    checkBracket(str) === true ? (answer += 1) : null;
  }
  return answer;
}

// 매개변수
// s : 대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열

// 문제설명 및 해결
// 괄호로 이루어진 문자열 s를 0번부터 s.lenght -1 번 이동했을 때, 올바른 괄호가 되는 경우의 수의 개수를 return 하는 문제
// for문을 통해 문자열 s를 좌측으로 0번부터 s.length -1번 이동하게 하였고, 각각 좌측으로 n번 이동한 문자열을 checkBracket 함수를 통해 올바른 괄호인지 판단했다.
