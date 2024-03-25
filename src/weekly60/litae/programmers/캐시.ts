function solution(cacheSize: number, cities: string[]) {
  let answer: number = 0;
  const cache: string[] = [];

  // 캐시 크기가 0인 경우 실행시간은 도시의 수 * 5(cache miss)
  if (cacheSize === 0) return cities.length * 5;

  for (const city of cities) {
    // 도시 이름을 대소문자로 구분하지 않기 때문에 소문자로 통일
    const cityName = city.toLowerCase();

    // 캐시에 도시 이름이 있는 경우
    if (cache.includes(cityName)) {
      // 기존 도시를 제거
      cache.splice(cache.indexOf(cityName), 1);
      // 가장 뒤에 도시 추가
      cache.push(cityName);
      // 실행시간 +1(cache hit)
      answer += 1;
    } else {
      // 캐시에 도시 이름이 없는 경우
      // 캐시에 도시 추가
      cache.push(cityName);
      // 캐시의 크기가 주어진 캐시 크기보다 커질 경우, 가장 오래된 캐시 삭제
      if (cache.length > cacheSize) cache.shift();
      // 실행시간 +5(cache miss)
      answer += 5;
    }
  }

  return answer;
}
