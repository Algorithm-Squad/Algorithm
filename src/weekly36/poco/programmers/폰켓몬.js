// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const ponketMonObj = {};
  const count = nums.length / 2;

  nums.forEach((num) =>
    ponketMonObj[num] ? (ponketMonObj[num] += 1) : (ponketMonObj[num] = 1)
  );

  const ponketMonTypeCount = Object.keys(ponketMonObj).length;

  return count > ponketMonTypeCount ? ponketMonTypeCount : count;
}

// 매개변수
// nums : 폰켓몬의 종류번호가 담긴 1차원 배열

// 출력
// 가장 많은 종류의 폰켓몬을 선택했을 때, 폰켓몬 종류 번호의 개수

// 문제 설명 및 해결
// 가장 많은 종류의 폰켓몬을 선택했을 때의 폰켓몬 종류 번호의 개수를 구하는 문제
// 먼저 폰켓몬의 총 종류의 개수를 구하기 위해, nums 배열을 순회하면서 ponketMonObj에 폰켓몬 종류별 마리수를 저장한다
// ponketMonObj의 key 개수를 구하고, 폰켓몬을 선택할 수 있는 count 변수와 비교
// 만약 count가 ponketMonObj의 key 개수, 즉 폰켓몬의 종류보다 큰 경우에는 폰켓몬의 종류 개수를 반환하고
// 그외의 경우에는 count를 반환
