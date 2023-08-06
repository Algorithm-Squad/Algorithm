export function solution(phone_book) {
  phone_book.sort();

  const phoneBookMap = new Map();

  for (let i = 0; i < phone_book.length; i++) {
    const curNumber = phone_book[i];
    for (let j = 1; j < curNumber.length; j++) {
      if (phoneBookMap.has(curNumber.slice(0, j))) {
        return false;
      }
    }
    phoneBookMap.set(curNumber, true);
  }
  return true;
}
