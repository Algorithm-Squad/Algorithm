function solution(str1, str2) {
  const UnionSet = [];
  const IntersectionSet = [];

  const check_eng = /[A-Z]/;

  const set1 = multiple(str1.toUpperCase(), check_eng);
  const set2 = multiple(str2.toUpperCase(), check_eng);

  set1.forEach((item) => {
    if (set2.includes(item)) {
      UnionSet.push(item);
      IntersectionSet.push(item);

      set2.splice(set2.indexOf(item), 1);
    } else {
      UnionSet.push(item);
    }
  });

  set2.forEach((item) => {
    if (set1.includes(item)) {
      UnionSet.push(item);
    } else {
      UnionSet.push(item);
    }
  });

  return UnionSet.length === 0 && IntersectionSet.length === 0
    ? 65536
    : parseInt((IntersectionSet.length / UnionSet.length) * 65536);
}

const multiple = (content, check_eng) => {
  const multipleSet = [];

  for (let i = 0; i < content.length - 1; i++) {
    if (check_eng.test(content[i]) && check_eng.test(content[i + 1])) {
      const multiple = content[i] + content[i + 1];
      multipleSet.push(multiple);
    }
  }

  return multipleSet;
};

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
