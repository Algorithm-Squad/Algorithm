/*
  - 내부에 영어는 소문자로 구성되어 전달되므로, case에 대한 처리 필요 없음
  - 배열의 길이는 1부터 1만, 각 원소의 길이는 0부터 100 사이로 1개의 원소만 있거나, 원소의 길이가 0인 빈 문자열이 원소로 들어 올 수 있음
  - 효율성에 대한 고려는 없고, 문자열로 그룹 조합을 만들어야 하므로, object나 map, array를 사용할 수 있으며 간단한 object 타입을 선택
  - 기본적으로 생각한 것은 내부에 있는 구성 요소가 모두 같은 것을 묶어서 일치하는 것을 담아 내는 방식으로 접근
  
  1. 내부의 배열에 있는 각 문자열을 서로 같은 순서가 될 수 있도록 사전순 정렬을 해서 같도록 만들어 정렬된 배열로 만든다.
  2. 현재 객체에 있는 키 값이라면, 해당 키 값에 일치하는 원본 문자열을 push해서 넣는다.
  3. 일치하지 않으면, 정렬한 키워드를 키로 해서 해당 문자열을 배열 형태로 해서 원본 문자열을 할당한다. 
    -> 그래야 해당 키 값을 찾았을 때, push 메서드 사용 가능
  4. 순회가 끝나면 Object 변수의 value를 배열로 만드는 Object.values 함수를 호출해서 인자로 객체를 전달해 값을 열거한다.
*/

interface ObjectType {
  [key: string]: Array<string>;
}

function groupAnagrams(strs: string[]): string[][] {
  const obj: ObjectType = {};

  for (const s of strs) {
    const sorted = s.split('').sort().join('');
    obj[sorted] ? obj[sorted].push(s) : (obj[sorted] = [s]);
  }

  return Object.values(obj);
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); //[["bat"],["nat","tan"],["ate","eat","tea"]]
