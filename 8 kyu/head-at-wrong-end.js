/**
 *? Instruction
"You're at the zoo and you notice that everything has been switched around. Not just the animals but the people
 and the earth too. Heads is now tails and up is down.It's up to you to reverse this issue.
You will be given an array and it's your job to return the array reversed to it's original orientation."
 */
//* Example
//! fixTheMeerkat(['tail', 'body', 'head']) => ["head", "body", "tail"]

function fixTheMeerkat(arr) {
  //your code here
  return arr.reverse();
}

console.log(fixTheMeerkat(['tail', 'body', 'head']));
//result => ["head", "body", "tail"]
