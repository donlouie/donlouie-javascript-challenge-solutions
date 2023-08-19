//Store Name via prompt
var name = prompt("Input Name");
// Isolate First Char and change toUpperCase
var firstChar = name.slice(0,1).toUpperCase();
// Isolate the restOfName and change toLowerCase
var restOfName = name.slice(1,name.length).toLowerCase();
// Concatenate first char with the rest of Char
var capitalisedName = firstChar + restOfName;

alert("Hello " + capitalisedName);
