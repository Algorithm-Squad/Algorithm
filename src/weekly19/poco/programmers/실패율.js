// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const obj = {};
  let participant = stages.length;
  const stage = Array.from({ length: N }, (_, i) => i + 1);

  stage.forEach((ordinalNum) => {
    const failure = stages.filter((el) => el === ordinalNum).length;
    const failureRate = failure / participant;
    const passer = participant - failure;

    obj[failureRate] ? obj[failureRate].push(ordinalNum) : (obj[failureRate] = [ordinalNum]);
    participant = passer;
  });

  const sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  const sortedValues = sortedKeys.map((key) => obj[key]);
  return sortedValues.flat();
}

// 매개변수
// N : 전체 스테이지의 개수
// stages : 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열

// 출력
// 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열 return

// 문제 설명 및 해결
// 전체 스테이지 개수가 주어지고, 각 사용자가 멈춰있는 스테이지 번호가 담긴 배열이 주어질 때,
// 각 스테이지의 실패율을 구하고, 실패율을 기준으로 내림차순으로 스테이지 번호가 담긴 번호를 return 하는 문제
// 실패율 계산은 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수로 한다
// 만약 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의한다

// 각 스테이지별로 실패한 사람과 실패율을 구하고 각 실패율을 key로 하고 value를 스테이지 번호를 갖는 배열로 하는
// 객체 obj를 만들어 주었다

// 전체 stage별로 모든 실패율을 계산한 뒤, obj 객체의 key를 내림차순 정렬하고, value에 있는 스테이지 번호들을 return해서 해결
