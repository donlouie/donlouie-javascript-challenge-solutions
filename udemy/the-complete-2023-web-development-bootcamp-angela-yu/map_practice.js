//? Define a function called cleanNames(). It should accept an arr of strings, which may contain spaces.
//? it should use the array map method to return a new array full of trimmed names
//* Example
//! cleanNames([' timothee', '   darth_hater']) => ['timothee','darth_hater']

cleanNames(['  reimu', 'marisa   ']);

function cleanNames(arr) {
  const newArr = arr.map((str) => str.trim());
  console.log(newArr);
}
