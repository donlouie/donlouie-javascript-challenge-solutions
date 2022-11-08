//? Take 2 strings including only letters from a-z
//? Return new sorted string, longes possible, must be distinct
//* Example
//! 'aretheyhere', 'yestheyarehere' => 'aehrsty'

function longest(s1, s2) {
  concat = s1 + s2;
  let s3 = [...new Set(concat)];
  console.log(s3.sort().join(''));
}

longest('aretheyhere', 'yestheyarehere');

/**
 * Other Solutions
 * *Solution #1

 function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

 * *Solution #2

function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

 */
