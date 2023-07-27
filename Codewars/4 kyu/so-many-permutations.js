// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates,
// if present.
//
//     Create as many "shufflings" as you can!
//
//     Examples:
//
// With input 'a':
// Your function should return: ['a']
//
// With input 'ab':
// Your function should return ['ab', 'ba']
//
// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

function permutations(string) {
    const characters = string.split('');

    const combinations = (arr) => {
        if (arr.length === 1) {
            return [arr];
        }

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const subCombinations = combinations(remaining);

            for (let j = 0; j < subCombinations.length; j++) {
                const permutation = [current, ...subCombinations[j]];
                result.push(permutation);
            }
        }

        return result;
    };

    const result = combinations(characters)
        .map((arr) => arr.join(''))
        .filter((val, i, arr) => arr.indexOf(val) === i);

    return result;
}

console.log(permutations("abc")); // return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permutations("aa")); // return ['aa']