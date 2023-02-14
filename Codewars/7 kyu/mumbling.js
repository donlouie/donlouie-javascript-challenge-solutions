const accum = (s) => {
	const letters = s.toLowerCase().split('');
	let count = 1;
	let str = '';

	for (let i = 0; i < letters.length; i++) {
		for (let j = 0; j < count; j++) {
			if (j === 0) {
				str += `-${letters[i].toUpperCase()}`;
			} else {
				str += letters[i];
			}
		}
		count++;
	}

	return str.slice(1);
};

console.log(accum('ZpglnRxqenU'));
// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// Other solutions
// Solution #1
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// Solution #2
// function accum(str) {
// 	var letters = str.split('');
//   var result = [];
//   for (var i = 0; i < letters.length; i++) {
//     result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
//   }
//   return result.join('-');
// }
