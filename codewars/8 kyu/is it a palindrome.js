//! aba => true ; hello => false ; Madam => true ; abBa => true

function isPalindrome(x) {
    // your code here
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
        ? true
        : false;
}

// console.log(isPalindrome('aba')); //true
// console.log(isPalindrome('hello')); //false
console.log(isPalindrome('AbBa')); //true

//Other Solution
//Solution #1
/*
function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}
*/
