function reverseWords(str) {
	// Go for it
	const arr = str.split(' ');
	return arr.map((word) => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// 'ehT kciuq nworb xof spmuj revo eht yzal .god'

// Other Solution
// Solution #1
/*
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
*/

// Solution #2
/*
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
*/
