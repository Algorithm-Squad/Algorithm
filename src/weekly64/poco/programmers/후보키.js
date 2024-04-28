// https://school.programmers.co.kr/learn/courses/30/lessons/42890

const getCombination = (arr, select) => {
  const result = [];
  if (select === 1) return arr.map((v) => [v]);

  arr.forEach((fixedNum, index, origin) => {
    const restArr = origin.slice(index + 1);
    const combinations = getCombination(restArr, select - 1);
    const attached = combinations.map((combination) => [
      fixedNum,
      ...combination,
    ]);
    result.push(...attached);
  });
  return result;
};

// 유일성을 만족하는 조합을 찾는 함수
const getUniqueCombinations = (relation, combinations) => {
  const results = []; // 유일성을 만족하는 조합들로만 이루어진 results 배열

  combinations.forEach((combination) => {
    const set = new Set();
    relation.forEach((rel) => {
      // combination을 map으로 순회하면서 relation의 각 요소의 인덱스에 해당하는 값을 가져와서 join으로 합치고 set에 저장
      // 예를들어, combination이 [0, 1]이라면 rel[0]과 rel[1]을 합쳐서 set에 저장('100,ryan', '200,apeach')
      set.add(combination.map((el) => rel[el]).join(''));
    });

    // 만약 set의 크기가 relation의 길이와 같다면, 유일성을 만족하는 조합이므로 results에 추가
    if (set.size === relation.length) {
      results.push(combination);
    }
  });
  return results;
};

const getMinCombinations = (combinations) => {
  let results = [];

  let sortedCombinations = combinations;

  while (sortedCombinations.length) {
    // 유일성을 만족하는 조합 중 첫 번째 원소를 최소성을 만족하는 원소로 넣는다.
    results.push(sortedCombinations[0]);
    sortedCombinations = sortedCombinations.reduce((acc, cur) => {
      let notMinimal = sortedCombinations[0].every((combination) =>
        cur.includes(combination)
      );
      // 현재 조회중인 cur배열 안에 combinations[0]의 모든 원소가 포함된다면 최소성을 만족하지 않는것임
      if (!notMinimal) acc.push(cur);
      // 최소성을 만족하는 cur 조합을 acc에 추가해줌
      return acc;
    }, []);
    // combinations들은 combinations[0]과 비교해서 최소성을 만족하는 애들로 갱신됨
  }
  return results;
};

const solution = (relation) => {
  const columnCombinations = [];

  for (let i = 1; i <= relation[0].length; i++) {
    const columnCombination = getCombination(
      relation[0].map((_, i) => i),
      i
    );
    columnCombinations.push(...columnCombination);
  }

  const uniqueCombinations = getUniqueCombinations(
    relation,
    columnCombinations
  );

  const minimalCombinations = getMinCombinations(uniqueCombinations);
  return minimalCombinations.length;
};

// 매개변수
// relation : 학생의 인적사항을 나타내는 2차원 배열

// 출력
// 후보키의 개수를 반환

// 문제 설명 및 해결
// 릴레이션(Relation)의 튜플(Tuple)을 유일하게 식별할 수 있는 속성(Attribute) 또는 속성의 집합 중,
// 다음 두 성질을 만족하는 것을 후보 키(Candidate Key)라고 한다.
// 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
// 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다.
// 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
); // 2
