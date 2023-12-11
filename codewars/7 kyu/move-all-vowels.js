/*
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

const moveVowel = (input) =>
	input
		.split('')
		.filter((c) => !/[aeiouAEIOU]/.test(c))
		.concat(input.split('').filter((c) => /[aeiouAEIOU]/.test(c)))
		.join('');

console.log(moveVowel('apple')); // => "pplae"

// Other Solution
// Solution 1
/*
const moveVowel = input =>
  input.replace(/[aeiou]/g, ``) + input.replace(/[^aeiou]/g, ``);
*/
