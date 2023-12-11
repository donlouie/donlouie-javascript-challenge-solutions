//? Write a function that removes non-letters from a string
//* Example
//! lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"
//! lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

function lettersOnly(str) {
  newStr = str.replace(/[^A-Za-z]+/g, '');
  console.log(newStr);
}

lettersOnly('R!=:~0o0./c&}9k`60=y');


/**
 ** Other solutions
 ** Solution #1
 function lettersOnly(str) {
	return str.replace(/[^a-z]/gi, '');
}
 */