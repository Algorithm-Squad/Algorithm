/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/155651
 */

function solution(book_time: string[][]): number {
  const map: Map<number, number> = new Map();

  for (const [startTime, endTime] of book_time) {
    let startMinute: number = calcTime(startTime);
    const endMinute: number = calcTime(endTime);
    for (; startMinute < endMinute + 10; startMinute++) {
      map.set(startMinute, (map.get(startMinute) || 0) + 1);
    }
  }
  return Math.max(...map.values());
}

function calcTime(time: string): number {
  const [hour, minute] = time.split(':').map(x => +x);
  return hour * 60 + minute;
}

console.log(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]));  // 3
console.log(solution([["09:10", "10:10"], ["10:20", "12:20"]]));  // 1
console.log(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]])); // 3