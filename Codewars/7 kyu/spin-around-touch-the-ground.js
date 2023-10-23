/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".
*/

function spinAround(turns) {
	let totalRotation = 0;

	for (let turn of turns) {
		if (turn === 'left') {
			totalRotation -= 90;
		} else {
			totalRotation += 90;
		}
	}

	const totalDegrees = Math.abs(totalRotation);
	const totalTurns = Math.floor(totalDegrees / 360);

	return totalTurns;
}

// console.log(spinAround(['left', 'right', 'left', 'right', 'right'])); // 0
console.log(spinAround(['left', 'left', 'right', 'right', 'left'])); // 0
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])); // 2

// Other Solution
// Solution 1
/*
function spinAround(turns) {
  let t = 0
  for(let x of turns){
    t += x == "left" ? -1 : 1
  }
  return Math.floor(Math.abs(t) / 4)
}
*/
