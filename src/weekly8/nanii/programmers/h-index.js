/**
 * H-index / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * 문제해석 : h-index의 정의
 * R이라는 연구자의 h지수는, "R연구자가 출판한 전체 논문* 가운데, 피인용회수가 h이상인 논문이 h개를 채우는 수치"
 * h지수가 30인 연구자는 피인용회수가 30이상인 논문이 30편 있다는 것을 나타냅니다.
 * 두 숫자가 같아지거나 비교했을때 total citations가 순번보다 더 작아지기 시작하기 직전의 숫자 = h - index
 *
 * 시간복잡도 : O(nlogn)
 * 공간복잡도 : O(n)
 *
 *
 * @param {*} citations
 * @returns
 */
function solution(citations) {
  const arr = citations.sort((a, b) => b - a);

  for(let i = 0; i < arr.length; i ++) {
    console.log(arr[i], i + 1);
    if(arr[i] < i + 1) return i;
    else continue;    // break와 차이
  } return arr.length;
}

// const citations = [3, 0, 6, 1, 5]; //3
// const citations = [100, 100, 100]; //3
const citations = [77,6,5,5,4,2]; //4
// const citations = [0,1,1]; //1
console.log(solution(citations));