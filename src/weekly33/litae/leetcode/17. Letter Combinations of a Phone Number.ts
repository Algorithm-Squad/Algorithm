function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const map: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const result: string[] = [];

  function permutation(temp: string, index: number): void {
    if (index === digits.length) {
      result.push(temp);
      return;
    }

    for (const currentLetter of map[digits[index]]) {
      permutation(temp + currentLetter, index + 1);
    }
  }

  permutation("", 0);
  return result;
}

// 풀이 방법
// digits이 빈 배열인 경우 예외처리
// result은 최종적으로 생성된 문자 조합을 저장
// permutation 함수는 재귀적으로 문자 조합을 생성(temp: 현재까지 생성된 문자 조합, index: 현재 처리 중인 digits 문자열의 인덱스)
// permute 함수에서 index digits 문자열의 길이와 동일해지면 result 배열에 현재 생성된 조합 temp을 추가하고 종료
// 아닌 경우, 현재 숫자에 대한 문자 배열을 돌며 temp에 해당 문자를 추가, 다음 숫자에 대한 조합을 생성하기 위해 재귀 호출
