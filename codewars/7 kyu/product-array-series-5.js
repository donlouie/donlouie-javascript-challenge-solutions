function productArray(numbers) {
	const output = [];

	for (let i = 0; i < numbers.length; i++) {
		const arr = numbers;
		const product = arr.slice(i, 1 + i);
		console.log(product);
	}
}

console.log(productArray([13, 10, 5, 2, 9])); // [900,1170,2340,5850,1300]
