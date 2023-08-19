// if value is between 50 and 300 = 15%
// if value is less than 50 and more than 300 = 20%

bill = 40;
// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
    `The bill was ${bill}, the tip was ${(tip =
        bill >= 50 && bill <= 300
            ? (bill * 15) / 100
            : (bill * 20) / 100)}, and the total value ${tip + bill}`
);
