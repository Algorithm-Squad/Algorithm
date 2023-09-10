function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 0) return [];

  // 힌트를 얻은 부분
  const map: { [key: number]: number } = nums.reduce((map, value) => {
    map[value] = map[value] || 0;
    map[value]++;
    return map;
  }, {});

  return Object.keys(map)
    .sort((a, b) => map[Number(b)] - map[Number(a)])
    .slice(0, k)
    .map(Number);
}

// 풀이 방법
// 1. nums이 빈 배열인 경우 예외 처리
// 2. map 객체의 키는 숫자이고 값은 해당 숫자의 개수
// 3. 각 숫자를 map 객체의 키로 사용하고, 해당 숫자가 이미 등록되어 있는 경우 기존 값에 1을 더하고, 그렇지 않으면 값을 1로 초기화
// 4. Object.keys(map)를 사용하여 map 객체의 모든 키(숫자)를 배열로 추출
// 5. sort 함수를 사용하여 내림차순으로 정렬(키의 개수가 많은 순)
// 6. slice(0, k)를 사용하여 정렬된 배열에서 상위 k개의 요소 가져오기
// 7. map(Number)를 사용하여 결과 배열의 요소들을 숫자로 반환
