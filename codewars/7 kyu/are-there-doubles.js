/*
Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

Examples:

  doubleCheck("abca")
  returns false
  
  doubleCheck("aabc")
  returns true
  
  doubleCheck("a 11 c d")
  returns true
  
  doubleCheck("AabBcC")
  returns true
  
  doubleCheck("a b  c")
  returns true
  
  doubleCheck("a b c d e f g h i h k")
  returns false
  
  doubleCheck("2020")
  returns false
  
  doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
  returns false
*/

const doubleCheck = (str) => {
	// Convert the string to lowercase to make it case-insensitive
	const lowerStr = str.toLowerCase();

	for (let i = 0; i < lowerStr.length - 1; i++) {
		// Check if the current character and the next character are the same
		if (lowerStr[i] === lowerStr[i + 1]) {
			return true; // Found double characters
		}
	}

	return false; // No double characters found
};

console.log(doubleCheck('a!@€£#$%^&*()_-+=}]{[|"\':;?/>.<,~')); // => false
console.log(doubleCheck('abca')); // => false
console.log(doubleCheck('aabc')); // => true
console.log(doubleCheck('a 11 c d')); // => true
//https://www.codewars.com/kata/56a24b4d9f3671584d000039/train/javascript

// Other solutions
// Solution 1
/*
const doubleCheck = (str) => /(.)\1/i.test(str);
*/
