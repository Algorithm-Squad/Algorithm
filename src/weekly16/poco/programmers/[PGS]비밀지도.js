// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const secretMap = [];

  const firstMap = arr1.map((row) => {
    let binary = row.toString(2);
    if (binary.length < n) {
      binary = binary.padStart(n, '0');
    }
    return binary;
  });

  const secondMap = arr2.map((row) => {
    let binary = row.toString(2);
    if (binary.length < n) {
      binary = binary.padStart(n, '0');
    }
    return binary;
  });

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      const first = firstMap[i][j];
      const second = secondMap[i][j];
      first === '0' && second === '0' ? (row += ' ') : (row += '#');
    }
    secretMap.push(row);
  }

  return secretMap;
}

// 매개변수

// n : 지도 한 변의 크기
// arr1, arr2 : 정수 배열

// 출력

// 비밀지도를 해독해서 벽(#)과 공백(" ")으로 구성된 문자열 배열 return

// 문제 설명 및 해결

// 지도에는 공백과 벽 두 종류로 이루어져 있다
// 지도 1 또는 지도 2에서 벽인 부분은 전체 지도에서도 벽이다
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로
// 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다

// arr1, arr2를 순회하면서, 각 10진수의 요소를 2진수로 변환
// 2진수로 변환된 두개의 배열을 순회하면서, 지도의 영역이 벽("#")일지, 공백(" ")일지
// 조건처리 시행

// 배운 것

// 특정 문자열을 변경해야하는 문제는 정규표현식으로 해결할 생각을 해보자
