const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
    },
};

console.log(
    `${
        mark.calcBMI() > john.calcBMI()
            ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
                  john.fullName
              }'s (${john.calcBMI()})`
            : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
                  mark.fullName
              }'s (${mark.calcBMI()})`
    }`
);
