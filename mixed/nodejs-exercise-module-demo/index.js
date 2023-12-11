//? module 'give-me-a-joke'
const jokes = require('give-me-a-joke');
//? module 'colors'
const colors = require('colors');
//? module 'figlet'
const figlet = require('figlet');

// jokes.getRandomDadJoke(function (joke) {
//   console.log(joke.rainbow);
// });

figlet('Hello World!', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data.green);
});
