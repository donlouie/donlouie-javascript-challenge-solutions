//? Define an object called square, which will hold methods that have to do with the geometry of squares.
//? It should containt two methods, area and perimeter
//? Area should accept the length of a side and return the side squared
//? Perimeter should accept the lenght of a side multiplied by 4
//* Exaple
//! square.area(10) => 100
//! square.perimeter(10) => 40

const square = {
  area(length) {
    console.log(Math.pow(length, 2));
  },
  perimeter(length) {
    console.log(length * 4);
  },
};

square.area(10);
// square.perimeter(10);
