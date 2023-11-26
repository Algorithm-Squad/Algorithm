export function majorityElement(nums: number[]): number[] {
  // 찾는 기준
  const size = nums.length / 3;

  // Map 객체 생성
  const map = new Map<number, number>();

  // 결과(정답)를 받는 배열
  const answer: number[] = [];

  // 반복문을 돌면서 Map에 해당 키가 있는 경우 value + 1, 키가 없는 경우 value = 1로 생성
  for (const num of nums) {
    map.has(num) ? map.set(num, map.get(num)! + 1) : map.set(num, 1);
  }

  // 반복문을 돌면서 value가 기준보다 큰 경우 해당 키를 정답 배열에 추가
  for (const element of map) {
    if (element[1] > size) answer.push(element[0]);
  }

  // 정답 배열 반환
  return answer;
}
