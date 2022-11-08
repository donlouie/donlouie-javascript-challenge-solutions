//? Complete the solution so that it returns true if the first argument(string) paseed in
//? ends with the 2nd argument(also a string)
//* Example
//! solution('abc', 'bc') // returns true
//! solution('abc', 'd') // returns false

function solution(str, ending) {
  str = str.substr(str.length - ending.length);
  if (str !== ending) {
    console.log('false');
  } else console.log('true');
}

// solution('abcde', 'cde');
// solution('abcde', 'abc');
solution('ninja', 'ja');

/**
 ** Other solutions
 ** Solution #1
 function solution(str, ending){
  return str.endsWith(ending);
}
** Solution #2
function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

 */
