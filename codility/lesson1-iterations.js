function solution(N) {
	const binary = N.toString(2);
	let counter = 0;
	let gap = 0;

	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === '0') {
			counter += 1;
		} else {
			if (counter > gap) {
				gap = counter;
			}
			counter = 0;
		}
	}

	return gap;
}

console.log(solution(1041));
