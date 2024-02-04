// https://school.programmers.co.kr/learn/courses/30/lessons/64065

const solution = (s) => {
  const answer = new Set();

  // 처음과 끝의 {{, }}를 제거
  const trimmed = s.slice(2, -2);
  // '},{'를 기준으로 분리하여 각 집합 추출 후, 각 집합을 ','로 분리하여 2차원 배열 생성
  const setList = trimmed.split('},{').map((set) => set.split(','));

  // 배열을 길이 순으로 오름차순 정렬
  setList.sort((a, b) => {
    return a.length > b.length ? 1 : -1;
  });

  // 첫 번째 요소 answer에 저장
  // answer.push(Number(setList[0][0]));
  answer.add(Number(setList[0][0]));
  // 각 배열의 요소중에 answer에 없는 요소를 찾고 answer에 저장
  for (let i = 1; i < setList.length; i++) {
    for (let j = 0; j < setList[i].length; j++) {
      answer.add(Number(setList[i][j]));
    }
  }

  return [...answer];
};

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]

// 매개변수
// s: 특정 튜플을 표현하는 집합이 담긴 문자열 s

// 출력
// s가 표현하는 튜플을 배열에 담아 반환

// 문제 설명 및 해결
// 특정 튜플을 표현하는 집합이 담긴 문자열 s가 주어진다.
// s가 표현하는 튜플을 배열에 담아 반환하는 문제이다.
// 튜플은 다음과 같은 성질을 가지고 있다.
// 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
// 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
// 튜플의 원소 개수는 유한합니다.
// 주어진 매개변수 s를 가공하여 각 요소가 담긴 2차원 배열로 만들고 각 요소 배열의 길이를 기준으로 오름차순 정렬을 한다.
// 첫 번째 요소를 Set 객체에 추가하고, 다음 요소부터는 Set 객체에 없는 요소를 추가한다.(Set 객체는 중복을 허용하지 않는다.)
// Set 객체를 배열로 변환하여 반환한다.
// 주어진 문제에서 튜플은 가장 길이가 작은 것이 기준이 되기 때문에 길이 순으로 오름차순 정렬을 한다.
