// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) => {
	return !/(\w).*\1/i.test(str);
};

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('aba')); // false

// Other Solution
// Solution 1
function isIsogram(str) {
	return new Set(str.toUpperCase()).size == str.length;
}
