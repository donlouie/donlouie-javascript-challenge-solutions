// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiw
function partlist(arr) {
	// your code
	let a = arr.slice(0, 1);
	let b = arr.slice(1);
	let c = [];
	c.push([a.join(' '), b.join(' ')]);
	for (let i = 1; i < arr.length - 1; i++) {
		a.push(arr[i]);
		b.shift();

		c.push([a.join(' '), b.join(' ')]);
	}

	return c;
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']));
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

// Other Solution
// Solution #1
/*
function partlist(arr) {
    return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}
*/

// Solution #2
/*
function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
}
*/
