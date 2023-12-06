const foo = (string) => {
	const z = string.match(/z/g).length;
	const o = string.match(/o/g).length;

	return z * 2 === o ? 'Yes' : 'No';
};

console.log(foo('zzzoooooo')); // yes
