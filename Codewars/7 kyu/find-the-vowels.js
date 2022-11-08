function vowelIndices(word) {
	//your code here
	let arr = [];
	let a = word.split('');
	for (let i = 0; i < word.length; i++) {
		if (/[aeuoiy]/gi.test(a[i])) {
			arr.push(i + 1);
		}
	}
	return arr;
}
console.log(vowelIndices('super')); // [2,4]
