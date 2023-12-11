//? Create a function that takes word and returns new word without first character
//* Examples
//! apple => 'pple'
//! plum => 'lum;

function newWord(str) {
  arr = str.split('');
  arr.shift();
  console.log(arr.join(''));
}

newWord('plum');

/**
 ** Other solutions
 **Solution #1
 function newWord(str){
	return str.slice(1)
}
 */
