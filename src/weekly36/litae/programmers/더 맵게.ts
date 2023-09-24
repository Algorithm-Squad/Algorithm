export function solution(scoville: number[], K: number): number {
  let count = 0;
  let scoArray = [...scoville];

  const sortScoville = () => {
    scoArray = [...scoArray.sort((a, b) => a - b)];
  };

  const mixScoville = () => {
    const newSco = scoArray[0] + scoArray[1] * 2;
    scoArray = [...scoArray.slice(2)];
    scoArray.push(newSco);
  };

  while (scoArray.length > 1 && scoArray[0] < K) {
    mixScoville();
    sortScoville();
    count++;
  }

  return scoArray[0] >= K ? count : -1;
}

// 문제 풀이
// 1. sortScoville 함수는 scoArray 배열을 오름차순으로 정렬하는 함수
// 2. mixScoville 함수는 scoArray의 두 가지 음식을 섞는 코드(섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2))
// 3. 두 과정이 끝나면 count++
// 4. 만약 scoArray의 가장 작은 스코빌 지수(scoville[0])가 K와 같거나 크면 count를 마지막까지 해당 조건을 만족하지 못하는 경우 -1를 리턴

// 결과
// 테스트 2, 3, 25 세 가지 실패...
// 효율성 테스트 시간 초과...
