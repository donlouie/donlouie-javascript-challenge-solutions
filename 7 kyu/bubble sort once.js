function bubblesortOnce(a) {
	// TODO
	for (let i = 0; i < a.length; i++) {
		if (a[i] > a[i + 1]) {
			let temp = a[i];
			a[i] = a[i + 1];
			a[i + 1] = temp;
		}
	}
	return a;
}

console.log(bubblesortOnce([5, 3, 7, 1, 10, 4, 6, 8, 9, 2]));
// [2, 3, 5, 1, 7, 4, 6, 8, 9, 10 ]
