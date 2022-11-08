	function solution(a, b) {
		// your code here
		return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
	}

console.log(solution('Soon', 'Me')); // 'MeSoonMe'
