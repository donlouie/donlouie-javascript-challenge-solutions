/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

const sumNoDuplicates = (numList) => {
	const duplicates = numList.filter((item, index) => numList.indexOf(item) !== index);
	let sum = 0;
	for (let i = 0; i < numList.length; i++) {
		if (!duplicates.includes(numList[i])) {
			sum = sum += numList[i];
		}
	}

	return sum;
};

console.log(sumNoDuplicates([3, 4, 3, 6, 6, 5])); // => 9
