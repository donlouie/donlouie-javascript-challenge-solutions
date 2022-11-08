//? Define a function rant which accepts argument called message. Function should print out
//? an uppercased version of message 3 times.
//* Example
//! rant('I hate beets') => 'I HATE BEETS'

function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}

rant('I hate beets');
