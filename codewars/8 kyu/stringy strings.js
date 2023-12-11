/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

/*

function stringy(size) {
	// your code here
	let string = '';
	for (let i = 0; string.length < size; i += 3) {
		string += '10';
	}
	return size % 2 != 0 ? string.slice(0, -1) : string;
}
*/

const stringy = (x) => ''.padStart(x, '10');

console.log(stringy(4)); // 1010
console.log(stringy(6)); // 101010
console.log(stringy(7)); // 1010101

// Other Solution
// Solution #1
/*
function stringy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}
*/
// Solution #2
/*
const stringy = x => ''.padStart(x,'10');
*/
