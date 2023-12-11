// Here comes the difficult part, now you have to do a series of computations on the numbers you have
// extracted.
//
// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in
// exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared
// first in the input string.
//     Remember to also round the final answer to the nearest integer.
//     Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
// Good luck and may the CODE be with you!

// https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

function doMath(s) {
    const str = s.split(' ');
    const numbers = [];
    const letters = [];
    const operations = ["+", "-", "*", "/"];

    // Populate the numbers and letters arrays
    for (let i = 0; i < str.length; i++) {
        let number = str[i].replace(/[a-z]/g, '');
        let letter = str[i].replace(/[0-9]/g, '');
        numbers.push(parseInt(number));
        letters.push(`${letter}${i}`);
    }

    // Sort the letters
    const lettersSorted = [...letters].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    const indexArr = [];
    // Populate the indexArr array
    for (let i = 0; i < lettersSorted.length; i++) {
        let index = lettersSorted[i].replace(/[a-z]/g, '');
        indexArr.push(+index);
    }

    let counter = 1;
    let pointer = 0;
    let result = numbers[indexArr[0]];

    while(counter < numbers.length){
        let currentNumber = numbers[indexArr[counter]];

        if(operations[pointer] === '+') {
            result += currentNumber;
        } else if(operations[pointer] === '-') {
            result -= currentNumber;
        } else if(operations[pointer] === '*'){
            result *= currentNumber;
        } else if(operations[pointer] === '/') {
            result /= currentNumber;
        }
        pointer++;
        counter++;

        if(pointer > operations.length - 1){
            pointer = 0;
        }


    }

    return Math.round(result);
}


// console.log(doMath("24z6 1z23 y369 89z 900b")); // 900 + 369 - 246 * 123 / 89 return 1414
// console.log(doMath("24z6 1x23 y369 89a 900b")); // 89 + 900 - 123 * 369 / 246 return 1299
console.log(doMath('9b53 7221b2 376y63 908a2 717c8 7a3349 y276 1879x3 579c1 46z4 80d477 4a794'));
// return 22139361