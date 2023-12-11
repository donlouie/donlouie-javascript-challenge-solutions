//? a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter
//! "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

function vaporcode(string) {
	return string.replace(/ /g, '').split('').join('  ').toUpperCase();
}

console.log(vaporcode("Let's go to the movies"));

// Other Solution
// Solution #1
/*
function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}
*/

// Solution #2
/*
function vaporcode(string) {
  return string.toUpperCase().replace(/ /g,'').split('').join('  ')
}
*/
