//? Find word within a string
//* Example
//! detectWord("UcUNFYGaFYFYGtNUH") => "cat"
//! detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
//! detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
function detectWord(str) {
  let word = str.replace(/[^a-z]/g, '');
  console.log(word);
}

detectWord('UcUNFYGaFYFYGtNUH');
