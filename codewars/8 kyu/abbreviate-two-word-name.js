//? Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//* Example
//! Sam Harris => S.H

const abbrevName = (name) => {
  const n = name.split(' ');
  const fi = n[0].charAt(0);
  const li = n[1].charAt(0);

  return `${fi}.${li}`.toUpperCase();
};

console.log(abbrevName('Patrick Feeney'));
//Patrick Feeney => P.F

/*
* Other solutions
* Solution #1
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

* Solution #2
function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}
*/
