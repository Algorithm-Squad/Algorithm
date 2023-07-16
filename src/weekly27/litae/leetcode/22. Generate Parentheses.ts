function generateParenthesis(n: number): string[] {
  const finalResult: string[] = [];

  function recurse(open: number, close: number, result: string) {
    if (open === 0 && close === 0) {
      finalResult.push(result);
      return;
    }

    if (open < close) {
      recurse(open, close - 1, result + ")");
    }

    if (open > 0) {
      recurse(open - 1, close, result + "(");
    }
  }

  recurse(n, n, "");

  return finalResult;
}
