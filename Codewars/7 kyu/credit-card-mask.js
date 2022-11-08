//? Hash string into '#' but leave the four characters
//*Example
//! 4556364607935616 => ############5616
//! 64607935616 => #######5616

// return masked string
function maskify(cc) {
  const maskedNumber = cc.replace(/.(?=.{4})/g, '#');

  console.log(maskedNumber);
}

maskify('4556364607935616');

/**
 **RegEx Solutions
const maskAllButLastFour = R.replace(/.(?=.{4})/g, '#')
const maskAllButLastFour = R.replace(/\d(?=\d{4})/g, "*");
const maskAllButLastFour = R.replace(/[0-9](?=([0-9]{4}))/g, '*');
const ensureOnlyNumbers  = R.replace(/[^0-9]+/g, '');
const hashedCardNumber   = R.compose(maskAllButLastFour, ensureOnlyNumbers);

 **Other Solutions
 **Solution #1
 var cardNumber       = '4761640026883566';
console.log(maskCard(cardNumber));

function maskCard(num) {
  return `${'*'.repeat(num.length - 4)}${cardNumber.substr(num.length - 4)}`;
}

 **Solution #1
 
 */
