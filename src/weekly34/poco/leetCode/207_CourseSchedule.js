// https://leetcode.com/problems/course-schedule/
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);

  prerequisites.forEach((pre) => {
    inDegree[pre[0]]++;
  });
  const zeroDegree = [];

  // inDegree를 순회하며 선행 과목이 없는 과목을 zeroDegree에 담는다.
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      zeroDegree.push(i);
    }
  }

  // zeroDegree 배열이 비어 있다면, 모든 강의가 순환 구조를 가짐
  // 즉, 모든 과목에 선행과목이 필요하기 때문에 false를 반환한다.
  if (zeroDegree.length === 0) return false;
  console.log('2', zeroDegree);

  // zeroDegree 배열을 반복하면서 순환 구조가 없는 강의들을 처리
  while (zeroDegree.length) {
    // zeroDegree 배열에서 하나의 강의를 추출
    const course = zeroDegree.pop();
    console.log('in', inDegree);
    for (const pre of prerequisites) {
      console.log('3', pre);
      if (course === pre[1]) {
        // 선행 강의(pre[1])가 현재 강의(course)의 선행 강의로 사용되었으므로
        // inDegree 배열에서 pre[0]에 해당하는 값(현재 강의의 선행 강의 개수)을 감소
        inDegree[pre[0]]--;

        // 만약 pre[0] 강의의 선행 강의 개수가 0이 되면,
        // 이제 pre[0] 강의를 수강하기 위한 선행 강의가 없다는 의미이므로
        // zeroDegree 배열에 추가하여 다음으로 처리합니다.
        if (inDegree[pre[0]] === 0) {
          zeroDegree.push(pre[0]);
        }
      }
      console.log('4', inDegree);
    }
  }

  // 모든 강의를 수강할 수 있는지 확인하기 위해 inDegree 배열을 검사
  // 만약 어떤 강의의 선행 강의 개수가 0이 아니라면, 해당 강의는 수강할 수 없음
  for (const num of inDegree) {
    if (num !== 0) return false;
  }

  return true;
};

console.log(canFinish(3, [[2, 1, 0]]));
// numCourses = 2, prerequisites = [[1,0]]

// 매개변수
// numCourses: 코스의 갯수
// prerequisites: 선수과목 배열

// 출력
// 선수과목을 이수할 수 있는지 여부(boolean)

// 문제 설명 및 해결
// 선수과목을 이수할 수 있는지 여부를 반환하는 문제다.
// 먼저 전체 코스(numCourses) 길이의 inDegree 배열을 생성한다.
// 그리고 prerequisites 배열을 순회하면서, inDegree 배열에 선수과목을 저장한다.
// 그리고 inDegree 배열을 순회하면서, 선수과목이 없는 과목을 zeroDegree 배열에 담는다.
// 그리고 zeroDegree 배열을 순회하면서, 선수과목이 없는 과목을 처리한다.

// 추가 풀이
// var canFinish = function(numCourses, prerequisites) {
//   const order = [];
//   const queue = [];
//   const graph = new Map();
//   const inDegree = Array(numCourses).fill(0);

//   for (const [e, v] of prerequisites) {
//     if (graph.has(v)) {
//       graph.get(v).push(e);
//     } else {
//       graph.set(v, [e]);
//     }
//     inDegree[e]++;
//   }

//   for (let i = 0; i < inDegree.length; i++) {
//     if (inDegree[i] === 0) queue.push(i);
//   }

//   while (queue.length) {
//     const v = queue.shift();
//     if (graph.has(v)) {
//       for (const e of graph.get(v)) {
//         inDegree[e]--;
//         if (inDegree[e] === 0) queue.push(e);
//       }
//     }
//     order.push(v);
//   }

//   return numCourses === order.length;
// };
