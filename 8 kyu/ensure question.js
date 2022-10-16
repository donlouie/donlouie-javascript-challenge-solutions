//? Insert ? at end of string
function ensureQuestion(s) {
	// Code here
	return s.slice(-1) != '?' ? s + '?' : s;
}

console.log(ensureQuestion(''));
console.log(ensureQuestion('Yes'));
console.log(ensureQuestion('No?'));

// Other Solution
// Solution #1
/*
function ensureQuestion(s) {
  return `${s}?`.replace(/\?+$/g, "?")
}
*/
