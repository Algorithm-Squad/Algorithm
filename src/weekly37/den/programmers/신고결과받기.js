function solution(id_list, report, k) {
  const ids = new Map();
  const reports = new Set([...report]);
  const reportCounts = new Map();

  id_list.forEach((id) => ids.set(id, []));

  reports.forEach((report) => {
    const [user, reportedUser] = report.split(" ");
    ids.get(user).push(reportedUser);
    reportCounts.set(reportedUser, (reportCounts.get(reportedUser) || 0) + 1);
  });

  return [...ids].map(([user, reportedUsers]) => {
    return reportedUsers.reduce((count, user) => {
      if (reportCounts.get(user) >= k) count += 1;
      return count;
    }, 0);
  });
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0,0]
