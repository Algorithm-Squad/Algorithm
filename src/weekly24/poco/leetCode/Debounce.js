// https://leetcode.com/problems/debounce/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let timeoutId;

  return function (...args) {
    console.log(timeoutId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), t);
  };
};

// 매개변수
// fn : 실행할 함수
// t : 지연시간

// 출력
// 지연된 함수

// 문제 해결 및 설명
// 실행할 함수 fn과 지연시간 t가 주어지고, 지연된 함수를 반환하는 문제
// 지연된 함수는 t시간이 지나기 전에 호출되면 호출이 취소되고, t시간이 지난 후에 호출된다.
// 지연된 함수는 매개변수를 받아서 실행할 함수에 전달한다.

// 즉, 함수가 호출이되고, t시간이 지나기 전에 다시 호출이 되면, 이전에 호출된 함수는 취소되고, t시간이 지난 후에 호출
// 이를 구현하기 위해서는 setTimeout과 clearTimeout을 사용했음

// 그럼 매개변수에 fn이 어디에서 실행되는거죠?
/// ...args는 무엇을 의미하는 거죠?
