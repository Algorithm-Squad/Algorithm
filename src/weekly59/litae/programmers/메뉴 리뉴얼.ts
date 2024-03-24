function solution(orders: string[], course: number[]): string[] {
  let answer: string[] = [];
  // 메뉴 주문 횟수를 저장하는 객체
  let menuCountMap: { [menu: string]: number } = {};

  course.forEach((courseLength) => {
    orders.forEach((order) => {
      getCombinations(order.split(""), courseLength).forEach((combination) => {
        const menu = combination.sort().join("");

        // 메뉴가 이미 있는 경우 +1, 메뉴가 없는 경우 메뉴 추가
        menuCountMap[menu]
          ? (menuCountMap[menu] += 1)
          : (menuCountMap[menu] = 1);
      });
    });
  });

  course.forEach((courseLength) => {
    let maxCount = 0;
    for (const menu in menuCountMap) {
      if (menuCountMap[menu] === 1) continue;
      if (menu.length === courseLength) {
        menuCountMap[menu] > maxCount ? (maxCount = menuCountMap[menu]) : "";
      }
    }

    // 가장 많이 주문된 메뉴의 등장 횟수와 길이에 맞는 메뉴를 temp 배열에 필터링하여 저장
    let temp = Object.keys(menuCountMap).filter((menu) => {
      return menuCountMap[menu] === maxCount && menu.length === courseLength;
    });

    // temp에 있는 메뉴들을 popularMenus에 추가
    temp.forEach((menu) => answer.push(menu));
  });

  // 오름차순으로 정렬하고 반환
  return answer.sort();
}

// length에 맞는 조합을 생성하는 함수
function getCombinations(arr: string[], length: number): string[][] {
  const result: string[][] = [];

  // 길이가 1이면 배열의 각 요소를 반환
  if (length === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, array) => {
    // 현재 요소를 제외한 배열
    const restArray = array.slice(idx + 1);

    // 나머지 배열에서 길이가 -1인 배열을 재귀적으로 생성
    const combinations = getCombinations(restArray, length - 1);

    // 현재 요소와 나머지 배열에서 생성한 조합을 합쳐서 새로운 조합 생성
    const fixedCombinations = combinations.map((el) => [fixed, ...el]);

    result.push(...fixedCombinations);
  });

  return result;
}
