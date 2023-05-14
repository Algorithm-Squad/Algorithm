// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const record = [];
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const integer = Number(dartResult[i]);
    const nextInteger = Number(dartResult[i + 1]);

    if (integer >= 0 && integer <= 9) {
      integer === 1 && nextInteger === 0 ? ((score = 10), i++) : (score = integer);
    } else if (dartResult[i] === 'S') {
      record.push(score); // 1제곱
    } else if (dartResult[i] === 'D') {
      record.push(Math.pow(score, 2)); // 2제곱
    } else if (dartResult[i] === 'T') {
      record.push(Math.pow(score, 3)); // 3제곱
    } else if (dartResult[i] === '#') {
      record[record.length - 1] *= -1; // 현재 차례의 점수를 음수로 변환
    } else if (dartResult[i] === '*') {
      record[record.length - 1] *= 2; // 현재 차례의 점수를 2배로
      record[record.length - 2] *= 2; // 이전 차례의 점수를 2배로
    }
  }

  return record.reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
}

// 매개변수
// dartResult : 점수|보너스|[옵션]으로 이루어진 문자열 3세트

// 출력
// 최종 점수

// 문제 설명 및 해결
// 다트를 세 차례 던져 점수의 합계로 순위를 정한다
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지
// s, d, t 영역이 있고 각각 1제곱, 2제곱, 3제곱으로 점수가 계산
// 스타상(*) 당첨시 해당 점수와 이전 점수가 2배, 첫번째 기회인 경우 해당 점수만 2배가 된다(스타상은 중첩 적용이 가능하다)
// 아차상(#)은 해당 점수가 마이너스 처리된다(아차상은 스타상과 중첩이 가능하다) -> 예를 들어 이번판에서 아차상이 되면, 마이너스가 되고,
// 다음판에 스타상이 나오는 경우, 이번 판에서 마이너스된 점수는 2배가 된다
// s, d, t는 점수마다 하나씩 존재하고, 스타상과 아차상은 하나씩만 존재하고 존재하지 않을 수도 있다

// dartResult를 for문으로 순회하면서, 정수인 경우 score 값에 넣어주고
// 다음으로 오는 값이 "S", "D", "T"인 경우 1제곱, 2제곱, 3제곱 처리를 하고 record 배열에 push! (S,D,T까지는 필수 옵션)
// 다음 선택 옵션 중에 "#"," "*" 인 경우 요구사항에 맞춰서 처리하였다
// 최종적으로 record 배열을 reduce를 통해서 더하기로 해결

// 처음 시도한 방식
// function solution(dartResult) {
//   let answer = 0;
//   const score = {
//     1: 0,
//     2: 0,
//     3: 0,
//   };

//   const record = {
//     1: '', // "1S*"
//     2: '', // "2T*"
//     3: '', // "3S"
//   };

//   let order = 1;
//   for (let i = 0; i < dartResult.length; i++) {
//     const str = dartResult[i];
//     const prev = dartResult[i - 1];
//     if (
//       prev === 'S' ||
//       prev === 'D' ||
//       prev === 'T' ||
//       prev === '#' ||
//       prev === '*' ||
//       !isNaN(Number(str))
//     ) {
//       order += 1;
//     }
//     record[order] += str;
//   }

//   console.log(record);

//   const exponent = {
//     S: 1,
//     D: 2,
//     T: 3,
//   };

//   for (order in record) {
//     let scoreInOrder = '';
//     for (let i = 0; i < record[order].length; i++) {
//       const str = record[order][i];
//       if (!isNaN(Number(str))) {
//         scoreInOrder += str;
//       }

//       if (str === 'S' || str === 'D' || str === 'T') {
//         scoreInOrder = Math.pow(Number(scoreInOrder), exponent[str]);
//       }

//       if (str === '*') {
//         scoreInOrder = scoreInOrder * 2;
//         score[order - 1] = score[order - 1] * 2;
//       }

//       if (str === '#') {
//         scoreInOrder *= -1;
//       }
//     }
//     score[order] += scoreInOrder;
//   }
//   return score[1] + score[2] + score[3];
// }
