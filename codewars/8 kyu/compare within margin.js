const closeCompare = (a, b, margin = 0) => {
	if (Math.abs(a - b) <= margin) return 0;
	if (a < b) return -1;
	return 1;
};

console.log(closeCompare(3853, 9438, 8608)); // 0
console.log(closeCompare(-3210, -778, 8300)); //0
console.log(closeCompare(4022, -6273, 3317)); //1
console.log(closeCompare(-4983, -1937, 6509)); //0
