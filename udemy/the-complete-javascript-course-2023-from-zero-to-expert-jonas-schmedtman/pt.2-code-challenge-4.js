//! My solution #1
// const calcTip = function () {
//     const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//     const tips = [];
//     const totals = [];

//     for (let i = 0; i <= bills.length - 1; i++) {
//         let tip =
//             bills[i] >= 50 && bills[i] <= 300
//                 ? bills[i] * 0.15
//                 : bills[i] * 0.2;
//         let total = tip + bills[i];
//         tips.push(tip);
//         totals.push(total);
//     }

//     console.log(bills);
//     console.log(tips);
//     console.log(totals);
// };

// const caclAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         sum = arr[i] + sum;
//     }

//     const avg = sum / arr.length;
//     console.log(avg);
// };

// calcTip();
// caclAverage([26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]);

//! My solution #2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    // tips.push(calcTip(bills[i]));
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tips[i]);
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(bills, tips, totals);
console.log(calcAverage(totals));
