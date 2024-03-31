/**
 * 파일명 정렬 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17686
 * @param {*} files
 * @returns 파일명에서 HEAD, NUMBER, TAIL을 추출하여 정렬
 * HEAD는 대소문자 구분 없이 알파벳 정렬
 * NUMBER는 숫자 순으로 정렬 (숫자 앞의 0은 무시)
 * TAIL은 HEAD와 NUMBER를 제외한 나머지 부분으로, 순서대로 정렬
 * 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만 포함
 */
function solution(files) {
  let fileMap = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const head = file.match(/^[a-zA-Z- ]+/)[0];
    const number = file.match(/[0-9]+/)[0];
    const tail = file.slice(head.length + number.length);
    fileMap.push({ head, number, tail });
  }

  fileMap.sort((a, b) => {
    const headA = a.head.toLowerCase();
    const headB = b.head.toLowerCase();
    if (headA < headB) return -1;
    if (headA > headB) return 1;
    if (headA === headB) {
      if (Number(a.number) < Number(b.number)) return -1;
      if (Number(a.number) > Number(b.number)) return 1;
    }
  });

  return fileMap.map(({ head, number, tail }) => head + number + tail);
}

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ])
); //["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
