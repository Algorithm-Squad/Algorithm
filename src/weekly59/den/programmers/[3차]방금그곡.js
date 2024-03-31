/**
 * C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 *
 * @param {string} m
 * @param {string[]} musicinfos
 * @returns
 */

function solution(m, musicinfos) {
  const filteredM = filterString(m);

  musicinfos = musicinfos.sort((a, b) => {
    const [startTimeA, endTimeA, titleA, patternA] = a.split(",");
    const [startTimeB, endTimeB, titleB, patternB] = b.split(",");

    return caculMinuteDif(startTimeB, endTimeB) >=
      caculMinuteDif(startTimeA, endTimeA)
      ? 1
      : -1;
  });

  for (const musicinfo of musicinfos) {
    const [startTime, endTime, title, sheet] = musicinfo.split(",");

    const minuteDif = caculMinuteDif(startTime, endTime);
    let filterSheet = filterString(sheet);

    while (filterSheet.length < minuteDif) {
      filterSheet += filterSheet;
    }

    filterSheet = filterSheet.slice(0, minuteDif);

    if (filterSheet.includes(filteredM)) {
      return title;
    }
  }

  return "(None)";
}

const caculMinuteDif = (startTime, endTime) => {
  const [hours1, minutes1] = startTime.split(":").map(Number);
  const [hours2, minutes2] = endTime.split(":").map(Number);

  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  const minuteDifference = Math.abs(totalMinutes1 - totalMinutes2);

  return minuteDifference;
};

function filterString(string) {
  let result = string;
  result = result.replaceAll("A#", "1");
  result = result.replaceAll("C#", "2");
  result = result.replaceAll("D#", "3");
  result = result.replaceAll("F#", "4");
  result = result.replaceAll("G#", "5");
  return result;
}

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
); // "HELLO"

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
); // "FOO"

console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
); // "WORLD"
