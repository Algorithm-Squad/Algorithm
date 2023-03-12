/**
 * 문제 출처: https://www.acmicpc.net/problem/2217
 * 
 * 시간복잡도: 
 * 
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, ...ropes] = fs.readFileSync(filePath).toString().split('\n');

ropes.sort((a, b) => b - a);

const answer = ropes.map((rope, index) => rope * (index + 1));
console.log(Math.max(...answer));
