//? Remove string spaces

function noSpace(x) {
    return x.replace(/ /g, '');
}

console.log(noSpace('8aaaaa dddd r     '));

// Other Solution
// Solution #1
/*
function noSpace(x){
  return x.replace(/\s/g, '');
}
*/
// Solution #2
/*
function noSpace(x){return x.split(' ').join('')}
*/
