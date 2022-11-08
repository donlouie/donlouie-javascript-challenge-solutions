//? Write a function called validUserNames that accepts an array of usernames(strings).
//? it should return a new array, containing only the usernames that are less than 10 characters
//* Example
//! validUserNames(['mark','staceysmom1978','q29832128238983','carrie98','MoanaFan']);
//! => ['mark', 'carrie98', 'moanaFan']

const validUserNames = (arr) => {
  const output = arr.filter((n) => n.length < 10);
  return output;
  // console.log(output);
};

validUserNames([
  'mark',
  'staceysmom1978',
  'q29832128238983',
  'carrie98',
  'MoanaFan',
]);
