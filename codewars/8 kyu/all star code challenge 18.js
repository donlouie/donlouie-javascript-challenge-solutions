function strCount(str, letter) {
	let n = 0;
	let letters = str.split('');
}

// function strCount(str, letter) {
// 	//code here
// 	let n = 0;
// 	let letters = str.split('');

// 	for (let i = 0; i < letters.length; i++) {
// 		if (letters[i] == letter) n += 1;
// 	}

// 	return n;
// }

console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2

// Other Solution
// Solution #1
/*
function strCount(str, letter){  
  return str.split(letter).length-1
}
*/

// Solution #2
/*
function strCount(str, letter){  
  return str.split('').filter(c => c == letter).length;
}
*/
