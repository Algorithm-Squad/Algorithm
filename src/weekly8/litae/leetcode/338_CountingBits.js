var countBits = function(n) {
    if(n === 0) return [0];
    let result = [];

    for(let i = 0; i < n + 1; i++) {
        let binaryNumber = i.toString(2);
        let numberOf1 = binaryNumber.split('').filter(number => number === '1').length;
        result.push(numberOf1);
    }
    
    return result;
};