/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [1, 2, 3];

function sumArray(arr) {
	return arr.reduce((accumulator, current) => accumulator + current);
}

// function sumArray(arr) {
// 	let sum = 0;

// 	arr.forEach((el) => {
// 		sum += el;
// 	});

// 	return sum;
// }

console.log(sumArray(studentCount));
