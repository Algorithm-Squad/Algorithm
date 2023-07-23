function checkInclusion(s1: string, s2: string): boolean {
  const word = s1;
  const reversedWord = s1.split("").reverse().join("").toString();

  return s2.includes(word) || s2.includes(reversedWord) ? true : false;
}
