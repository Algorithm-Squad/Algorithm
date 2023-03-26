/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * 
 * 시간복잡도: O(N)
 * 
 * @param {string[]} id_list 
 * @param {string[]} report 
 * @param {number} k 
 * @returns {number[]}
 */

function solution(id_list, report, k) {
  const ids = new Map();
  const reports = new Set(report);
  const reportCounts = new Map();

  id_list.forEach(id => ids.set(id, []));
  reports.forEach(report => {
    const [ user, reportedUser ] = report.split(" ");
    ids.get(user).push(reportedUser);
    reportCounts.set(reportedUser, (reportCounts.get(reportedUser) || 0) + 1);
  });

  return [...ids].map(([user, reportedUsers]) => {
    let count = 0;
    reportedUsers.forEach(user => {
      if(reportCounts.get(user) >= k) count += 1;
    })
    return count;
  });
}

console.log(solution(["muzi", "frodo", "apeach", "neo"],
                     ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
                     2)); // [2,1,1,0]
console.log(solution(["con", "ryan"],
                     ["ryan con", "ryan con", "ryan con", "ryan con"],
                     3)); // [0,0]