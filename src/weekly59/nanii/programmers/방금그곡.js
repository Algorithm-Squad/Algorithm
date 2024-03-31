/**
 * (테스트 케이스 34번 실패)
 * 방금그곡 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17683
 * @param {*} m 멜로디를 담은 문자열
 * @param {*} musicinfos 방송된 곡의 정보를 담은 배열
 * @returns 재생된 시간이 제일 긴 음악 제목 , 조건 일치 하지 않으면 "(None)"
 * 1분에 1개씩 재생, 처음부터 재생되며 재생된 시간이 길때는 끊김없이 처음부터 반복 재생
 * 음악길이보다 재생시간이 짧을 때는 처음부터 재생시간만큼 재생
 */
function solution(m, musicinfos) {
  let answer = '';
  let max = 0;
  const formatM = formatMelody(m);
  musicinfos.forEach((musicinfo) => {
    const [start, end, title, melody] = musicinfo.split(',');

    const playTime = getPlayTime(start, end);
    const melodyList = formatMelody(melody).split('');
    const melodyLength = melodyList.length;

    let str = '';

    for (let i = 0; i < playTime; i++) {
      str += melodyList[i % melodyLength]; // 위치에 맞는 음악을 넣고
    }

    if (str.includes(formatM)) {
      if (playTime > max) {
        max = playTime;
        answer = title;
      }
    }
  });

  return answer || '(None)';
}

const getPlayTime = (start, end) => {
  const [startH, startM] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);
  return (endH - startH) * 60 + (endM - startM);
};

// #을 아예 바꾸는 건 안되고, 구분을 해야됨
const formatMelody = (melody) => {
  return melody
    .replace(/C#/g, 'c')
    .replace(/D#/g, 'd')
    .replace(/F#/g, 'f')
    .replace(/G#/g, 'g')
    .replace(/A#/g, 'a');
};

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "HELLO"
