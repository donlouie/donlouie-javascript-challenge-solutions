/*
You have an array of integers. You need to calculate the difference between 1st biggest number and 2nd biggest number of an array.

In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function returns 5, the result of 10 - 5.

You can assume that the input array must have 2 or more elements.

The input array has the sort() method disabled, so you will have to solve it in another way.
*/
//* Example
//! diffBig2([10, 5, 2]); => 5 - 10 => 5

function diffBig2(arr) {
	let x = Math.max.apply(null, arr); // get the max of the array
	arr.splice(arr.indexOf(x), 1); // remove max from the array
	let y = Math.max.apply(null, arr); // get the 2nd max

	return x - y;
}

console.log(diffBig2([10, 5, 2]));

// Other Solution
// Solution #1
/*
const diffBig2 = arr => {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  return max - Math.max(...arr);
}
*/

// Solution #2
/*
function diffBig2(arr) {
  let [a,b] = arr.reduce( ([a,b],v) => v>a? [v,a] : [a, Math.max(b,v)], [-1/0,-1/0] );
  return a-b
}
*/

// Solution #3
/*
function diffBig2(a) {
  return a=a.sort(), a[0]-a[1]||0
}

Array.prototype.sort = function () {
    if (this.length < 2) { return this; }
 
    var pivot = this[Math.round(this.length / 2)];
 
    return this.filter(x => x >  pivot)
               .sort()
               .concat(this.filter(x => x == pivot))
               .concat(this.filter(x => x <  pivot).sort());
};
*/
