function splitInParts(myString, partLength) {
	let remaining = myString;
	let result = '';

	// do it only if the remaining string is longer than the parts
	while (remaining.length >= partLength) {
		// add the next part and a space to the result
		result += remaining.slice(0, partLength) + ' ';

		// remove the added part from the remaining string
		remaining = remaining.slice(partLength);
	}

	// add the last part that was smaller than the part length
	result += remaining;

	// remove a trailing space
	return result.trim();
}

console.log(splitInParts('supercalifragilisticexpialidocious', 3));

// Other Solution
// Solution #1
/*
var splitInParts = function(s, partLength){
  var parts = [];
  var array = s.split('');
  while(array.length) {
    parts.push(array.splice(0,partLength).join(''));
  }
  return parts.join(' ');
}
*/

// Solution #2
/*
const splitInParts = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');
*/
