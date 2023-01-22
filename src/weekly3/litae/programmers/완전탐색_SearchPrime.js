// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let count = 0;
    const singleNumber = numbers.split('');
    const dupresult = [];

    // 소수인지 확인하는 함수, 소수일 경우 count가 +1이 된다
    const isPrime = (num) => {
        if(num < 2) {
            return
        }
        for(let b = 2; b < num; b++) {
            if(num % b === 0) {
                return
            }
        }
        count += 1;
    }

    // 순열을 만들어 가능한 모든 경우의 수를 확인한다
    const mergeNumbers = (array, fixedNumber) => {
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                const temp = [...array];
                temp.splice(i, 1);
                mergeNumbers(temp, fixedNumber + array[i]);
            }
        }
        
        if (fixedNumber.length > 0) {
            dupresult.push(parseInt(fixedNumber));
        }
    };

    mergeNumbers(singleNumber, "");
    const set = new Set(dupresult);
    const result = Array.from(set);
    for(let a = 0; a < result.length; a++) {
        isPrime(result[a])
    }

    return count;
};