/* 1/10(화) 21:23 시작, 23:00 종료 */
/*
[ 내 풀이 ]
- 여는 괄호를 만날 때 마다 닫는 괄호를 넣을 빈 배열을 생성한다.
  - input 배열의 요소들을 확인하기 위해 for문을 돈다.
    - 여는 괄호를 만날 때마다 같은 종류의 닫는 괄호를 빈 배열에 넣는다.
    - 만약 닫는 괄호를 만나면 닫는 괄호를 모아놓은 배열에서 pop 한 것과 같은지 판별한다. 같지 않으면 false.
      -> 여는 괄호와 동일한 종류의 닫는 괄호가 순서에 맞게 닫혔는지 확인하기 위함이다. 
    - 만약 닫는 괄호 배열의 길이가 0이라면, 여는 괄호가 없는 상태로 닫는 괄호가 나왔다는 의미기 때문에, false
  - for문 다 돌고 빠져나왔다면, input 문자열에 문제가 없었다는 의미기 때문에, true 리턴한다.

- 시간 복잡도: O(N)
*/

var isValid = function(s) {
	const opositeBrackets = [];
	
	for(let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
      opositeBrackets.push(')');
    } else if (s[i] === '{') {
			opositeBrackets.push('}');
    } else if (s[i] === '[') {
			opositeBrackets.push(']');
    } else if (opositeBrackets.length === 0 || opositeBrackets.pop() !== s[i]) {
			return false;
    }
	}
	
	return opositeBrackets.length === 0;
};

console.log(isValid("{[]}"));
console.log(isValid("[{(}])"));