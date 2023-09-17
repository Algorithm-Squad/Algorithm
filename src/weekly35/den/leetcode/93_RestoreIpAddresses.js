/**
 * @param {string} s
 * @return {string[]}
 */

const restoreIpAddresses = function (s) {
  const res = [];

  const dfs = (arr = [], str = s) => {
    if (arr.length === 3) {
      if (isValid(str)) res.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      const subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      dfs([...arr, subStr], str.slice(i));
    }
  };

  dfs();

  return res.map((x) => x.join("."));
};

const isValid = (str) => {
  if (!str.length || Number(str) > 255) return false;
  if (str.length > 1 && str[0] === "0") return false;
  return true;
};

console.log(restoreIpAddresses("25525511135")); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("0000")); // ["0.0.0.0"]
console.log(restoreIpAddresses("101023")); // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
