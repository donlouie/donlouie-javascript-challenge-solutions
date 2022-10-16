function vowelChange(str, vow) {
	return str.replace(/[aeiou]/gi, vow);
}

console.log(vowelChange('adira wants to go to the park', 'o'));
// 'odoro wonts to go to tho pork'
