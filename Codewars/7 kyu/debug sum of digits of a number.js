function getSumOfDigits(integer) {
	let sum = null;
	let digits = Math.floor(integer).toString();

	for (let i = 0; i < digits.length; i++) {
		sum += Number(digits[i]);
	}
	return sum;
}

console.log(getSumOfDigits(123));
// 6

// Other Solution
// Solution 1
// function getSumOfDigits(integer) {
//   return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
// }
