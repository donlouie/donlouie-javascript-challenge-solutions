function SmallestIntegerFinder(arr) {
	return arr.sort((a, b) => a - b)[0];
}

console.log(SmallestIntegerFinder([78, 56, 232, 12, 8]));
