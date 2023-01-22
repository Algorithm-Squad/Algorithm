const fs = require("fs");
const input = fs.readFileSync('./input.txt', 'utf-8').split("\n").map((element) => Number(element));

function findDwarfs (input){
  const TARGET = 100;
  
  input.sort((a, b) => a - b);
  const total = input.reduce((pv, cv) => pv + cv);    // 140
  const GAP = total - TARGET;                         // 40

  for(let i = 0; i < input.length; i++){
    const dwarf1 = input[i];
    for(let j = 0; j < input.length; j++){
      const dwarf2 = input[j];
      if(dwarf1 != dwarf2 && dwarf1 + dwarf2 === GAP){
        input.splice(j, 1);
        input.splice(i, 1);
      }
    }
  }

  return input.join("\n");
}

console.log(findDwarfs(input));