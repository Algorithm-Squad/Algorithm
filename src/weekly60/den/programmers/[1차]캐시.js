const solution = (cacheSize, cities) => {
  if (cacheSize === 0) return cities.length * 5;

  let answer = 0;
  const cache = [];

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    const isCacheHit = cache.includes(city);

    if (isCacheHit) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } else {
      const isCacheFull = cache.length === cacheSize;

      if (isCacheFull) {
        cache.shift();
      }

      cache.push(city);
      answer += 5;
    }
  }
  return answer;
};

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
