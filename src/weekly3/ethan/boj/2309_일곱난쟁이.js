/*
## 문제 해석
- 아홉 개의 줄을 걸쳐 난쟁이에 대한 키 값이 주어지고, 각 키는 100을 넘지 않는 자연수로 제공됩니다
  - 여기서 일곱 난쟁이의 키의 총 합이 100이며, 이 조건을 만족하는 난쟁이의 키를 출력하는 문제입니다
  - 각 난쟁이들의 키는 모두 다르며, 가능한 정답이 여러가지의 경우에는 아무거나 출력합니다 (단, 오름차순으로 출력합니다)
*/

// function solution1(input) {
//   let filtered;
//   let sum = input.reduce((a, c) => a + c);
//   let copySum = sum;

//   for (let i = 0; i < input.length; i++) {
//     copySum -= input[i];
//     for (let j = 1; j < input.length; j++) {
//       if (copySum - input[j] === 100) {
//         filtered = input.filter((v) => v !== input[i] && v !== input[j]);
//         break;
//       }
//     }
//     copySum = sum;
//   }

//   const sorted = filtered.sort((a, b) => a - b);
//   for (const element of sorted) {
//     console.log(element);
//   }
// }
// solution1([20, 7, 23, 19, 10, 15, 25, 8, 13]);

function solution2(input) {
  let rest = input.reduce((a, c) => a + c) - 100;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (rest - (input[i] + input[j]) === 0) {
        input.splice(j, 1);
        input.splice(i, 1);
        console.log(input.sort((a, b) => a - b).join('\n'));
        return;
      }
    }
  }
}

solution2([20, 7, 23, 19, 10, 15, 25, 8, 13]); // 7 8 10 13 19 20 23
