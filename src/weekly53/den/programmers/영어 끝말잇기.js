/**
 * 시작시간: 15:20
 * 종료시간: 15:50
 * 
 * n: 2 이상 20 이하
 * words: n이상 100 이하 길이의 문자열 배열
 * 
 * 단, 탈락자가 생기지 않으면, [0, 0]을 return
 * 
 * @param {number} n
 * @param {string[]} words
 * 
 * @return {[number, number]}
 */

function solution(n, words) {
  // words를 2개 index씩 순회한다.
  // 1. 앞 index target 문자의 끝 문자열과 뒤 index target 문자의 앞 문자열이 일치하는지 확인
  // 2. 뒷 index target 문자와 동일한 문자가 words 배열에 존재하는지 확인
  // -> 1번과 2번 조건에 걸리면, (index % n) + 1 === 탈락하는 사람의 번호, Math.floor(index / n) === 탈락하는 사람의 탈락 차례
  // -> [탈락하는 사람의 번호, 탈락하는 사람의 탈락 차례] 반환
  // 탈락하는 사람이 없다면 [0, 0] 을 반환

  for(let i = 0; i < words.length - 1; i += 1){
    const prev = words[i];
    const next = words[i + 1];

    const isNotEqual = prev[prev.length - 1] !== next[0];
    const isAlreadyCalled = words.slice(0, i).includes(next);

    if(isNotEqual || isAlreadyCalled){
      const targetIndex = i + 1;

      return [(targetIndex % n) + 1, Math.floor((targetIndex / n)) + 1];
    }
  }

  return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1, 3]
// 2번, 2