/**
 * 93. Restore IP Addresses / Medium
 * https://leetcode.com/problems/restore-ip-addresses/
 * @param s
0만 오는 건 가능하지만 0으로 시작하는 건 불가능
0~255 사이의 숫자만 가능
.말고 다른 문자가 들어가면 불가
IP 조합을 생성하는 함수
 */
function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  const dfs = (ip: string[], index: number) => {
    const ipLength = ip.length; // 4 까지

    // 배열의 길이가 4, 문자열의 길이까지 도달했으면 IP 조합 완성
    if (ipLength === 4 && index === s.length) {
      result.push(ip.join('.'));
      return;
    }

    for(let i = 0; i < 3; i++) {
      if(index + i >= s.length) break; // 문자열의 길이를 넘기면 안되므로 break
      // 0 ~ 255 숫자 조합을 생성
      const str = s.slice(index, index + i + 1);
      const strNumber = Number(str);

      if (strNumber <= 255) {
        if (str.length > 1 && str[0] === '0') break; // 0으로 시작하는 숫자는 불가능하므로 break

        ip.push(str);
        dfs(ip, index + i + 1); // 다음 인덱스로 이동
        ip.pop(); // 재귀호출이 반환되면 다음 조합을 위해 pop
      }
    }
  }

  dfs([], 0);

  return result;
};

/**
 * for문의 조건을 아래처럼 할 수도 있구나.
  for (let i = 1; i <= 3 && index + i <= s.length; ++i) {
    const substring = s.slice(index, index + i);
    if (substring[0] === '0' && i > 1) continue;
    const num = Number(substring);
    if (num <= 255) {
      curr.push(substring);
      backtrack(curr, index + i);
      curr.pop();
    }
  }
 */