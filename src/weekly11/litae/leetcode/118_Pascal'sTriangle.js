var generate = function(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        result.push(Array(i + 1));
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            }
            else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }
    return result; 
};