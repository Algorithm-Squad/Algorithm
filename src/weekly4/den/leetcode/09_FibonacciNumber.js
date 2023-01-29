/*
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
F(2) = F(1) + F(0) = 1 + 0 = 0
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3

시간 복잡도: O(2^N)
*/

var fib = function(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fib(n - 1) + fib(n - 2);  
};

console.log(fib(3)) //  2
console.log(fib(4)) //  3