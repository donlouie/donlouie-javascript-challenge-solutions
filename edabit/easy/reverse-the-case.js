//? Given a string, create a function to reverse the case. All lower-cased letters should be
//? upper-cased, and vice versa
//* Example
//! reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
//! reverseCase("MANY THANKS") ➞ "many thanks"

function reverseCase(str) {
  newString = [];
  stringArr = str.split('');
  for (let char of stringArr) {
    if (char === char.toUpperCase()) {
      const newChar = char.toLowerCase();
      newString.push(newChar);
    } else if (char === char.toLowerCase()) {
      const newChar = char.toUpperCase();
      newString.push(newChar);
    }
  }
  console.log(newString.join(''));
}

reverseCase('SpOnTaNeOuS');

/**
 ** Other solutions
 ** Solution #1
 function reverseCase(str) {
	return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("")
}

** Solution #2
function reverseCase(str) {
	return str.split('').map(a => a == a.toLowerCase() ? a.toUpperCase()
				 : a.toLowerCase()).join('');
}
 */
