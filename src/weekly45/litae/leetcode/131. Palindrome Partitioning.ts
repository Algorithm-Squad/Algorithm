const isPalindrome = (s: string): boolean => {
  let isValid = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

function partition(s: string): string[][] {
  let result: string[][] = [];
  let current: string[] = [];

  const dfs = (i: number) => {
    if (i >= s.length) {
      result.push([...current]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      const stringToCheck = s.substring(i, j + 1);
      if (isPalindrome(stringToCheck)) {
        current.push(stringToCheck);
        dfs(j + 1);
        current.pop();
      }
    }
    i += 1;
  };

  dfs(0);
  return result;
}
