/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/
// * Example
// ! solve("codewarriors"); => 2
// ! solve("suoidea"); => 3

function solve(s) {
	const x = s
		.replace(/[^aeiou]/gi, ' ') // Change all non-vowel to white spaces
		.split(' ') // split
		.sort(function (a, b) {
			return b.length - a.length; // Sort according to length
		})[0].length;
	return x;
}

console.log(solve('codewarriors')); // 2
console.log(solve('suoidea')); // 3

// Other Solution
// Solution #1
/*
const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
*/

// Solution #2
/*
function solve(s){
 return Math.max(...s.split(/[^aeiou]+/).map(x=>x.length));
}
*/
