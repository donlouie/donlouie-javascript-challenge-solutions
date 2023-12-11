function updateLight(current) {
	//your code here!
	if (current == 'green') current = 'yellow';
	if (current == 'yellow') curent = 'red';
	if (current == 'red') current = 'green';

	return current;
}
console.log(updateLight('green')); // yellow
console.log(updateLight('yellow')); // red
console.log(updateLight('red')); // green

// Other Solution
// Solution #1
/*
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}
*/

// Solution #2
/*
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]
*/
