/**
 * 오픈채팅방 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 * @param {*} record
 * @returns
 * 중복 닉네임 허용, 기존 회원이 변경한 경우에는 이전 목록도 싹 다 수정, 대소문자 구분
 */
function solution(record) {
  let result = [];

  const text = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  const nicknameMap = new Map();
  record.forEach((r) => {
    const [action, id, name] = r.split(' ');

    // Change => Id map에서 해당 id에 대한 Key변경 Map.set("id", "name")
    if (action === 'Change') {
      nicknameMap.set(id, name);
    } else {
      // Enter => result.push("${id}님이 들어왔습니다.") & 해당 id가 Map.has("id") Map.set("id", "name");
      // Leave => result.push("${id}님이 나갔습니다.")
      if (action === 'Enter') {
        nicknameMap.set(id, name);
      }
      result.push([id, text[action]]);
    }
  });
  // 최종적으로 result를 순회하면서 id의 값을 name으로 변경하여 반환
  return result.map(([id, text]) => `${nicknameMap.get(id)}${text}`);
}
