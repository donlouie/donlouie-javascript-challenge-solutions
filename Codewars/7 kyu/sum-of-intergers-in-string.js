// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s) {
	let number = '';
	let sum = 0;

	for (const char of s) {
		if (!isNaN(char)) {
			number += char;
		} else {
			if (number) {
				sum += +number;
				number = '';
			}
		}
	}

	return sum + +number;
}

console.log(
	sumOfIntegersInString(
		'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
	)
); // 3635

// Other solution
// Solution 1
/*
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}
*/
