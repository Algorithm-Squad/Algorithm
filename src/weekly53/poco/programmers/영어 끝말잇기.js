// https://school.programmers.co.kr/learn/courses/30/lessons/12981

const solution = (n, words) => {
  const passedWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) return [(i % n) + 1, Math.floor(i / n) + 1];
    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    if (passedWords.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    passedWords.push(words[i]);
  }
  return [0, 0];
};

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
); // [3, 3]

// 매개변수
// n : 끝말잇기에 참여하는 사람의 수
// words : 사람들이 순서대로 말한 단어가 들어있는 배열

// 출력
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지 배열에 담아서 반환

// 문제 설명 및 해결
// 다음과 같은 규칙이 있는 끝말잇기를 하는 문제이다.
// 1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말한다.
// 2. 마지막 사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
// 3. 이전에 등장했던 단어를 말할 수 없다.
// 4. 한 글자인 단어는 인정되지 않는다.
// 5. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작한다.
// 위와 같은 규칙을 가진 끝말잇기를 할 때, 가장 먼저 규칙을 어긴 사람의 번호와 그 사람이 자신의 몇 번째 차례에 어긴 규칙인지 반환하는 문제이다.
// words를 순회하면서, 한 글자인 단어는 인정되지 않기 때문에, 단어의 길이가 1인 경우 [(i % n) + 1, Math.floor(i / n) + 1]를 반환한다.
// i가 0보다 크고, 이전에 등장한 단어의 마지막 문자로 시작하는 단어가 아닌 경우 [(i % n) + 1, Math.floor(i / n) + 1]를 반환한다.
// 이전에 등장했던 단어를 말할 수 없기 때문에, passedWords에 단어를 저장하고, 이미 등장한 단어인 경우 [(i % n) + 1, Math.floor(i / n) + 1]를 반환한다.
// 모든 경우를 통과하면 [0, 0]을 반환한다.
