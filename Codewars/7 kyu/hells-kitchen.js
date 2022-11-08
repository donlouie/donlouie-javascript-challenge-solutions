//? String returned should be caps, every word should end with '!!!!', any letter 'a' or 'A' shoud
//? become '@', any other vowel should become '*'
//* Example
//! Test.assertEquals(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');

function gordon(a) {
  output = [];
  wordsArr = a
    .toUpperCase()
    .replace(/[eEiIoOuU]/gi, '*')
    .replace(/[aA]/gi, '@')
    .split(' ');

  for (let word of wordsArr) {
    output.push(word + '!!!!');
  }
  console.log(output.join(' '));
}

gordon('are you stu pid');
// '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'

/**
 ** Other solutions
 ** Solution #1
  function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}
** Solution #2
const gordon=a=>a.toUpperCase().split(" ").map(a=>a.replace(/A/g,"@").replace(/[EIOU]/g,"*")+"!!!!").join(" ");
 */
