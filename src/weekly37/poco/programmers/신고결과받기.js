// https://school.programmers.co.kr/learn/courses/30/lessons/92334
function solution(id_list, report, k) {
  const reports = {};
  const userObj = {};

  id_list.forEach((id) => {
    reports[id] = []; // 유저를 신고한 사람의 목록을 담을 배열
    userObj[id] = 0; // 각 유저별로 처리 결과 메일을 받은 횟수를 담을 객체
  });

  // 신고당한 사람의 목록을 배열에 담기
  // some 메서드 활용하여 기존 동일 유저가 신고한 경우에는 null 처리
  report.forEach((el) => {
    const [id, target] = el.split(' ');
    reports[target].some((user) => user === id)
      ? null
      : reports[target].push(id);
  });

  // 신고자들을 순회하면서, 신고한 사람이 2명 이상인 경우,
  // userObj에 각 신고한 사람들에 count +1씩 해주기
  for (const value of Object.values(reports)) {
    if (value.length >= k) {
      value.forEach((id) => {
        userObj[id] += 1;
      });
    }
  }

  return Object.values(userObj);
}

// 매개변수
// id_list : 이용자의 ID가 담긴 문자열 배열
// report : 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
// k : 정지 기준이 되는 신고 횟수

// 출력
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

// 문제 설명 및 해결
// 각 유저는 한 번에 한명의 유저를 신고할 수 있다
// 신고는 여러번 할 수는 있지만, 동일한 유저에 대한 신고는 1회로 처리된다
// k번 이상 신고된 유저는 게시판 이용이 정지되고, 해당 유저를 신고한 모든 유저에게 정지 사실이 메일로 발송된다
// 먼저 각 유저별로 key로 유저와 value로 해당 유저를 신고한 사람들의 목록 배열을 저장할 reports 객체와
// 각 유저별로 메일을 받는 횟수를 저장할 userObj 객체를 생성한다
// 그리고 매개변수 report 배열을 순회하면서 신고한 사람과 이전에 신고한 사람이 일치하는지 여부를 확인한 후
// 일치하지 않는 경우에만 reports 객체에 해당 유저를 신고한 사람의 목록 배열에 push 해준다
// 그리고 reports 객체를 순회하면서, 해당 유저가 신고당한 횟수가 k번 이상일 때는 userObj 객체에서
// 해당 유저가 받는 메일의 count를 +1 해준다
