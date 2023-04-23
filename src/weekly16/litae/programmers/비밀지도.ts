export function solution(n: number, arr1: number[], arr2: number[]): string[] {
  const changeToBinary = (element: number, num: number): string[] => {
    const binary = element.toString(2).padStart(num, "0").split("");
    return binary;
  };

  let binaryOfArr1: string[][] = arr1.map((element) =>
    changeToBinary(element, n)
  );
  let binaryOfArr2: string[][] = arr2.map((element) =>
    changeToBinary(element, n)
  );

  let result: string[] = new Array(n).fill("");
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
      if (binaryOfArr1[i][j] === "1" || binaryOfArr2[i][j] === "1") {
        result[i] += "#";
      } else {
        result[i] += " ";
      }
    }
  }
  return result;
}
