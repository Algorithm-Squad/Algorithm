// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// 해당 문제는 Heap 구조를 활용해야 함
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // 값을 빼되, 오름차 순 정렬 함
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}
console.log(solution([1, 2, 3, 9, 10, 12], 7));

// 매개변수
// scoville: 음식의 스코빌 지수가 담긴 배열
// K: 스코빌 지수의 최소값

// 출력
// 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수

// 문제 설명 및 해결
// 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 구하는 문제
// 이 문제를 해결하기 위해서는 Heap 자료 구조를 사용해야 한다
// Heap 자료 구조는 최소 힙과 최대 힙으로 나뉘는데, 최소 힙은 부모 노드의 값이 자식 노드의 값보다 작거나 같은 완전 이진 트리를 말한다
// 최소 힙은 부모 노드의 값이 자식 노드의 값보다 작거나 같기 때문에, 루트 노드의 값이 최소값이 된다
// 이 문제에서는 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 구해야 하므로, 최소 힙을 사용해야 한다
// 먼저 scoville 배열을 순회하면서, 최소 힙에 값을 push 한다
// 그리고 최소 힙의 크기가 2 이상이고, 최소 힙의 최소값이 K보다 작은 경우에는
// 최소 힙에서 두 개의 값을 pop 하고, 섞은 음식의 스코빌 지수를 최소 힙에 push 한다
// 이 과정을 반복하면서, 최소 힙의 크기가 2 이상이고, 최소 힙의 최소값이 K 이상인 경우에는 반복문을 종료한다
// 그리고 최소 힙의 최소값이 K 이상인 경우에는 섞은 횟수를 반환하고, 그 외의 경우에는 -1을 반환한다

// 첫 번째 풀이
// 먼저 모든 음식의 스코빌 지수를 K 이상으로 만들 ㅎ수 없는 경우 -1을 return
// 그리고 while문을 통해서, 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복해서 계산
// 테스트 코드는 통과하였으나, 전체 풀이에서 실패 및 시간초과

// const calScoville = (first, second) => {
//   return first + second * 2;
// };

// const solution = (scoville, K) => {
//   // 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
//   if (K > 0 && Math.max(...scoville) === 0) return -1;

//   let count = 0;
//   let calRequired = true;
//   let scovilleArr = [...scoville];

//   while (calRequired) {
//     const first = scovilleArr[0];
//     const second = scovilleArr[1];

//     const newScoville = calScoville(first, second);
//     count += 1;
//     scovilleArr = [newScoville, ...scovilleArr.slice(2)];
//     if (Math.min(...scovilleArr) >= K) {
//       calRequired = false;
//     }
//     scovilleArr.sort((a, b) => a - b);
//   }

//   return count;
// };
