function restoreIpAddresses(s: string): string[] {
  let result: string[] = [];
  function getValidIps(s, startIdx, dotCount, temp) {
    if (dotCount == 4 || s.length == startIdx) {
      if (dotCount == 4 && s.length == startIdx) {
        result.push(temp.slice(0, -1));
      }
      return;
    }
    getValidIps(
      s,
      startIdx + 1,
      dotCount + 1,
      temp + s.slice(startIdx, startIdx + 1) + "."
    );
    for (let k = 2; k < 4; k++) {
      if (isValid(s.slice(startIdx, startIdx + k))) {
        getValidIps(
          s,
          startIdx + k,
          dotCount + 1,
          temp + s.slice(startIdx, startIdx + k) + "."
        );
      }
    }
  }
  getValidIps(s, 0, 0, "");
  return result;
}

function isValid(str: string) {
  if (str[0] == "0") {
    return false;
  }

  return parseInt(str) <= 255;
}
