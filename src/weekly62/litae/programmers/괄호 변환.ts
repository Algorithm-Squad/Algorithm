export function solution(p: string): string {
  const answer = convertParentheses(p);
  return answer;
}

// 균형잡힌 괄호 문자열 u, v로 분리하는 함수
const balancedString = (string: string) => {
  const stack: string[] = [];
  let [open, close] = [0, 0];

  // 반복문을 돌면서 여는 괄호와 닫는 괄호 개수 카운트
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push("(");
      open++;
    } else {
      stack.push(")");
      close++;
    }

    if (open === close) break;
  }

  // 여는 괄호와 닫는 괄호의 숫자가 같을 경우 [u, v] 리턴
  return [stack.join(""), string.slice(stack.length)];
};

// 올바른 괄호 문자열인지 여부를 확인하는 함수
const isCorrectString = (string: string): boolean => {
  const stack: string[] = [];

  for (let i = 0; i < string.length; i++) {
    stack[stack.length - 1] === "(" && string[i] === ")"
      ? stack.pop()
      : stack.push(string[i]);
  }

  return stack.length === 0;
};

const convertParentheses = (string: string): string => {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  if (string === "") return "";

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
  const [u, v] = balancedString(string);

  // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
  if (isCorrectString(u)) {
    const result = u + convertParentheses(v);

    //   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    return result;
  } else {
    // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
    const convertU = (u: string) => {
      return u
        .substring(1, u.length - 1) // 첫 번째, 마지막 문자 제거
        .split("")
        .map((v) => (v === ")" ? "(" : ")")) // 모든 문자 괄호 방향 바꾸기
        .join("");
    };

    //   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
    //   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
    //   4-3. ')'를 다시 붙입니다.
    //   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
    const result = "(".concat(convertParentheses(v)).concat(")") + convertU(u);

    //   4-5. 생성된 문자열을 반환합니다.
    return result;
  }
};
