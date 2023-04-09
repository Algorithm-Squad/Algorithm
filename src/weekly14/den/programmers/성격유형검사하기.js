/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript 
 * 
 * 시간복잡도: O(N)
 * 
 * @param {string[]}
 * @param {number[]}
 * @return {string}
 */

function solution(survey, choices) {
  // 성격유형별 점수판
  const scoreSheet = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  }
  const surveyInEach = survey.map((element) => element.split("")).flat();
  
  choices.forEach((choice, index) => {
    const firstType = surveyInEach[index + (index)];
    const secondType = surveyInEach[index + (index + 1)];
    const MEDIAN = 4;

    if(choice < MEDIAN) scoreSheet[firstType] += MEDIAN - choice;
    if(choice === MEDIAN){
      scoreSheet[firstType] += 1;
      scoreSheet[secondType] += 1;
    }
    if(choice > MEDIAN) scoreSheet[secondType] += choice - MEDIAN;
  })
  
  const types = Object.keys(scoreSheet);

  return types.map((type, index) => {
    const isOdd = index % 2 === 1;
    if(isOdd) return;
    const firstTypeScore = scoreSheet[type];
    const secondTypeScore = scoreSheet[types[index + 1]];
    if(firstTypeScore > secondTypeScore) return type;
    if(firstTypeScore === secondTypeScore) return type;
    if(firstTypeScore < secondTypeScore) return types[index + 1];
  })
  .filter((element) => typeof element === 'string')
  .join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])) // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])) // "RCJA"