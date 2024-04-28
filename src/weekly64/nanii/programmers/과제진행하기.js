/**
 * 과제 진행하기 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * @param {*} plans 과제를 담은 이차원 배열
 * @returns 과제를 끝낸 순서대로 이름을 담은 배열
 * 진행중이던 과제를 멈추고 새로운 과제 시작
 * 과제 완료했을 때 멈춘 과제가 있으면 멈춘과제를 다시 시작하고, 새로운 과제도 있으면 새로운 과제를 먼저 시작
 * 멈춘 과제가 여러개면 최근에 멈춘 과제부터 시작
 */
function solution(plans) {
  const stack = []; // 잠시 멈춘 과제를 담을 스택
  const sortedPlans = plans
    .map(([name, start, play]) => {
      const [startHour, startMin] = start.split(':').map(Number);
      const minTime = startHour * 60 + startMin;
      const runtime = Number(play);
      return [name, minTime, runtime];
    })
    .sort((a, b) => b[1] - a[1]); // 시작 시간 순으로 내림차순 (마지막이 제일 최근)

  while (sortedPlans.length) {
    const [name, start, runtime] = sortedPlans.pop();

    stack.forEach(([_, endTime], idx) => {
      if (start < endTime) {
        stack[idx][1] += runtime;
      }
    });

    stack.push([name, start + runtime]);
  }

  return stack.sort((a, b) => a[1] - b[1]).map((task) => task[0]);
}

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
); // ["science", "music", "computer", "history"]
