function getCount(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let vowelsCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelsCount++;
		}
	}

	return vowelsCount;
}

console.log(getCount('abracadabra')); // 5

// Other Solution
// Solution #1
/*
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
*/