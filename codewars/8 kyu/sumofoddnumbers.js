// Given the triangle of consecutive odd

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)numbers:
// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
// 	return n * n * n;
// }

function rowSumOddNumbers(n) {
	const oddNumbers = [];

	for (let i = 0; i <= n; i++) {
		if (i % 2 !== 0) {
			oddNumbers.push(i);
		}
	}
}

console.log(rowSumOddNumbers(42));
// => 74088
