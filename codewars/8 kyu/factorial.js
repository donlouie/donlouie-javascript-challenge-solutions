function factorial(n) {
	//your code here
	if (n < 0) return;
	if (n < 2) return 1;
	return n * factorial(n - 1);
}

console.log(factorial(4)); //24

// Other Solutions

// Solution #1
// const factorial = n => n ? factorial(n - 1) * n : 1;

// Solution #2
/* function factorial(n){
  return n ? n * factorial(n-1) : 1;
}
*/
