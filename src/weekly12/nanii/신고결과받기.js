/**
 * 신고결과받기 / Kakao BLIND
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 *
 * @param {*} id_list
 * @param {*} report
 * @param {*} k
 * @returns
 */
function solution(id_list, report, k) {
  //key : 신고당한 사람, value: 신고한사람들
  const reports = new Map();
  report.forEach(re => {
    const [er, ed] = re.split(' ');
    //이미 신고된 사람이면서 중복 신고가 아닌경우, 신고자를 추가시킴
    if(reports.has(ed) && !reports.get(ed).includes(er)) reports.get(ed).push(er);
    //이미 신고된 사람이 아니면 신고자를 set
    else reports.set(ed, [er]);
  });

  //key : ld_list, value : reports에서 K번 이상 신고된 사람을 신고하여 결과를 통보받은 횟수
  const emailList = new Map();
  id_list.forEach(id => {
    let count = 0;
    [...reports.values()].forEach(value => {
      // k번 이상의 신고되었고, 그 신고자들 배열에 해당 Id 가 있다면 횟수 증가
      if(value.length >= k && value.includes(id)) count ++;
    });
    //아니면 해당 [id , 0]set
    emailList.set(id, count);
  });

  return [...emailList.values()];
}

// const [id_list, report, k] = [["muzi", "frodo", "apeach", "neo"],
// ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2]; //[2,1,1,0]
// const [id_list, report, k] = [["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3]; //[0,0]
// const [id_list, report, k] = [["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "apeach neo", "muzi neo"], 1]; //
const [id_list, report, k] = [["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2]; //
console.log(solution(id_list, report, k)); // [2,1,1,0]
/**
Map(3) {
  'frodo' => [ 'muzi', 'apeach' ],
  'neo' => [ 'frodo', 'muzi' ],
  'muzi' => [ 'apeach' ]
}

Map(1) { 'con' => [ 'ryan' ] }
 */