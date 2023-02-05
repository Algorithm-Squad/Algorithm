function solution(numbers) {
  for(let i = 0; i < numbers.length ; i++){
    let number = numbers[i];

    // 9일 때, 9999.1
    if (number < 10) numbers[i] = number * 1000 + number * 100 + number * 10 + number + 0.1;
    // 98일 때, 9898.2
    if (number > 9 && number < 100) numbers[i] = number * 100 + number + 0.2;
    // 987일 때, 9879.3
    if (number > 99 && number < 1000) numbers[i] = number * 10 + parseInt(number / 100) + 0.3;
  }
  numbers.sort();
  
  let answer = '';

  for(let i = numbers.length - 1 ; i >= 0 ; i--){
    let lastDigit = numbers[i] * 10 % 10;

    if(lastDigit === 1) answer = answer + parseInt(numbers[i] / 1000);
    if(lastDigit === 2) answer = answer + parseInt(numbers[i] / 100);
    if(lastDigit === 3) answer = answer + parseInt(numbers[i] / 10);
    if(lastDigit === 0) answer = answer + numbers[i];
  }
  return parseInt(answer) === 0 ? "0" : answer;
}

console.log(solution([6, 32, 10, 2, 33, 11]));
console.log(solution([3, 30, 343, 34, 31, 5, 9]));