// function collatz(n) {
// 	//your code here
// 	let arr = [n];

// 	while (n > 1) {
// 		if (n % 2 === 0) {
// 			n = n / 2;
// 		} else {
// 			n = 3 * n + 1;
// 		}
// 		arr.push(n);
// 	}

// 	return arr.length;
// }

console.log(collatz(20));

// Other Solution
function collatz(n) {
	var l = 1;
	while (n > 1) {
		l++;
		n = n % 2 == 0 ? n / 2 : n * 3 + 1;
	}
	return l;
}
