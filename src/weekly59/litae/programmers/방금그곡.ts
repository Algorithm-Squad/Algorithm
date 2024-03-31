export function solution(m, musicinfos) {
  //musicinfo를 재생 시간순으로 정렬
  musicinfos = musicinfos
    .map((v) => v.split(","))
    .sort((a, b) => {
      return calculateTime(b[0], b[1]) - calculateTime(a[0], a[1]);
    });

  // 재생된 음악 만들기
  const playedMusic = musicinfos.map(([start, end, name, music]) => {
    const sheet = music.match(/C#|D#|F#|G#|A#|C|D|E|F|G|A|B/g);
    const duration = calculateTime(start, end);
    const [div, mod] = [
      Math.floor(duration / sheet.length),
      duration % sheet.length,
    ];

    return music.repeat(div) + sheet.slice(0, mod).join("");
  });

  // 맬로디와 비교하며 일치 여부를 확인
  for (let i = 0; i < playedMusic.length; i++) {
    const music = playedMusic[i].match(/C#|D#|F#|G#|A#|C|D|E|F|G|A|B/g);
    const melody = m.match(/C#|D#|F#|G#|A#|C|D|E|F|G|A|B/g);

    if (melody && music && isIncludeArray(music, melody))
      return musicinfos[i][2];
  }
  return "(None)";
}

function calculateTime(s, e) {
  const [sH, sM] = s.split(":").map((v) => +v);
  const [eH, eM] = e.split(":").map((v) => +v);

  return eH * 60 + eM - sH * 60 - sM;
}

function isIncludeArray(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) {
      let match = true;
      for (let j = 0; j < b.length; j++) {
        if (i + j >= a.length || a[i + j] !== b[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }
  return false;
}

// 첫 번째 접근(실패)
// '한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다'의 경우를 고려하지 못함

// function solution(m, musicinfos) {
//     const melodies = convertMelodies(m);

//     musicinfos.sort((a, b) => {
//       const [aStart, aEnd, aTitle, aPattern] = a.split(",");
//       const [bStart, bEnd, bTitle, bPattern] = b.split(",");

//       return calculateTime(aStart, aEnd) >= calculateTime(bStart, bEnd) ? 1 : -1;
//     });

//     for (let i = 0; i < musicinfos.length; i++) {
//       const info = musicinfos[i].split(',');
//       const [startTime, endTime, title, melody] = info;
//       const duration = calculateTime(startTime, endTime);
//       let convertedMelody = convertMelodies(melody);

//       while (duration > convertedMelody.length) {
//         convertedMelody += convertedMelody;
//       }

//       if (convertedMelody.includes(melodies)) {
//         return title;
//       }
//     }

//     return "(none)";
//   }

//   function calculateTime(start, end) {
//     const startTime = start.split(":");
//     const endTime = end.split(":");

//     return endTime[0] * 60 + endTime[1] - (startTime[0] * 60 + startTime[1]);
//   }

//   function convertMelodies(melodies) {
//     return melodies
//       .replace(/C#/g, "H")
//       .replace(/D#/g, "I")
//       .replace(/F#/g, "J")
//       .replace(/G#/g, "K")
//       .replace(/A#/g, "L");
//   }
