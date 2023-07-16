// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];

  // left : 왼쪽 괄호의 개수
  // right : 오른쪽 괄호의 개수
  // str : 현재까지 만들어진 괄호 문자열
  const dfs = (left, right, str) => {
    // 괄호의 개수가 n개가 되면 종료
    if (left === n && right === n) {
      answer.push(str);
      return;
    }

    // 왼쪽 괄호의 개수가 n개보다 작으면 왼쪽 괄호 추가
    // 먼저 괄호를 열어야되기 때문에 left부터 판단!
    if (left < n) {
      dfs(left + 1, right, str + '(');
    }

    // 오른쪽 괄호의 개수가 왼쪽 괄호의 개수보다 작으면 오른쪽 괄호 추가
    // 먼저 left가 n보다 작은 경우 진행된 dfs 이후에 "("가 하나씩 빠지게 되고
    // 오른쪽 괄호가 왼쪽 괄호보다 작은지 판단하게 된다
    if (right < left) {
      dfs(left, right + 1, str + ')');
    }
  };

  dfs(0, 0, '');

  return answer;
};

// 매개변수
// n : 숫자

// 출력
// 괄호가 여닫히는 n개의 괄호가 만들어지는 모든 경우의 수를 담은 배열

// 문제 해결 및 설명
// dfs를 사용한 풀이
// 왼쪽 괄호의 개수와 오른쪽 괄호의 개수, 괄호로 만들어진 str을 파라미터로 받는 dfs 함수를 만들고
// 왼쪽과 오른쪽 괄호의 개수가 모두 n개가 되면 종료하고, 그렇지 않으면 왼쪽 괄호의 개수가 n개보다 작으면 왼쪽 괄호를 추가하고
// 오른쪽 괄호의 개수가 왼쪽 괄호의 개수보다 작으면 오른쪽 괄호를 추가한다
// 이렇게 하면 괄호가 여닫히는 n개의 괄호가 만들어지는 모든 경우의 수를 구할 수 있다

// 만약 n이 3인 경우에는
// 먼저 모든 처음 판단은 left가 n보다 작은지 여부부터 판단하게 된다
// 따라서 "((("로 시작하고 ")))"가 붙는다
// 그리고 "((()))"가 answer에 추가되는데, 이후에는 마지막 "("가 빠지고 "((" 상태에서
// right < left인지 판단하게 된다
// 이후 모든 과정은 동일하다
