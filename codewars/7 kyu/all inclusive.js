function containAllRots(str, arr) {
	for (var i = 0; i < str.length; i++) {
		if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
			return false;
		}
	}
	return true;
}

// console.log(containAllRots(''), []);
console.log(
	containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
);
console.log(
	containAllRots('XjYABhR', [
		'TzYxlgfnhf',
		'yqVAuoLjMLy',
		'BhRXjYA',
		'YABhRXj',
		'hRXjYAB',
		'jYABhRX',
		'XjYABhR',
		'ABhRXjY',
	])
);

// Other Solution
// Solution #1
/*
function containAllRots(strng, arr) {
    function rotate(s) {
       return s.substring(1) + s[0];  
    }
    for(var i = 0, l = strng.length; i < l; ++i) {
        if (arr.indexOf(strng) === -1) {
            return false;
        }
        strng = rotate(strng);
    }
    return true;
}
*/

// Solution #2
/*
function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}
*/

// Solution #3
/*
containAllRots = (s, a) => Array.from(s).map((e, i) => s.slice(i) + s.slice(0, i)).every(e => a.includes(e));
*/
