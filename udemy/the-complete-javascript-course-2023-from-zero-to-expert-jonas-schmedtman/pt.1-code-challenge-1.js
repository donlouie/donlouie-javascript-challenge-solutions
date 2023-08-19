//* Test Data 1
function getBMI(mass, height) {
  return (BMI = mass / height ** 2);
}

const markBMI = getBMI(78, 1.69);
const johnBMI = getBMI(92, 1.95);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);


//* Test Data 2
/*
function getBMI(mass, height) {
  return (BMI = mass / height ** 2);
}

const markBMI = getBMI(95, 1.88);
const johnBMI = getBMI(85, 1.76);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);
*/