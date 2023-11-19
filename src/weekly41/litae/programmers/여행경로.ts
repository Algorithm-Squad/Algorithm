export function solution(tickets: string[][]): string[] {
  tickets.sort();

  let visit = Array(tickets.length).fill(false);
  let answer: string[] = [];

  function dfs(cur: string, cnt: number, path: string[]) {
    if (cnt === tickets.length && answer.length === 0) {
      answer = path;
      return;
    }

    for (let i = 0; i < tickets.length; i += 1) {
      if (visit[i]) continue;

      if (tickets[i][0] === cur) {
        visit[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        visit[i] = false;
      }
    }
  }

  dfs("ICN", 0, ["ICN"]);

  return answer;
}

// 풀이 방법(DFS)
// 1. 티켓 배열을 알파벳 순으로 정렬
// 2. visit 배열을 false로 초기화하고 방문여부를 체크
// 3. 현재 위치, 카운트, 경로를 받는 dfs
// 4. 모든 티켓을 확인하고(cnt === tickets.length), 정답이 없는 경우(answer.length === 0) 현재 경로를 답으로 하고 dfs 함수 종료
// 5. for문으로 티켓을 탐색하면서 이미 확인한 티켓은 건너뛰기
// 6. 만약 출발하는 공향이 현재 공항과 일치하는 경우 해당 티켓을 방문 처리
// 7. 다음 단계 탐색 실행
// 8. 탐색이 끝나면 방문여부 체크 해제
