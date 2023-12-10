// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const answer = [];
  // 회문 문자열인지 확인하는 함수
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    // left가 right보다 작을 때까지 순회한다.
    while (left < right) {
      // left와 right가 가리키는 문자가 다르면 false를 반환한다.
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  };

  const partitioning = (temp, remain) => {
    if (!remain.length) {
      answer.push(temp);
      return;
    }

    for (let index = 0; index < remain.length; index++) {
      // remain의 0번째부터 index번째까지의 문자열을 str에 할당한다.
      const str = remain.slice(0, index + 1);

      // 회문 문자열이 아니면 continue
      // 현재 index에서 Palindrome이 아니라면, 추가적인 재귀 호출은 무의미하다.
      if (!isPalindrome(str)) continue;
      // 회문 문자열이면 재귀 호출
      // temp에 str을 추가하고, remain에서 str을 제거한 문자열을 재귀 호출의 매개변수로 넘긴다.
      partitioning([...temp, str], remain.slice(index + 1));
    }
  };

  partitioning([], s);

  return answer;
};

console.log(partition('aabccd'));

// 일단 s로 인해서 만들어질 수 있는 모든 부분 문자열을 구한다.
// 그리고 부분 문자열이 회문 문자열인지 확인한다.

// 매개변수
// s: 문자열

// 출력
// s를 분할하여 만들 수 있는 모든 회문 문자열의 집합

// 문제 설명 및 해결
// 문자열 s가 주어졌을 때, s를 분할하여 만들 수 있는 모든 회문 문자열의 집합을 구하는 문제이다.
// 회문 문자열이란 앞에서 읽으나 뒤에서 읽으나 같은 문자열을 의미한다.
// s를 분할했을 때, 모든 회문 문자열을 구하는 것이 아닌,
// s를 분할하여 만들 수 있는 모든 회문 문자열의 집합을 구하는 것이다.
// 즉, s를 분할했을 때, 만들어지는 부분 문자열들이 모두 회문 문자열인 경우를 구하는 것이다.
// 회문 문자열인지 확인하는 함수를 만들고, 재귀를 사용해서 문제를 해결했다.
// 재귀 함수는 임시 결과 배열인 temp와 remain이라는 s를 분할했을 때, 남은 문자열을 매개변수로 갖는다.
// 만약 remain이 빈 문자열이라면, 임시 결과 배열인 temp를 answer에 push하고 재귀를 종료한다.
// remain이 빈 문자열이 아니라면, remain의 0번째부터 순회하면서
// 0번째부터 index번째까지의 문자열을 str에 할당한다.
// str이 회문 문자열이 아니라면, continue를 한다.
// continue를 하는 이유는 현재 index까지의 slice가 회문 문자열이 아니라면,
// 추가적인 재귀 호출은 무의미하기 때문이다.
// s가 "abca"인 경우 "abc"는 회문 문자열이 아니기 때문에, remain "a"에서 추가적인 재귀 호출은 무의미하다.
