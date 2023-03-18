// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = Array.from({ length: numRows }, (_, index) =>
    Array.from({ length: index + 1 }, () => 0)
  );

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      !answer[i - 1] || !answer[i - 1][j - 1] || !answer[i - 1][j]
        ? (answer[i][j] = 1)
        : (answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j]);
    }
  }

  return answer;
};

// 문제 설명 및 해결
// 매개변수 파스칼 삼각형의 전체 rows(행)
// 파스칼 삼각형의 모습을 2차원 배열로 출력하는 문제
// 먼저 파스칼 삼각형의 모습을 하는 2차원 배열을 선언하였다.
// 파스칼 삼각형의 n번째 row의 원소들은 처음과 마지막은 1, 그외 index의 값은 n-1번째 row의 (index - 1) + (index) 값이 된다.
// 따라서, 2중 for문을 통해 이전 row(파스칼 삼각형의 첫번째 줄 판단)와 이전 row의 (index - 1), (index) 값 중 하나라도 없을 경우,
// 해당 row의 index 값은 1(처음과 마지막 index)이 되고, 반대의 경우에는 이전 row의 (index - 1) + (index) 값으로 해주었다.
// 시간복잡도 O(n^2)

// 고민했던 부분
// 2중 for문 안에서의 조건문을 처리할 때, 단순히 이전 row의 (index - 1)값과 (index)값의 조건만을 판단했을 때,
// error가 계속 발생하였고, 이전 row가 있는지 여부 먼저 판단했을 때 통과
// 아마도 이전 row가 없는 상태에서 이전 row 배열의 값에 index를 이용해 접근했을 때 오류가 발생한 것으로 보인다

// 고민
// 전체 배열의 크기를 먼저 선언을 하고 for문을 통해 값들을 변경하기
// vs
// 빈배열에 for문을 통해 값들을 넣기
// 어떤게 더 효율적일지
