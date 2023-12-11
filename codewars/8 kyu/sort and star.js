function twoSort(s) {
	const sort = s.sort();
	const str = sort[0].slice(0, -1);
	let nstr = '';
	for (let i = 0; i < str.length; i++) {
		nstr = nstr + `${sort[0].charAt(i)}***`;
	}
	return nstr + s[0].slice(-1);
}

console.log(
	twoSort([
		'bitcoin',
		'take',
		'over',
		'the',
		'world',
		'maybe',
		'who',
		'knows',
		'perhaps',
	])
); // 'b***i***t***c***o***i***n'

// Other Solution
// Solution #1
/*
function twoSort(s) {
  const arr = s.reduce((w, i) => w < i ? w : i)
  return arr.split("").join("***")
}
*/

// Solution #2
/*
function twoSort(s) {
  var last = s.sort()[0];
  var a = last[0];
  for(var i = 1; i < last.length; i++) {
    a += "***" + last[i];
  }
  return a;
}
*/
