/*
[내 풀이o]
[A, E, I, O, U]

A     1
AA    2
AAA   3
AAAA  4
AAAAA 5
AAAAE 6
AAAAI 7
AAAAO 8
AAAAU 9
AAAE  10
AAAEA 11
AAAEE 12
AAAEI 13
AAAEO 14
AAAEU 15
AAAI  16
AAAO  22
AAAU  28
AAE   34
AAI   65
AAO   96
AAU   127
AE    158
E     782

5반째 자리수는 1씩 커지고
4번째 자리수는 6씩 커지고
3번째 자리수는 31씩 커지고
2번째 자리수는 156씩 커지고
1번째 자리수는 781씩 커지고

EIO는 몇 번째 자리?
E     = 1 + (781 * 1) = 782
EI    = 782 + 1 + (156 * 2) = 1095
EIO   = 1095 + 1 + (31 * 3) = 1189
781 * 1 + 156 * 2 + 31 * 3

구현 여부: 구현 성공!
시간복잡도: O(N)
*/

function solution(word) {
  const chars = word.split("");
  const AEIOU = {'A': 0, 'E':1, 'I':2, 'O':3, 'U':4};
  const gaps = [781, 156, 31, 6, 1];

  let answer = 0;

  for(let i = 0; i < chars.length; i++){
    answer += gaps[i] * AEIOU[chars[i]] + 1;
  }
  return answer;
}

console.log(solution("E"));     // 782
console.log(solution("EA"));    // 783
console.log(solution("EI"));    // 1095
console.log(solution("EIA"));   // 1096
console.log(solution("EIO"));   // 1189