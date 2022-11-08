function multiple(x) {
	// Good Luck
	if (x % 3 == 0) s = 'Bang';
	if (x % 5 == 0) s = 'Boom';
	if (x % 3 == 0 && x % 5 == 0) s = 'BangBoom';
	if (x % 3 != 0 && x % 5 != 0) s = 'Miss';
	return s;
}

console.log(multiple(3)); // Bang
console.log(multiple(5)); // Boom
console.log(multiple(30)); // BangBoom

// Other Solution
// Solution #1
/*
function multiple(x) {
 return x % 15 == 0 ? "BangBoom" : x % 3 == 0 ? "Bang" : x % 5 == 0 ? "Boom" : "Miss"
}
*/

// Solution #2
/*
const multiple = x => {
  if (x % 5 === 0 && x % 3 === 0) return "BangBoom"
  if (x % 3 === 0) return "Bang"
  if (x % 5 === 0) return "Boom" 
  return 'Miss'
}
*/
