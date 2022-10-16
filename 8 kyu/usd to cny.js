function usdcny(usd) {
	return `${parseFloat(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(15)); //; '101.25 Chinese Yuan'

// Other Solution
// Solution #1
/*
usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;
*/
