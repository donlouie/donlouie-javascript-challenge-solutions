function loopArr(arr, direction, steps) {
	let n = [];

	for (let i = 1; i <= steps; i++) {
		if (direction === 'left') {
			// left
			n.push(arr.shift());
			arr.push(n[i - 1]);
		} else if (direction === 'right') {
			// right
			n.push(arr.pop());
			arr.unshift(n[i - 1]);
		}
	}

	return arr;
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2));
[87, 45, 8, 8, 1, 5];

console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2));
// [8, 8, 1, 5, 87, 45]

// Other Solution
// Solution #1
/*
function loopArr(arr, direction, steps) {
  const i = direction == 'left' ? steps : -steps;
  return arr.slice(i).concat(arr.slice(0, i));
}
*/

// Solution #2
/*
function loopArr(arr, direction, steps) {

  for (let i = 0; i < steps; i++) {
    if (direction === 'right'){
      arr.unshift(arr.pop());
    };
    if (direction === 'left') {
       arr.push(arr.shift());
    };
  }
    return arr;
}
*/
