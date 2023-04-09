/**
 * 성격유형검사하기 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * @param {*} survey 검사지표 배열
 * @param {*} choices 비동의, 동의 선택번호
 * @returns
 */
function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((test, index) => {
    const choice = choices[index];
    const disagree = test.charAt(0);
    const agree = test.charAt(1);

    score[choice >= 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.reduce((acc, type) => {
    score[type.charAt(0)] >= score[type.charAt(1)] ?
      acc += type.charAt(0) : acc += type.charAt(1);
    return acc;
  }, '');
}