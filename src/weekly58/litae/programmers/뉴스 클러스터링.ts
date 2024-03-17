function solution(str1: string, str2: string) {
  const arr1 = splitIntoPairs(str1.toLowerCase());
  const arr2 = splitIntoPairs(str2.toLowerCase());

  if (!arr1.length || !arr2.length) return 65536;

  const union = makeUnionArray(arr1, arr2);
  const intersection = makeIntersectionArray(arr1, arr2);

  if (intersection.length === 0) return 65536;

  return Math.floor((intersection.length / union.length) * 65536);
}

function splitIntoPairs(string) {
  const array: string[] = [];

  for (let i = 0; i < string.length - 1; i++) {
    let temp = `${string[i]}${string[i + 1]}`;
    if (isAllAlphabetic(temp)) {
      array.push(temp);
    }
  }

  return array;
}

function isAllAlphabetic(string) {
  const regexp = /[a-zA-Z]{2}/;
  return regexp.test(string);
}

function makeIntersectionArray(arr1, arr2) {
  const tempArr2 = arr2.slice();
  const intersection: string[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const index = tempArr2.indexOf(arr1[i]);
    if (index !== -1) {
      intersection.push(arr1[i]);
      tempArr2.splice(index, 1);
    }
  }

  return intersection;
}

function makeUnionArray(arr1, arr2) {
  const tempArr2 = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    const index = tempArr2.indexOf(arr1[i]);
    if (index !== -1) {
      tempArr2.splice(index, 1);
    }
  }

  return [...arr1, ...tempArr2];
}
