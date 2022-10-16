//? Remove vowels from string
//* Example
//! "This website is for losers LOL!"
//! => "Ths wbst s fr lsrs LL!"

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

Test.assertEquals(
  disemvowel('This website is for losers LOL!'),
  'Ths wbst s fr lsrs LL!'
);
