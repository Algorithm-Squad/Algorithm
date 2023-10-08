/**
 * 신고결과받기 / Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
 * @param id_list 이용자의 아이디가 담긴 배열
 * @param report [유저 아이디]와 [신고한 아이디]가 담긴 배열
 * @param k 정지 기준
 * @returns 신고한 유저가 정지되었을 때, 처리 결과 메일을 받은 횟수
 * 메일은 유저가 정지됐을 때 정지사실을 메일로 발송
 */
function solution(id_list: string[], report: string[], k: number): number[] {
  const answer = Array(id_list.length).fill(0);

  const reportMap = new Map<string, string[]>();
  const reportCountMap = new Map();

  report.forEach((r) => {
    const [user, target] = r.split(' ');

    if (!reportMap.has(user)) {
      reportMap.set(user, [target]);

      !reportCountMap.has(target)
        ? reportCountMap.set(target, 1)
        : reportCountMap.set(target, reportCountMap.get(target) + 1);

      return;
    }

    const targets = reportMap.get(user);
    // 중복 신고 방지
    if (!targets.includes(target)) {
      reportMap.set(user, [...targets, target]);

      !reportCountMap.has(target)
        ? reportCountMap.set(target, 1)
        : reportCountMap.set(target, reportCountMap.get(target) + 1);
    }
  });

  reportCountMap.forEach((count, target) => {
    if (count >= k) {
      reportMap.forEach((targets, user) => {
        if (targets.includes(target)) {
          answer[id_list.indexOf(user)] += 1;
        }
      });
    }
  });

  return answer;
}
