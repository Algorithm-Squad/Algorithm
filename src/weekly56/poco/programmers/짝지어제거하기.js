// https://school.programmers.co.kr/learn/courses/30/lessons/12973

const solution = (s) => {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    const lastWord = answer[answer.length - 1];
    const curWord = s[i];

    answer.length === 0 || lastWord !== curWord
      ? answer.push(curWord)
      : answer.pop();
  }

  return answer.length === 0 ? 1 : 0;
};

console.log(solution('baabaa')); //1
console.log(solution('cdcd')); //0

// 매개변수
// s : 소문자 문자열

// 출력
// 짝지어 제거하는 과정을 성공적으로 수행할 수 있으면 1을, 아니면 0을 반환

// 문제 설명 및 해결
// 알파벳 소문자로 이루어진 문자열 s가 주어지고 같은 알파벳이 2개 붙어있는 짝을 제거하고 앞뒤로 문자열을 이어 붙인다.
// 위 과정을 반복했을 때, 문자열을 모두 제거한다면 짝지어 제거하기가 성공, 문자열을 모두 제거하지 못하면 실패이다.

// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
// s이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.
// for문으로 문자열 s를 순회하면서 answer 배열의 길이가 0이거나, answer 배열의 마지막 문자열과 현재 i 번째 문자열이 다른 경우에는 answer 배열에 현재 i 번째 문자열을 push 한다.
// 그렇지 않은 경우(answer 배열의 마지막 문자열과 현재 i번째 문자열이 같은 경우)에는 answer 배열의 마지막 문자열을 제거(pop)한다.
// for문 순회가 끝난 후 answer 배열의 길이가 0이면 1을, 0이 아니면 0을 반환한다.
