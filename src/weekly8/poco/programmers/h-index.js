//https://school.programmers.co.kr/learn/courses/30/lessons/42747

const solution = (citations) => {
  let sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < citations.length; i++) {
    if (sortedCitations[i] >= i + 1) {
      answer++;
      continue;
    }
    break;
  }
  return answer;
};

// 문제 설명 및 해결
// 길이가 n인 배열이 주어지고, 해당 배열의 값 중 값과 그 값의 이상인 숫자의 갯수가 일치할 때, 해당 값을 반환하는 문제
// 먼저 큰 수부터 비교가 필요하기 때문에, 주어진 배열을 내림차순으로 정렬하고
// for문을 통해 정렬된 배열을 순회하면서, 값이 이 index + 1 보다 크거나 같은 경우, answer를 1씩 더해주는 방식으로 해결

/* 실패
const solution1 = (citations) => {
  let sortedCitations = citations.sort((a, b) => a - b);
  let mid = Math.floor(sortedCitations.length / 2);

  for (let i = 0; i < sortedCitations.length; i++) {
    let index = sortedCitations[mid];
    let moreThanIndex = sortedCitations.slice(mid).length;
    if (index === moreThanIndex) {
      return index;
    } else if (index < moreThanIndex) {
      mid--;
      continue;
    } else {
      mid++;
    }
  }
};
*/
