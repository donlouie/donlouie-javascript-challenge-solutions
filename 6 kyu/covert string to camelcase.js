const toCamelCase = (s) => {
	let arr = s.split('');
	let camelCase = [];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === '-' || arr[i] === '_') {
			camelCase.push(arr[i + 1].toUpperCase());
			i++;
		} else {
			camelCase.push(arr[i]);
		}
	}
	return camelCase.join('');
};

console.log(toCamelCase('the-stealth-warrior')); // => theStealthWarrior
// console.log(toCamelCase('the_stealth_warrior')); // => theStealthWarrior

// Other Solution
// Solution 1
/*
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
*/

//Solution 2
/*
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
*/
