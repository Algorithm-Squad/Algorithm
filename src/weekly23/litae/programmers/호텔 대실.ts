export function solution(book_time: string[]): number {
  const numberBookTime: number[][] = timeToNumber(book_time);
  const checked: number[][] = [...[numberBookTime[0]]];
  let a: number = 0;
  let answer: number = 1;

  for (let i: number = 1; i < numberBookTime.length; i++) {
    for (let j: number = 0; j < checked.length; j++) {
      if (
        numberBookTime[i][0] < checked[j][0] &&
        numberBookTime[i][1] < checked[j][0]
      )
        break;
      if (numberBookTime[i][0] > checked[j][1]) break;
    }
    answer += 1;
    checked.push(numberBookTime[i]);
  }

  return answer;
}

function timeToNumber(array: string[]): number[][] {
  const timeArray: number[][] = array.map((time) => {
    const startTime: number = Number(time[0].replace(":", ""));
    const endTime: number = Number(time[1].replace(":", "")) + 10;
    return [startTime, endTime];
  });

  return timeArray;
}
