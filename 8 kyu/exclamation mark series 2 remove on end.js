//? Remove exclamation marks at end of string

function remove(s) {
	//coding and coding....
	return s.replace(/!+$/, '');
}

console.log(remove('Hi! Hi!!'));
