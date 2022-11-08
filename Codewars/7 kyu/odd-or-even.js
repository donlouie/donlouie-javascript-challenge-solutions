/**
 *?
 Given a list of integers, determine whether the sum of its elements is odd or even.
 Give your answer as a string matching "odd" or "even".
 If the input array is empty consider it as: [0] (array with a zero).
 */


function oddOrEven(array) {
    //enter code here

    const output = array.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
    return output % 2 === 0 ? 'even' : 'odd';

}

console.log((oddOrEven([0, 1, 2])))
//[0] => even
//[1] => odd
//[0, 1, 5] => even
//[0, 1, 2] => odd

/**
 ** Other solutions
 ** Solution #1
 return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
 */