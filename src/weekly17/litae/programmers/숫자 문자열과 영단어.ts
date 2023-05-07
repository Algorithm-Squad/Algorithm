export function replaceNumbers(inputValue: string): string {
  const wordsToNumbers: Record<string, string> = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const [word, number] of Object.entries(wordsToNumbers)) {
    const regex = new RegExp(word, "g");
    inputValue = inputValue.replace(regex, number);
  }

  return inputValue;
}

export function solution(s: string): number {
  const inputValue = replaceNumbers(s);
  return Number(inputValue);
}
