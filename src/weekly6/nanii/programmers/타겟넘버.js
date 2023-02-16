/**
 * 타겟넘버 Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * 문제해석 : 재귀의 매개변수로 배열내 인덱스와 그 인덱스의 값을 제외한 sum(배열의 합)을 전달하여
 * 계속해서 더해가다 마지막 인덱스의 값까지 다 더하거나 뺐을 때의 sum이 타켓과 같을 때 카운트를 증가시킵니다.
 *
 *
 * @param {*} numbers
 * @param {*} target
 * @returns
 */
function solution(numbers, target) {
  let count = 0;

  const recursiveArray = (index, sum) => {
    if(index === numbers.length) {
      (sum === target)? count ++ : null;
    } else {
      recursiveArray(index + 1, sum - numbers[index]);
      recursiveArray(index + 1, sum + numbers[index]);
    }
  }

  recursiveArray(0,0); //초기값 0번인덱스에서 sum = 0 인상태
  return count;
}

const numbers	= [1, 1, 1, 1, 1];
const target = 3; //5
// const numbers	= [4, 1, 2, 1];
// const target = 4; //2
console.log(solution(numbers, target));