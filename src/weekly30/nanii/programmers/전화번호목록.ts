/**
 * 전화번호 목록 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * @param phone_book 전화번호가 담긴 배열
 * @returns 다른 번호의 접두어로 사용되는 경우가 있으면 false, 없으면 true
 */
function solution(phone_book: string[]): boolean {

  // 전화번호를 연관된 것이 순서대로 나열될 수 있게 정렬
  const sorted = phone_book.sort();
  for(let i = 0; i < sorted.length - 1; i++) {
    // 정렬된 전화번호들에서 인덱스가 작은 값이 큰 값보다 length가 작기 때문에
    // 바로 앞의 인덱스 값이 뒤의 인덱스 값의 시작인지 아닌지 확인한다.
    // 만약 시작되면 false, 아니면 다음으로 넘어간다.
    if(sorted[i + 1].startsWith(sorted[i])) return false;
  }
  return true;
}