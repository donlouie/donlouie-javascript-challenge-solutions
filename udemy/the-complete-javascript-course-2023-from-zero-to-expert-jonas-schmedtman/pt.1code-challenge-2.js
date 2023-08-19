function getBMI(mass, height) {
  return (BMI = mass / height ** 2);
}

const markBMI = getBMI(78, 1.69);
const johnBMI = getBMI(92, 1.95);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(
    (result = `Mark's BMI (${Math.round(markBMI)}) is higher than John!`)
  );
} else {
  console.log(
    (result = `John's BMI (${Math.floor(johnBMI)}) is higher than Mark!`)
  );
}
