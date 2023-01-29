function solution(a, b, n) {
    var numberOfNewCoke = 0;
    let criteria = a;
    let rate = b;
    let numberOfBottle = n;

    while(numberOfBottle >= criteria) {
        answer += Math.floor(numberOfBottle / criteria) * rate;
        numberOfBottle = (Math.floor(numberOfBottle / criteria) * rate) + (numberOfBottle % criteria);
    }
    
    return numberOfNewCoke;
}