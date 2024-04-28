// https://school.programmers.co.kr/learn/courses/30/lessons/176962

// 시간 계산 함수
const calculateTime = (start) => {
  const [startHour, startMin] = start.split(':').map(Number);

  return startHour * 60 + startMin;
};

const solution = (plans) => {
  // [과제이름, 종료시간]을 담을 배열
  const stack = [];

  // 시작시간이 빠른 것부터 정렬
  const sortedPlans = plans
    .map(([name, start, palyTime]) => [
      name,
      calculateTime(start),
      Number(palyTime),
    ])
    .sort((a, b) => b[1] - a[1]);

  while (sortedPlans.length) {
    const [name, start, palyTime] = sortedPlans.pop();

    stack.forEach((plan, i) => {
      // stack을 순회하면서 현재 과제의 시작시간이 미완료 과제의 종료시간보다 빠른 경우
      // 미완료 과제를 멈추고 현재 과제를 시작하고
      // 미완료 과제의 종료시간에 현재 과제의 종료시간을 더해준다.
      if (start < plan[1]) stack[i][1] += palyTime;
    });
    stack.push([name, start + palyTime]);
  }

  // 종료시간이 빠른 순서대로 정렬 후 과제 이름만 반환
  const answer = stack.sort((a, b) => a[1] - b[1]).map((plan) => plan[0]);
  return answer;
};

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ])
); // ["korean", "english", "math"]

console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
  ])
); // ["science", "history", "computer", "music"]

// 매개변수
// plans : 과제 계획을 담은 이차원 문자열 배열, [name, start, playtime] 형태

// 출력
// 과제를 끝낸 순서대로 이름을 배열에 담아 반환하는 문제

// 문제 설명
// 과제는 시작하기로 한 시각이 되면 시작한다. 만약 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있다면 진행 중이던 과제를 멈추고 새로운 과제를 시작한다.
// 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행한다.
// 만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행한다.
// 멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다.
