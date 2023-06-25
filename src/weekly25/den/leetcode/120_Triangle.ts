/**
 * 문제출처: https://leetcode.com/problems/triangle/
 * 
 * 시작시간: 17:50
 * 종료시간: 19:00
 */

function minimumTotal(triangle: number[][]): number {
  const firstRowValue = triangle[0][0];

  if(triangle.length === 1) return firstRowValue;

  const [sum, index] = triangle.reduce(([value, index], row) => {
    if(row.length === 1) return [row[0], 0];

    if(row[index] > row[index + 1]){
      return [value + row[index + 1], index + 1]
    } else {
      return [value + row[index], index]
    }
  }, [firstRowValue, 0])

  return sum;
};

/**
 * 위 solution, 통과하지 못한 case 23
 * INPUT = [[-1],[2,3],[1,-1,-3]]
 * OUTPUT = -1
 * 왜냐하면, 특정 row의 값이 제일 작지 않더라도, 최종 합이 제일 작을 수 있기 때문에.
 */


//  function minimumTotal(triangle: number[][]): number {
//   const firstRowValue = triangle[0][0];

//   if(triangle.length === 1) return firstRowValue;

//   const lastRowMin = Math.min(...triangle[triangle.length - 1]);
//   const lastRowMinIndex = triangle[triangle.length - 1].indexOf(lastRowMin);
  

//   const [sum, index] = triangle.reduceRight(([value, index], row) => {
//     if(row.length === 1) return [value, index];

//     if(row[index - 1] < row[index]){
//       return [row[index - 1], index - 1]
//     } else {
//       return [row[index], index]
//     }

//   }, [lastRowMin, lastRowMinIndex])

//   return sum;
// };