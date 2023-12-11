//? Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
//* Example
//! 3600 --> "1 hour(s) and 0 minute(s)"

function toTime(seconds) {
  //code here
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}
console.log(toTime(3600));
// => 1 hour(s) and 0 minute(s)

/**
 ** Other Solutions
 ** Solution #1
 function toTime(seconds) {
  return `${seconds / 3600 | 0} hour(s) and ${(seconds / 60) % 60 | 0} minute(s)`
} 
 */