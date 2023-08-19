//? Define an object called hen. It should hav ethree properties
//? name shoub be set to Helen
//? eggCount should be set to 0
//? layAnEgg shoud be a method that increments value of eggcount by 1 and returns string 'EGG'. Use this
//* Example
//! hen.name => 'Helen'
//! hen.eggCount => 0
//! hen.layAnEgg() => 'EGG'
//! hen.layAnEgg() => 'EGG'
//! hen.eggCount => 2

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    console.log('EGG');
  },
};

console.log(hen.name);
console.log(hen.eggCount);
hen.layAnEgg();
hen.layAnEgg();
console.log(hen.eggCount);
