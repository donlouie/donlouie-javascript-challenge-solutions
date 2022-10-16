//?  If n < 0 or m < 0 return 0.
//* Example
//! n= 5, m=5: => 25

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(5, 5));
