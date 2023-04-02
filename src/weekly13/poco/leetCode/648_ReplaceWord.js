// https://leetcode.com/problems/replace-words/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const answer = sentence
    .split(' ')
    .map((word) => {
      dictionary.forEach((root) => {
        if (word.indexOf(root) === 0) {
          word = root;
        }
      });
      return word;
    })
    .join(' ');
  return answer;
};

console.log(replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'));

// 매개변수
// dictionary : 어근
// sentence : 공백으로 나누어진 문장

// 문제 설명 및 해결
// sentence 문장의 단어들 중 dictionary에 존재하는 root(어근)로 시작하는 단어는
// root로 replace하는 문제

// sentence의 각 문자열들을 순회하면서, 각 문자열이 root로 시작한다면 root로
// 치환하여 해결, 만약 root로 시작하지 않는 경우에는 문자열 그대로 출력
// 시간복잡도 O(n^2)? 1318ms.... 최악
