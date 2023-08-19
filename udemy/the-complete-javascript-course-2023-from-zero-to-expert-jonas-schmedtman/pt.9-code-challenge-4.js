'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
	const text = document.querySelector('textarea').value;
	const rows = text.split('\n');

	for (const [i, row] of rows.entries()) {
		const [first, second] = row.toLowerCase().trim().split('_');

		const output = `${first}${second.replace(
			second[0],
			second[0].toUpperCase()
		)}`;
		console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
	}
});

// function toCamelCase() {
// 	const userInput = document.getElementById('textarea').value;
// 	const userInputArray = userInput.toLowerCase().split(/\n/);
// 	let newString = [];

// 	userInputArray.forEach(function (el) {
// 		let word = el.split('_');
// 		newString.push(
// 			word[0] +
// 				word[1].charAt(0).toUpperCase() +
// 				el.split('_')[1].slice(1)
// 		);
// 	});

// 	for (let i = 0; i < newString.length; i++) {
// 		console.log(newString[i].padEnd(20, '+') + '✅'.repeat(i + 1));
// 	}
// }
