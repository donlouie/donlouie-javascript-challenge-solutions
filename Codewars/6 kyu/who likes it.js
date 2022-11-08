const likes = (n) => {
	if (!n || !n.length) {
		return 'no one likes this';
	}

	if (n.length === 1) {
		return `${n[0]} likes this`;
	}

	if (n.length === 2) {
		return `${n[0]} and ${n[1]} like this`;
	}

	if (n.length === 3) {
		return `${n[0]}, ${n[1]} and ${n[2]} like this`;
	}

	return `${n[0]}, ${n[1]} and ${n.length - 2} others like this`;
};

// console.log(likes([])); // must be "no one likes this"
// console.log(likes(['Peter'])); // must be "Peter likes this"
// console.log(likes(['Jacob', 'Alex'])); // must be "Jacob and Alex like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // must be 'Alex, Jacob and 2 others like this'

// Other solution
// Solution 1
/*
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
*/
