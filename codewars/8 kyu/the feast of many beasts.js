function feast(beast, dish) {
	//your function here
	if (
		beast[0] === dish[0] &&
		beast[beast.length - 1] === dish[dish.length - 1]
	) {
		return true;
	} else {
		return false;
	}
}

console.log(feast('great blue heron', 'garlic naan'));
console.log(feast('chickadee', 'chocolate cake'));
console.log(feast('brown bear', 'bear claw'));

// Other Solution
// Solution #1
/*
 return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
*/
