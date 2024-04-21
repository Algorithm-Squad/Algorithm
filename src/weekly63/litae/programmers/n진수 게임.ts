export function solution(n: number, t: number, m: number, p: number): string {
  // m명의 인원이 t번만큼 돌기 위해 필요한 문자열 길이
  const size = m * t;

  // 임시 문자열
  let temp = "";

  // 정답 문자열
  let answer = "";

  // 임시 문자열을 만들기 위한 카운트(0부터 시작)
  let count = 0;

  // 반목문을 통해 size와 길이가 같거나 긴 n진수 문자열 생성
  while (temp.length < size) {
    temp = temp + count.toString(n);
    count++;
  }

  // size 길이만큼 자르기
  temp = temp.slice(0, size);

  // temp에서 순서에 해당되는 문자를 찾아 정답 문자열에 추가(나머지 활용)
  for (let i = 0; i < temp.length; i++) {
    if (m === p) {
      if ((i + 1) % m === 0) answer += temp[i];
    }
    if ((i + 1) % m === p) answer += temp[i];
  }

  // 소문자를 대문자를 변환하여 반환
  return answer.toUpperCase();
}
