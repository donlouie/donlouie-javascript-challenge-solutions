//? Prev. formula
// console.log(
//     `The bill was ${bill}, the tip was ${(tip =
//         bill >= 50 && bill <= 300
//             ? (bill * 15) / 100
//             : (bill * 20) / 100)}, and the total value ${tip + bill}`
// );

//? My Answer
function calcTip(x) {
    const bills = x;
    const tips = [];
    const total = [];

    bills.forEach((val) => {
        const tip = val >= 50 && val <= 300 ? val * 0.15 : val * 0.2;
        tips.push(tip);
    });

    // const total = bills.concat(tips).reduce((a, b) => a + b, 0);
    for (let x = 0; x < bills.length; x++) {
        const sum = bills[x] + tips[x];
        total.push(sum);
    }
    console.log(`Bill: ${bills}`);
    console.log(`Tip: ${tips}`);
    console.log(`Bill + Tip: ${total}`);
}

calcTip([125, 555, 44]);

//? Instructor
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


