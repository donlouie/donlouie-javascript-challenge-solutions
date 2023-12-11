/*
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!
*/

function solve(s) {
	s = s.toLowerCase();
	let uniqueLetters = new Set();
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (/[a-z]/.test(char)) {
			if (uniqueLetters.has(char)) {
				return false;
			} else {
				uniqueLetters.add(char);
			}
		}
	}
	const sortedLetters = [...uniqueLetters].sort();
	for (let i = 1; i < sortedLetters.length; i++) {
		if (sortedLetters[i].charCodeAt(0) !== sortedLetters[i - 1].charCodeAt(0) + 1) {
			return false;
		}
	}
	return true;
}

console.log(solve('dabc')); // => true
console.log(solve('abbc')); // => false

// Other Solution
/*
function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}
*/
