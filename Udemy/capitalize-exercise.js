//? Write a function capitalize() that accepts a single string arg and returns
//? a new string with first letter capitalized
//* Example
//! eggplant => Eggplant

function capitalize(string) {
  const newString = string.charAt(0).toUpperCase() + string.substring(1);

  console.log(newString);
}

capitalize('squid');
