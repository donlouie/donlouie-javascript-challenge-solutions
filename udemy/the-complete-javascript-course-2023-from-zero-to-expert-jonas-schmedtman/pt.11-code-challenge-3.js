// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4

// const calcAverageHumanAge = function (ages) {
// 	const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
// 	// console.log(humanAges);
// 	const adults = humanAges.filter((age) => age >= 18);
// 	// console.log(adults);
// 	const average = adults.reduce(
// 		(acc, age, i, arr) => acc + age / arr.length,
// 		0
// 	);
// 	console.log(average);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const calcAverageHumanAge = (ages) => {
// 	const output = ages
// 		.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
// 		.filter((age) => age >= 18)
// 		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// 	return output;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

const calcAverageHumanAge = (ages) =>
	ages
		.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
		.filter((age) => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);
