export function solution(record: string[]): string[] {
  // 유저의 id와 상태를 담는 객체
  const user = {};
  const message = {
    Enter: "들어왔습니다.",
    Leave: "나갔습니다.",
  };
  const answer: string[][] = [];

  for (const log of record) {
    const [state, id, name] = log.split(" ");
    // state가 Enter이거나 Change일 경우 아이디에 따라 닉네임을 설정
    if (name) user[id] = name;

    // state가 Change가 아닐 경우 answer 배열에 id와 state를 저장
    if (state !== "Change") answer.push([id, state]);
  }

  // answer 배열의 id와 state를 이용하여 log 메세지 완성
  return answer.map(([id, state]) => `${user[id]}님이 ${message[state]}`);
}
