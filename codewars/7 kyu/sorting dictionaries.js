// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.

const sortDict = (dict) => {
	// Step - 1
	// Create the array of key-value pairs
	var items = Object.keys(dict).map((key) => {
		return [key, dict[key]];
	});

	// Step - 2
	// Sort the array based on the second element (i.e. the value)
	items.sort((first, second) => {
		return first[1] - second[1];
	});

	// Step - 3
	// Obtain the list of keys in sorted order of the values.
	var keys = items.map((e) => {
		return e[0];
	});

	return keys;
};
console.log(sortDict({ 3: 1, 2: 2, 1: 3 }));
