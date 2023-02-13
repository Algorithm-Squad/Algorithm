const solution = (numbers, target) => {
    const length = numbers.length;
    let count = 0;

    const dfs = (currentNumber, index) => {
        if(index === length) {
            if(target === currentNumber) {
                count++;
            }
            return;
        }

        dfs(currentNumber + numbers[index], index + 1);
        dfs(currentNumber - numbers[index], index + 1);
    }
    return count;
}