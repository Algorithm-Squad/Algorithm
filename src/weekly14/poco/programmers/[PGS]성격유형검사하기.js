function solution(survey, choices) {
  const count = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const type = ['RT', 'CF', 'JM', 'AN'];

  survey.forEach((v, i) => {
    const [firstType, secondType] = v.split('');

    if (choices[i] < 4) {
      count[firstType] += 4 - choices[i];
    }

    if (choices[i] > 4) {
      count[secondType] += choices[i] - 4;
    }
  });
  return type.reduce((acc, cur) => {
    const [firstType, secondType] = cur.split('');
    return (acc += count[secondType] > count[firstType] ? secondType : firstType);
  }, '');
}

// 매개변수

// survey : 판단하는 지표를 담은 1차원 문자열 배열
// choices : 검사자가 각 잘문마다 선택한 선택지를 담은 1차원 정수 배열

// 출력
// 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return

// 문제 설명 및 해결
// 매우 동의, 매우 비동의는 3점
// 동의, 비동의는 2점
// 약간 동의, 약간 비동의는 1점
// 모르겠음은 0점
// 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이 된다.
// 만약 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전순으로
// 빠른 성격 유형을 검사자의 성격 유형으로 판단한다.
// survey[i] 의 첫번째 문자열의 비동의 관련, 두번째 문자열은 동의 관련 문자열이다.
// choices는 1부터 7까지이며, 1은 매우 비동의, 4는 모르겠음, 7은 매우 동의이다.
// 각 유형별로 점수를 체크할 수 있는 count 객체를 선언
// 다음으로 하나의 지표에서 점수가 같은 경우, 사전순의 빠른 정렬을 위해 타입을 정렬한 type 배열 선언
// survey 배열을 순회하면서, 각 지표의 유형에 매우 비동의 부터 매우 동의까지 항목에 맞는 점수를 더해준다.
// 그리고 type 배열을 순회하면서, 각 지표 유형 점수들을 비교해서 답을 return
