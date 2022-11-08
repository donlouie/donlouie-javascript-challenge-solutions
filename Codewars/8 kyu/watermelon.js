//? Check if int is divisible by 2 return true else false

function divide(weight) {
	//your code here
	if (weight % 2 != 0) return false;
	if (weight === 2) return false;
	else return true;
}

console.log(divide(4));
console.log(divide(2));
console.log(divide(5));
console.log(divide(88));
console.log(divide(100));
console.log(divide(67));
console.log(divide(90));
console.log(divide(10));
console.log(divide(99));
console.log(divide(32));

// Other Solutions
// Solution #1
/*
function divide(weight){
  return weight > 2 && !(weight % 2);
}
*/

// Solution #2
/*
function divide(weight){
  //your code here
  return (weight >= 4 && weight % 2 === 0)
}
*/
