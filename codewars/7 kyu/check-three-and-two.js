/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

const checkThreeAndTwo = (array) => {
	const letterCounts = {};

	for (const letter of array) {
		if (letterCounts[letter]) {
			letterCounts[letter]++;
		} else {
			letterCounts[letter] = 1;
		}
	}

	return Object.values(letterCounts).includes(3) && Object.values(letterCounts).includes(2);
};

console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']));
