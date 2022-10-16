//? Return: a string formatted as a list of names separated by commas except for
//? the last two names, which should be separated by an ampersand.
//* Example
//! list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//! => returns 'Bart, Lisa & Maggie'

function list(names) {
  let str = '';
  if (names.length !== 0) {
    let last = names.pop();
    str = names
      .map((val, i, arr) => {
        if (i !== arr[arr.length - 1]) {
          return val.name;
        }
      })
      .join(', ');

    str += str !== '' ? ' & ' + last.name : last.name;
  }

  console.log(str);
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);

/**
 ** Other solutions
 ** Solution #1
 function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

 ** Solution #2
 function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

** Solution #3
function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}
 */