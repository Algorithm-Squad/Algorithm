// https://school.programmers.co.kr/learn/courses/30/lessons/132265

const solution = (topping) => {
  let answer = 0;

  // 토핑의 종류를 카운트
  const firstPiece = topping.reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  // 두 조각의 토핑의 종류의 갯수
  const secondPiece = {};

  // 토핑의 종류의 갯수(중복 제거)
  let firstPieceToppingCount = new Set(topping).size;
  // 토핑의 종류의 갯수
  let secondPieceToppingCount = Object.keys(secondPiece).length;

  // 토핑을 하나씩 옮기면서 공평하게 나눠지는 경우의 수를 구한다.
  for (let i = topping.length - 1; i >= 0; i--) {
    const toppingNum = topping[i];

    // 전체 토핑의 종류의 갯수를 수정
    firstPiece[toppingNum] -= 1;

    // 토핑이 0개가 되면 토핑을 삭제한다
    if (firstPiece[toppingNum] === 0) {
      delete firstPiece[toppingNum];
      firstPieceToppingCount -= 1;
    }

    // 만약 기존에 토핑이 없었다면 1로 초기화하고 토핑의 종류의 갯수를 증가시키고 토핑이 있었다면 토핑의 갯수를 증가시킨다.
    secondPiece[toppingNum]
      ? (secondPiece[toppingNum] += 1)
      : ((secondPiece[toppingNum] = 1), (secondPieceToppingCount += 1));

    // 첫 번째 조각과 두 번째 조각의 토핑 종류의 갯수가 같아지면 answer를 1 증가시킨다.
    if (firstPieceToppingCount === secondPieceToppingCount) answer += 1;
  }
  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2

// 매개변수
// topping : 롤케이크에 올라간 토핑의 번호가 담긴 배열

// 출력
// 롤케이크를 공평하게 자를 수 있는 경우의 수 반환

// 문제 설명 및 해결
// 여러가지 토핑이 일렬로 올라가있는 롤케이크를 두 조각으로 자르려고 한다.
// 두 조각의 토핑의 종류의 갯수가 같아야 한다.
// 두 조각의 케이크의 토핑이 공평하게 나뉘는 경우의 수를 구하라.
// 첫 번째 풀이에서 forEach문의 index 마다 slice를 사용해서 시간 초과가 발생했다.
// 따라서, slice로 새로운 배열을 생성하지 않고 문제를 해결하기 위해
// 처음에 모든 토핑을 가진 조각과 그렇지 않은 조각을 나누어서, 각 조각의 토핑의 종류의 갯수와 총 토핑 종류의 갯수를 구했다.
// 즉, 토핑을 하나씩 옮기면서 공평하게 나눠지는 경우의 수를 구한다.
// for문을 순회하면서 모든 토핑을 가진 조각에서 토핑을 하나씩 빼서 다른 조각으로 토핑을 옮긴다.
// 이때 조건문에 따라, 전체 토핑의 종류의 갯수를 수정했고, 두 조각의 토핑 종류의 갯수가 같아지면 answer를 1씩 증가시켰다.

// 첫 번째 풀이 (시간 초과로 실패!) -> 매개변수 topping의 크기가 최대 100만 개...
// 매개변수 topping 배열을 순회하면서, 매 인덱스를 기준으로 첫 번째와 두 번째 조각을 나눈다.
// 각 조각을 Set 객체로 만들어서 토핑의 종류의 갯수를 구한다.
// const countTopping = (piece) => {
//   const toppingSet = new Set(piece);
//   return toppingSet.size;
// };

// export const solution = (topping) => {
//   let answer = 0;

//   topping.forEach((_, index) => {
//     const firstPiece = topping.slice(0, index);
//     const secondPiece = topping.slice(index);

//     if (countTopping(firstPiece) === countTopping(secondPiece)) {
//       answer += 1;
//     }
//   });
//   return answer;
// };
