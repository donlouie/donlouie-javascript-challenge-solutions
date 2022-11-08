//? Your function will be passed two functions, f and g, that don't take any paremeters. Your
//? function has to call them, and return string which indicates which function returned
//? the larger number
//* Example
//! whichIsLarger(() => 5, () => 10) ➞ "g"
//! whichIsLarger(() => 25,  () => 25) ➞ "neither"
//! whichIsLarger(() => 505050, () => 5050) ➞ "f"

function whichIsLarger(f, g) {
  if (f() > g()) {
    console.log('f');
  } else if (f() < g()) {
    console.log('g');
  } else {
    console.log('neither');
  }
}

whichIsLarger(
  () => 5,
  () => 10
);
