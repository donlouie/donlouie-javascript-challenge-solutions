/*? Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list. */

/*
 * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
 * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
 * [42, 54, 65, 87, 0]             -> min = 0, max = 87
 * [5]                             -> min = 5, max = 5
 */

let max = function (list) {
	return list.reduce((a, b) => {
		return Math.max(a, b);
	});
};
console.log(max([-52, 56, 30, 29, -54, 0, -110])); // 56

let min = function (list) {
	return list.reduce((a, b) => {
		return Math.min(a, b);
	});
};
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110

//* Other Solution
//* Solution 1
/*
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
*/

//* Solution 2
/*
var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}
*/
