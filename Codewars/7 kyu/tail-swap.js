/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

const tailSwap = (arr) => {
	const a = arr[0].split(':');
	const b = arr[1].split(':');
	const c = [a[0] + ':' + b[1], b[0] + ':' + a[1]];
	return c;
};

console.log(tailSwap(['a:12345', '777:xyz']));
//-->  ["a:xyz", "777:12345"]

//Other Solutions
//Solution 1
/*
const tailSwap = ([a, b]) => {
    const [aHead, aTail] = a.split(':');
    const [bHead, bTail] = b.split(':');
    return [`${aHead}:${bTail}`, `${bHead}:${aTail}`];
};
*/

//Solution 2
/*
const tailSwap = (arr) => {
    const [heads, tails] = [0, 1].map(i => arr.map(str => str.split(':')[i]));
    return [`${heads[0]}:${tails[1]}`, `${heads[1]}:${tails[0]}`];
};
*/
