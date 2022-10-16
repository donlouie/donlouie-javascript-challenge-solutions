function checkAlive(health) {
	if (health > 0) {
		return true;
	} else {
		return false;
	}
}

console.log(checkAlive(5)); // true

// Other Solution
// Solution #1
/*
function checkAlive(health) {
  return health > 0;
}
*/
