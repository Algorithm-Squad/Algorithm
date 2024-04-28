// plan 타입 정의
type PlanType = {
  name: string;
  start: number;
  during: number;
};

function solution(plans: string[][]) {
  // 끝난 plan을 담는 배열
  const finished: string[] = [];
  // 작업 중인 plan을 담는 배열
  const stack: PlanType[] = [];
  // 객체로 변환된 plans를 담는 배열
  const converted: PlanType[] = [];
  let count = 0;

  // 모든 plan을 반복문으로 돌며 시작 시간과 진행 시간을 분 단위로 변환하고 객체화
  plans.forEach((plan) => {
    converted.push({
      name: plan[0],
      start: getMin(plan[1]),
      during: parseInt(plan[2]),
    });
  });

  // 시작 시간 순으로 정렬
  converted.sort((a, b) => a.start - b.start);

  const startTime = converted[0].start;

  // i는 현재 시간을 분으로 환산한 값
  for (let i = startTime; i < 1440; i++) {
    // stack에 plan이 있는 경우 뒤의 plan(최근 추가된 plan)부터 진행
    if (stack.length !== 0) {
      const lastPlan: PlanType = stack[stack.length - 1];
      lastPlan.during--;

      // 진행 중인 plan이 끝나면
      if (lastPlan.during === 0) {
        // 작업 중인 plan에서 해당 plan 제거
        stack.pop();
        // finished에 완료된 plan 추가
        finished.push(lastPlan.name);
      }
    }

    // 현재 시간이 plan 시작 시간이 있는 경우 시작된 plan을 진행중인 plan 배열(stack)에 추가하고, count + 1
    if (converted[count] && i === converted[count].start) {
      stack.push(converted[count]);
      count++;
    }
  }

  // 끝나지 않은 plan을 역순으로 정답에 추가
  const unfinished = stack.reverse().map(({ name }) => name);
  return [...finished, ...unfinished];
}

// string 형태로 된 시간을 분 단위 숫자로 변환하는 함수
function getMin(time) {
  const splitArray = time.split(":");
  return parseInt(splitArray[0]) * 60 + parseInt(splitArray[1]);
}
