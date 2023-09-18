/*
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

const charConcat = (string) => {
	let letters = string.split('');
	const midpoint = Math.floor(letters.length / 2);

	if (letters.length % 2 !== 0) {
		letters = letters.slice(0, midpoint).concat(letters.slice(midpoint + 1));
	}

	let fHalf = letters.slice(0, midpoint);
	let sHalf = letters.slice(midpoint).reverse();
	const result = [];

	for (let i = 0; i < fHalf.length; i++) {
		result.push(fHalf[i]);
		result.push(sHalf[i]);
		result.push(i + 1);
	}

	return result.join('');
};

console.log(charConcat('abc!def'));
// return af1be2cd3

//Other Solution
//Solution 1
/*
function charConcat(str) {
  var i=1;
  var res='';
  while(str.length>1){
  	res+=str.charAt(0)+str.charAt(str.length-1)+i;
    i++;
    str=str.slice(1,-1)
  }
  return res;
}
*/

//Solution 2
/*
function charConcat(string){
  const stringArr = string.split('');
  let result = '';
  
  for (let count = 1; stringArr.length > 1; count++) {
    result += stringArr.shift() + stringArr.pop() + count;
  }
  
  return result;
}
*/
