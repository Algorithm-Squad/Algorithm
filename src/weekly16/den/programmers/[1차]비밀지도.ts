/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/17681
 * 
 * 시작 시간: 22:30
 * 종료 시간: 23:30
 */

function solution(n: number, map1: number[], map2: number[]): string[] {
  const binaryMap1: string[][] = convertMapToBinary(n, map1);
  const binaryMap2: string[][] = convertMapToBinary(n, map2);
  
  const mergedMap: string[] = binaryMap1.map((binaryRow: string[], index: number) => {
    const binaryRow2: string[] = binaryMap2[index];
    const mergedRow: string[] = binaryRow.map((binary: string, innerIndex: number) => {
      return binary === "#" || binaryRow2[innerIndex] === "#" ? "#" : " ";
      });
    return mergedRow.join("");
  });
  
  return mergedMap;
}
  
function convertMapToBinary(size: number, map: number[]): string[][] {
  return map.map(element => {
    const binaryRow: string[] = element.toString(2).split("");
    if(binaryRow.length < size) binaryRow.unshift(...Array(size - binaryRow.length).fill("0"));
    return binaryRow.map((binary: string) => binary === "0" ? " " : "#")
  })
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28] )) // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]