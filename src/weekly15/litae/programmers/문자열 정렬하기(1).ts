// @param my_string string
// @returns number[]

export function solution(my_string: string): number[] {
  const value: string = my_string;
  return value
    .split("")
    .filter((string) => Number(string) / 1 === Number(string))
    .map((number) => Number(number))
    .sort((a, b) => a - b);
}
