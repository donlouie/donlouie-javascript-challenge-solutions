//? Write a function that takes a credit card number and only displays the last four characters.
//? rest of the character must be replaced by '*'
//* Example
//! cardHide("1234123456785678") ➞ "************5678"

function cardHide(card) {
  console.log(card.replace(/.(?=.{4})/g, '*'));
}

cardHide('1234123456785678');
