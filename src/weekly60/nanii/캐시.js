/**
 * 캐시 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 * @param {*} cacheSize 캐시 크기 <= 30
 * @param {*} cities 도시 이름 배열 (대소문자 구분x, 최대 100,000개)
 * @returns
 * 도시 이름 배열 순으로 처리할 때, 총 실행시간을 출력
 * 캐시 교체 알고리즘은 LRU(Least Recently Used) 사용
 * - 캐시크기가 꽉 찼고 새로운 데이터를 넣어야 할 때, 가장 오랫동안 참조되지 않은 것을 교체
 * - cache hit일 경우 (현재 값이 있을 때) 실행시간 1, cache miss일 경우 (현재 값이 없을 때) 실행시간 5
 */
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5; // 캐시가 없으므로 모든값이 miss

  let cacheQ = [];
  return cities.reduce((acc, c) => {
    const city = c.toLowerCase();
    const idx = cacheQ.indexOf(city);

    if (idx !== -1) {
      // hit인 경우 해당 값 제거하고, 맨 뒤에 추가
      cacheQ.splice(idx, 1);
      cacheQ.push(city);
      return acc + 1;
    }

    // miss인데 캐시가 꽉 찬 경우, 맨 앞에 있는 값 제거
    if (cacheQ.length === cacheSize) {
      cacheQ.shift();
    }
    // 새로운 값 추가
    cacheQ.push(city);
    return acc + 5;
  }, 0);
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
); // 21
