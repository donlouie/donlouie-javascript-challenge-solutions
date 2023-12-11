function toFreud(string) {
	return !string
		? ''
		: string
				.split(' ')
				.map((word) => 'sex')
				.join(' ');
}

console.log(toFreud("You're becoming a true freudian expert"));
// sex sex sex sex sex sex

// Other Solution
// Solution #1
/*
function toFreudRegex(myString) {
  return !myString
    ? ""
    : myString.replace(/\S+/g, "sex"); // find all places that have "one or more non-white space", replace them with "sex"
}
*/

// Solution #2
/*
var toFreud=s=>s.replace(/[^ ]+/g,'sex')
*/
