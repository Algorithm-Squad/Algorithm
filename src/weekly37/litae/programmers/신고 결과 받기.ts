export function solution(
  id_list: string[],
  report: string[],
  k: number
): number[] {
  const set = [...new Set(report)].map((element) => element.split(" "));
  const reportedUser = set.map((element) => element[1]);
  const reportCount = new Array(id_list.length).fill(0);
  const reportedKUser = new Array();
  const result = new Array(id_list.length).fill(0);

  reportedUser.forEach((user) => {
    reportCount[id_list.indexOf(user)]++;
  });

  reportCount.forEach((user, index) => {
    if (user >= k) reportedKUser.push(id_list[index]);
  });

  set.forEach((user) => {
    if (reportedKUser.includes(user[1])) {
      result[id_list.indexOf(user[0])]++;
    }
  });

  return result;
}

// 문제 풀이
// 1. Set을 활용하여 중복된 요소를 제거하고 [신고한 유저, 신고당한 유저]를 담은 2차원 배열로 저장
// 2. reportedUser에 신고당한 유저를 배열로 저장
// 3. reportCount에 모든 유저의 수만큼 길이를 가진 배열을 생성하고 0으로 초기화
// 4. 신고당한 유저 배열(reportedUser)을 forEach로 돌면서 해당 유저의 index에 신고당한 수를 카운트
// 5. 카운트 된 배열(reportCount)을 돌면서 최소 k번 이상 신고된 경우(k 보다 신고당한 횟수가 많거나 같을 경우) reportedKUser 배열에 추가
// 6. set 배열을 돌면서 신고당한 사용자가 reportedKUser 배열에 포함되어 있는 경우, 해당 신고를 한 사용자의 result 값을 증가
