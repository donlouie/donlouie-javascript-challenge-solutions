//? Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//* Example
//! "Hello World!" => "Hello World"

function removeExclamationMarks(s) {
    return s.replace(/[^a-zA-Z ]/g, '');
}

console.log(removeExclamationMarks('Hello World!'));
// => "Hello WOrld"
