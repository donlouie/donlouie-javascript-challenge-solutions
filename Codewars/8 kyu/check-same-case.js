/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b) {
	return /[a-z]/i.test(a) && /[a-z]/i.test(b)
		? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
		: -1;
}
console.log(sameCase('C', 'B')); // 1
console.log(sameCase('b', 'A')); //0
console.log(sameCase('A', '?')); // -1

//* Other solution
//* Solution #1
/*
function sameCase(a, b){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
    const checkCase = x => {
      if(x === x.toLowerCase()) return 'lower'
      if(x === x.toUpperCase()) return 'upper'
    }
  
    return checkCase(a) === checkCase(b) ? 1 : 0
  }
*/
//* Solution #2
/*
function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}
*/
