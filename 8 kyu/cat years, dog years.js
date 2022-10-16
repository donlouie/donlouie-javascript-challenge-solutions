const humanYearsCatYearsDogYears = function (humanYears) {
	// Your code here!
	if (humanYears === 1) {
		return [1, 15, 15];
	}
	if (humanYears === 2) {
		return [2, 24, 24];
	}

	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

console.log(humanYearsCatYearsDogYears(4));

// Other Solution
// Solution #1
/*
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}
*/

// Solution #2
/*
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];
*/
