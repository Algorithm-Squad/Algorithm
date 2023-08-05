/**
 * 문제출처: https://programmers.co.kr/learn/courses/30/lessons/42577
 * 시작시간: 22:00
 * 종료시간: 22:30
 * 결과: 실패
 *   - 정확성 테스트: 전부 통과
 *   - 효율성 테스트: 3/4 통과
 */

function solution1(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);

  const prefix = new Set();

  for (let i = 0; i < phone_book.length; i++) {
    const targetPhone = phone_book[i];
    prefix.add(targetPhone);
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[i].length === phone_book[phone_book.length - 1].length) {
        break;
      }
      if (phone_book[j].length === phone_book[i].length) {
        continue;
      }
      if (prefix.has(phone_book[j])) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution1(["119", "97674223", "1195524421"])); // false
console.log(solution1(["123", "456", "789"])); // true
console.log(solution1(["12", "123", "1235", "567", "88"])); // false

/**
 * 시작시간: 10:30
 * 종료시간: 10:50
 * 결과: 성공
 */

function solution2(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);

  const prefix = new Set();

  for (let i = 0; i < phone_book.length; i++) {
    const targetPhone = phone_book[i];
    for (let j = 1; j < targetPhone.length; j++) {
      if (prefix.has(targetPhone.slice(0, j))) {
        return false;
      }
    }
    prefix.add(targetPhone);
  }
  return true;
}
console.log(solution1(["119", "97674223", "1195524421"])); // false
console.log(solution1(["123", "456", "789"])); // true
console.log(solution1(["12", "123", "1235", "567", "88"])); // false
