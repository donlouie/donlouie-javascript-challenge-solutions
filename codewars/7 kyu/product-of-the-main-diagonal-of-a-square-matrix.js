/*
Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

  [[1, 0], [0, 1]] should return 1
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45
*/

const mainDiagonalProduct = (mat) => {
	let product = 1;
	for (let i = 0; i < mat.length; i++) {
		product *= mat[i][i];
	}
	return product;
};

console.log(
	mainDiagonalProduct([
		[1, 0],
		[0, 1],
	])
);
console.log(
	mainDiagonalProduct([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
