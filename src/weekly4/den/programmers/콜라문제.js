/*
[내 풀이]

- 입출력 예시
(3, 2, 20)
빈 병 20개 중 18개를 마트에 가져가서, 12병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 14(20 – 18 + 12 = 14)개 입니다.
빈 병 14개 중 12개를 마트에 가져가서, 8병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 10(14 – 12 + 8 = 10)개 입니다.
빈 병 10개중 9개를 마트에 가져가서, 6병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 7(10 – 9 + 6 = 7)개 입니다.
빈 병 7개중 6개를 마트에 가져가서, 4병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 5(7 – 6 + 4 = 5)개 입니다.
빈 병 5개중 3개를 마트에 가져가서, 2병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 4(5 – 3 + 2 = 4)개 입니다.
빈 병 4개중 3개를 마트에 가져가서, 2병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 3(4 – 3 + 2 = 3)개 입니다.
빈 병 3개중 3개를 마트에 가져가서, 2병의 콜라를 받습니다. 이때 상빈이가 가지고 있는 콜라 병의 수는 2(3 – 3 + 2 = 2)개 입니다.
3번의 교환 동안 상빈이는 36(12 + 8 + 6 + 4 + 2 + 2 + 2 = 36)병의 콜라를 받았습니다.

시간 복잡도: 추정 실패.
*/

function solution(a, b, n) {
  let answer = 0;

  function colarEvent(a, b, n){
    if(n < a) return;
    var eventBottle = Math.floor(n / a) * b;
    answer += eventBottle;

    var givenBottle = a * Math.floor(n / a);
    var currentBottle = n - givenBottle + eventBottle;
    colarEvent(a, b, currentBottle);
  }
  colarEvent(a, b, n);
  return answer;
}

console.log(solution(2, 1, 20));  // 19
console.log(solution(3, 2, 20));  // 36