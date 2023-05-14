function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let resultArray = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === "S") {
      resultArray.push(score);
    } else if (dartResult[i] === "D") {
      resultArray.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      resultArray.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      resultArray[resultArray.length - 2] =
        resultArray[resultArray.length - 2] * 2;
      resultArray[resultArray.length - 1] =
        resultArray[resultArray.length - 1] * 2;
    } else if (dartResult[i] === "#") {
      resultArray[resultArray.length - 1] =
        -1 * resultArray[resultArray.length - 1];
    }
  }

  answer = resultArray.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
