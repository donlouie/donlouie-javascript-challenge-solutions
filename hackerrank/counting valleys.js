function countingValleys(steps, path) {
	let valleys = 0;
	let altitude = 0;

	for (let i = 0; i < steps; i++) {
		if (path[i] === 'U') {
			if (altitude === -1) {
				valleys++;
			}
			altitude++;
		} else if (path[i] === 'D') {
			altitude--;
		}
	}

	return valleys;
}

const steps = 8;
const path = 'UDDDUDUU';
console.log(countingValleys(steps, path));
