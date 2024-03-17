function solution(msg) {
  const dic = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  const answer = [];

  let word = "";
  let indexInDic = 0;

  for (let i = 0; i < msg.length; i++) {
    word += msg[i];
    const isExist = dic.indexOf(word);
    if (isExist !== -1) {
      indexInDic = isExist;
    } else {
      dic.push(word);
      answer.push(indexInDic + 1);
      word = "";
      i--;
    }
  }
  answer.push(indexInDic + 1);
  return answer;
}

console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 44, 45, 18, 15, 18, 20]
console.log(solution("ABABABABABABABAB")); // [1, 2, 27, 29, 28, 31, 30]
