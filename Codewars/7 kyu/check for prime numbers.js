function isPrime(n) {
	// show me the code!
	for (let i = 2; i < n; i++) if (n % i === 0) return false;
	return n > 1;
}

console.log(isPrime(1)); // false
console.log(isPrime(11)); //true

// Other Solution
// Solution #1
/*
function isPrime(n) {
  if (n < 2) { return false }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
*/

// Solution #2
/*
function isPrime(n) {
 for(let i = 2; i <= Math.sqrt(n); i++){
   if(n % i == 0)
     return false
 }
  return n > 1
}
*/

// Solution #3
/*
const isPrime = n =>
 !/^x?$|^(xx+?)\1+$/.test(`x`.repeat(n));

 
/^x?$/.test(`x`.repeat(n))   // n === 0 || n === 1

/^(xx)\1+$/.test(`x`.repeat(n))   // n % 2 === 0 && n !== 2
/^(xxx)\1+$/.test(`x`.repeat(n))   // n % 3 === 0 && n !== 3
/^(xxxxx)\1+$/.test(`x`.repeat(n))   // n % 5 === 0 && n !== 5
*/
