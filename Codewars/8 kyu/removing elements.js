/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr) {
	//your code here
	for (let i = -1; i <= arr.length; i += 2) {
		delete arr[i];
	}
	arr = arr.filter((item) => item);
	return arr;
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep'])); // keep, keep, keep
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }])); // goodbye
console.log(removeEveryOther(['Hello', , 'Hello Again'])); // hello, hello again

// Other Solution
// Solution #1
/*
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
*/

// Solution #2
/*
function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}
*/
