// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  const sortedTime = book_time.sort();

  const room = [];

  sortedTime.forEach((time) => {
    const [start, end] = time;
    const [hour, min] = start.split(':');

    const startTime = Number(hour + min);

    const idx = room.findIndex((endTime) => endTime <= startTime);

    if (idx === -1) room.push(getNextTime(end));
    else room[idx] = getNextTime(end);
  });

  return room.length;
}

function getNextTime(endTime) {
  const [hour, min] = endTime.split(':');
  if (Number(min) + 10 > 60) {
    return Number(`${Number(hour) + 1}` + min) - 50;
  }
  return Number(hour + min) + 10;
}

// 매개변수
// book_time : 예약 시각이 문자열 형태로 담긴 2차원 배열

// 출력
// 코니에게 필요한 최소 객실의 수

// 문제 해결 및 설명
// 호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다.
// 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
// 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.

// 먼저 매개변수 book_time을 오름차순으로 정렬한다.
// 그리고 각 예약 시작 시간을 앞선 예약들의 대실 종료 시간들과 비교하면서, 대실 종료 시간보다 예약 시작 시간이 빠르다면, 새로운 예약의 종료시간을 room 배열에 추가
// 반대로 예약 시간 보다 대실 종료 시간이 빠르다면, 대실 종료 시간을 새로운 예약의 종료시간으로 변경
// 마지막으로 room 배열의 길이를 반환

// 실패한 코드
// function solution(book_time) {
//   const obj = {};

//   book_time
//     .sort((a, b) => {
//       const timeA = a[0];
//       const timeB = b[0];
//       return timeA.localeCompare(timeB);
//     })
//     .forEach((time, index) => {
//       const [start, end] = time;
//       const [startHour, startMin] = start.split(':');
//       const newCustomerStartTime = Number(startHour + startMin);
//       const [endHour, endMin] = end.split(':');
//       const newCustomerEndTime = Number(endHour + endMin) + 10;

//       if (Object.keys(obj).length === 0) {
//         obj[index] = newCustomerEndTime;
//       }

//       for (let i = 0; i < Object.keys(obj).length; i++) {
//         console.log(obj);
//         const key = Object.keys(obj)[i];
//         if (obj[key] <= newCustomerStartTime) {
//           delete obj[key];
//           obj[index] = newCustomerEndTime;
//         } else {
//           obj[index] = newCustomerEndTime;
//         }
//       }
//     });
//   return Object.keys(obj).length;
// }

// function solution(book_time) {
//   const sortedTime = book_time.sort();

//   const room = [];

//   sortedTime.forEach((time) => {
//     const [start, end] = time;
//     const [hour, min] = start.split(':');

//     const startTime = Number(hour + min) + 10;

//     const idx = room.findIndex((endTime) => endTime <= startTime);

//     if (idx === -1) room.push(getNextTime(end));
//     else room[idx] = getNextTime(end);
//   });

//   return room.length;
// }

// function getNextTime(endTime) {
//   const [hour, min] = endTime.split(':');

//   return Number(hour + min) + 10;
// }
// // 아마 오류가 18:55인 경우, 10을 더하면 1865, 실제로는 1905가 되어야 하는데, 그럼 만약 다음 시작 시간이 19:00일때, 사실 1905 방을 사용하지 못하지만, 1865로 되어있기 때문에 사용할 수 있게된다
