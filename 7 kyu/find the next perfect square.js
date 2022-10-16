function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise

	return sq > 0 && Math.sqrt(sq) % 1 === 0
		? Math.pow(Math.sqrt(sq) + 1, 2)
		: -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(155)); // -1

// Other Solution
// Solution #1
/*
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
*/

// Solution #2
/*
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  var root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}
*/
