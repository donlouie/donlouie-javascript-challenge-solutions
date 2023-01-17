/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
	'🌈 rainbow',
	'🦄 unicorn',
	'🍭 lollipops',
	'🦄 unicorn',
	'🍭 lollipops',
];

function removeDupesFromArray(arr) {
	let duplicateRemoved = [];
	for (let i = 0; i < arr.length; i++) {
		if (!duplicateRemoved.includes(arr[i])) {
			duplicateRemoved.push(arr[i]);
		}
	}

	return duplicateRemoved;
}

console.log(removeDupesFromArray(eggScrambleRecipe));

// Other Solutions
// function removeDupesFromArray(arr){
//     // create a new object to keep track of duplicates
//     // use filter to loop thorugh each item in the arr
//         // for each item in arr
//             // look up the item in the lookup table
//             // if the item does NOT exist in the lookup, add it and return true
//         // return false

//     const trackDupes = {};

//     return arr.filter(item => {
//         if(!trackDupes[item]){
//             trackDupes[item] = true;
//             return true;
//         }
//         return false;
//     });
// }

// function removeDupesFromArray(arr){
//   return [...new Set(arr)];
// }
