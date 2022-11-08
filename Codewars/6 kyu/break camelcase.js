// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
const solution = (string) => {
	return string.replace(/([A-Z])/g, ' $1');
};

// console.log(solution('camelCasing')); // "camel Casing"
console.log(solution('badCallCall')); // "bad Call Call"

// Other Solution
// Solution 1
function solution(string) {
	string = string.split('').map(function (el) {
		if (el === el.toUpperCase()) {
			el = ' ' + el;
		}
		return el;
	});
	return string.join('');
}
