// const calcAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

// function checkWinner(avgDolphins, avgKoalas) {
//     const dolphins = calcAverage(avgDolphins);
//     const koalas = calcAverage(avgKoalas);

//     if (dolphins >= 2 * koalas) {
//         return `Dolphins win (${dolphins} vs. ${koalas})`;
//     } else {
//         return `Koalas win (${koalas} vs. ${dolphins})`;
//     }
// }

// console.log(checkWinner([44, 23, 71], [65, 54, 49]));
// console.log(checkWinner([85, 54, 41], [23, 34, 27]));

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};
checkWinner(scoreDolphins, scoreKoalas);
