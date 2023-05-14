/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/17682
 * 
 * 시작시간: 17:20
 * 종료시간: 18:00
 */

 const checkAttribute = (scoreArray: number[], dartResult: string) => {
  let str = "";
  const obj = {
    'D': 2,
    'S': 1,
    'T': 3,
    '#': -1
  };
  
  for(let i = 0; i < dartResult.length; i++) {
    const word = dartResult[i];
    if(word >= '0' && word <= '9') str += word;
    
    if(['S','D','T'].includes(word)) {
      scoreArray.push(Math.pow(str, obj[word]));
      str = '';
    }
    
    if(word === '*') {
      for(let j = scoreArray.length - 2; j <= scoreArray.length - 1; j++) {
        scoreArray[j] *= 2;
      }
    }
    
    if(word === '#') scoreArray[scoreArray.length-1] *= obj[word];
  }
  return scoreArray;
}

function solution(dartResult: string): number {
  const scoreArray = [];
  return checkAttribute(scoreArray, dartResult).reduce((acc, cur) => {
      return acc + cur;
  }); 
}

console.log(solution("1S2D*3T")) // 37
console.log(solution("1D2S#10S")) // 9
console.log(solution("1D2S0T")) // 3

