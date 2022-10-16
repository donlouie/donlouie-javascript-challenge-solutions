//? Determine wether a string contains the whole word "English"
//* Example
//! egnlish => false ; english => true

const spEng = (sentence) => {
  //write your code here
  return sentence.match(/English/i) ? true : false;
};

console.log(spEng('egnlish'));

/*
* Other solution
* Solution #1
function spEng(s){
   return /english/i.test(s)
}
*/
