const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

function identifyLang(string) {
  if (string.length > 10) {
    const lang = franc(string);
    const output = langs.where('3', lang);
    return output.name.green;
  } else {
    return 'Could not match a language. Please try again with a larger sample'
      .red;
  }
}

console.log(identifyLang('one two three four five six'));
