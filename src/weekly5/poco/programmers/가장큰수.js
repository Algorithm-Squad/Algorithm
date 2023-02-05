// https://school.programmers.co.kr/learn/courses/30/lessons/42746

const solution = function (numbers) {
  const answer = numbers.map((v) => v.toString()).sort((a, b) => (b + a) * 1 - (a + b) * 1);
  return answer[0] === '0' ? '0' : answer.join('');
};

// 문제설명 및 해결
// 0 또는 양의 정수로 이루어진 배열이 주어지고, 배열의 숫자들을 이어 붙여 만들 수 있는 가장 큰 수를 리던하는 문제
// 예를 들어, [6, 10, 2] 인 경우, 이어 붙여서 만들 수 있는 가장 큰 수는 "6210"(출력형식은 String)

// 처음에는 순열(순서가 상관 있는 조합) 방식을 통해 주어진 정수들을 이어 붙인 후 가장 큰 수를 찾는 방식으로
// 접근하였으나, 런타임 에러 발생으로 접근 방식 수정
// sort 매서드를 통해 정렬하는 방식으로 문제 해결

// javascript에서 sort는 기본적으로 배열을 문자열(String) 타입으로 간주하고 비교
// sort를 통해 두 숫자를 이어붙이 값을 비교하고 오름차순 정렬
// sort매서드 내부의 compare function은 (b+a)와 (a+b)를 비교해서 오름차순 정렬
// 주어진 배열에서 0으로 이루어진 경우도 있기 때문에, 0을 출력하는 분기 처리 후 결과 출력
// 시간복잡도 배열 map O(n), 내부의 sort 매서드 O(nlogn) => n^2 이상
