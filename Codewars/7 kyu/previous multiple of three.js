const prevMultOfThree = (n) => {
	//your solution
	const arr = n.toString().split('').map(Number);
	while (parseInt(arr.join('') % 3) != 0) {
		arr.pop();
	}

	return arr.length >= 1 ? parseInt(arr.join('')) : null;
};

console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(25)); // 2
console.log(prevMultOfThree(952406)); // 9

// Other Solution
// Solution #1
/*
const prevMultOfThree = n => {
  if (n === 0) return null;
  if (n%3 === 0) return n;
  return prevMultOfThree(+n.toString().slice(0, -1))
}
*/

// Solution #2
/*
const prevMultOfThree = n => {
  
  for (let i=String(n).length; i>0 ; i--){
    n = Number(String(n).substring(0,i));
    if(n % 3 === 0) {return n;}
  }
  
  return null;
}
*/

// Solution #3
/*
prevMultOfThree=f=n=>n%3?f(0|n/10):n||null
*/
