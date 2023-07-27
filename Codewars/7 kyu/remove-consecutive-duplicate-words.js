// Your task is to remove all consecutive duplicate words from a string, leaving only
// first words entries. For example:
//
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"

// const removeConsecutiveDuplicateWords = s => {
//     const words = s.split(' ');
//     let filteredString = '';
//     for(const word of words){
//         if (word !== filteredString.split(' ').pop()) {
//             filteredString += ` ${word}`;
//         }
//     }
//
//     return filteredString.trim();
// }

const removeConsecutiveDuplicates = (s) =>
	s
		.split(' ')
		.map((word, i, words) => (word === words[i - 1] ? null : word))
		.filter(Boolean)
		.join(' ');

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta ' + 'gamma gamma gamma delta'));
