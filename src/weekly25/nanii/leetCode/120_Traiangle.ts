/**
 * 120. Triangle
 * https://leetcode.com/problems/triangle/
 * @param triangle
 */
function minimumTotal(triangle: number[][]): number {
  let result = 0;

// 한줄씩 순회하면서 최소값과 인덱스를 저장
// 그다음줄에서 이전에 저장했던 최소값의 인덱스 +1, -1의 값이 최소값이면 ?
// 최종 결과에 + min
  let pre = {
      value: 0,
      index: 0,
  };
  triangle.forEach((row) => {
      const minimum = Math.min(...row);
      row.forEach((str, index) => {
          if (minimum === str) {
              if(pre.index - index < 2 || pre.index - index > -2) {
                  pre.value = str;
                  result += str;
              }
          }
      });
  });

  return result;
};