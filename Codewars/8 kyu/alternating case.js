String.prototype.toAlternatingCase = function () {
	// Define your method here :)
	const output = [];
	for (let i = 0; i < this.length; i++) {
		if (this.charAt(i) == this.charAt(i).toLowerCase()) {
			output.push(this.charAt(i).toUpperCase());
		} else {
			output.push(this.charAt(i).toLowerCase());
		}
	}
	return output.join('');
};

console.log('hello WORLD'.toAlternatingCase()); // HELLO world

// Other Solution
// Solution #1
/*
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
*/

// Solution #2
/*
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}
*/
