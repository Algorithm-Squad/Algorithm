/*
문제 설명
- 문자열 하나가 입력으로 주어지고, 이 단어가 사전에서 몇 번째 단어인지 반환하는 문제다.
  - 알파벳 모음 'A', 'E', 'I', 'O', 'U'만 사용하여 만들 수 있는, 길이 5이하의 모든 단어에 대해
    사전에 첫 단어는 "A"이고, 그 다음은 "AA", 마지막 단어는 "UUUUU"로 구성된 사전이 제공된다.
*/

function collectDictionary(word: string): number {
  let answer = 0;
  const dictionary = ['A', 'E', 'I', 'O', 'U'];

  [...word].forEach((char, idx) => {
    let num = dictionary.findIndex((spell) => spell === char);
    answer += increaseExponential(idx) * num + 1;
  });
  return answer;
}

function increaseExponential(index: number): number {
  const POW = 4;
  let sum = 0;
  let cnt = 0;

  while (cnt <= POW - index) sum += 5 ** cnt++; // 5^0, 5^1, 5^2, 5^3, 5^4
  return sum;
}

console.log(collectDictionary('AAAAE')); // 6
console.log(collectDictionary('I')); // 1563
