const simpleMultiplication = (number) => {
	return number % 2 == 0 ? number * 8 : number * 9;
};

console.log(simpleMultiplication(2));
// 16

// Other Solution
// Solution #1
/*
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
*/
