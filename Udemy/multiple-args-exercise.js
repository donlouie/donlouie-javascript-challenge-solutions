//? Write a function called isSnakeEyes, which accepts two inputs
//? if both are 1's print 'Snake Eyes!' else 'Not Snake Eyes!'
//* Example
//! (1,1) => Snake Eyes!
//! (1,5) => Not Snake Eyes!

function isSnakeEyes(n1, n2) {
  if (n1 === 1 && n2 === 1) {
    console.log('Snake Eyes!');
  } else {
    console.log('Not Snake Eyes!');
  }
}

isSnakeEyes(1, 5);
