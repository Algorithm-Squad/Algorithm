// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const answer = Array.from({ length: id_list.length }, () => 0);

  const reportObj = {};
  id_list.forEach((target) => {
    reportObj[target] = [];
  });

  report.forEach((el) => {
    const [id, target] = el.split(' ');
    reportObj[target].some((user) => user === id) ? null : reportObj[target].push(id);
  });

  for (target in reportObj) {
    if (reportObj[target].length >= k) {
      reportObj[target].forEach((id) => {
        answer[id_list.indexOf(id)] += 1;
      });
    }
  }
  return answer;
}

// 매개변수
// id_list : 이용자의 ID가 담긴 문자열 배열
// report : 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
// k : 정지 기준이 되는 신고 횟수

// 출력
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

// 문제 설명 및 해결
// 한번에 한명의 유저를 신고할 수 있다.
// 신고횟수에 제한은 없기 때문에, 다른 유저를 계속 신고할 수 있다
// 하지만, 동일 유저에 대한 신고를 1회로 처리된다
// k번 이상 신고된 유저는 게시판 이용이 정지되고, 해당 유저를 신고한
// 모든 유저에게 정지 사실이 메일로 발송된다

// 코드내에서 id는 신고한 사람, target은 신고당한 사람으로 정의하였다
// 먼저 요소가 0이고 전체 유저 수만큼의 길이를 갖는 answer 배열을 만든다
// 다음으로 key는 target, value는 빈 배열(신고한 사람을 추가) 되는 reportObj 생성
// 매개변수 report 배열을 순회하면서 id = 신고한 사람, target = 신고당한사람으로 해체할당 하였고
// target을 신고한 사람의 목록(배열)중에 동일한 id(신고한 사람)이 없는 경우에만 배열에 id를 push
// 그리고 reportObj 객체를 순회하면서, target을 신고한 사람이 k보다 큰 경우에만
// id 배열을 순회하면서, answer 배열에 해당 id의 index에 1 더해주는 방식으로 해결

// 배운 것
// 삼항연산자 내부에서는 continue 사용이 불가하다
// 대신 some과 함께 사용해서, true 값이 될 때, 바로 null로 처리해주자!(forEach에서도 처리가 되는지는 의문)

// 고민거리
// 프로그래머스에 다른사람의 풀이와 비교했을 때, map과 set을 사용했을 때, 시간이 더 적게 걸리는 것 같다! map, set 사용을 추가로 공부해야겠다

/* 실패 코드
function solution(id_list, report, k) {
  const answer = [];
  const reportObj = {};
  id_list.forEach((id) => {
    reportObj[id] = {
      // count: 0,
      // accuser: [],
    };
  });
  // 신고당한 유저 = { count(신고당한 횟수), accuser = [] (신고한 사람)}

  // id 신고한 사람
  // target 신고 당한 사람
  report.forEach((el) => {
    const [id, target] = el.split(' ');
    reportObj[id].hasOwnProperty(target)
      ? (reportObj[id][target] += 1)
      : (reportObj[id][target] = 1);
  });

  console.log(reportObj);
  for (id in reportObj) {
    let count = 0;
    const innerObj = reportObj[id];
    for (target in innerObj) {
      console.log(innerObj[target]);
      innerObj[target] >= k ? (count += 1) : null;
    }
    answer.push(count);
  }
  return answer;
}

*/
