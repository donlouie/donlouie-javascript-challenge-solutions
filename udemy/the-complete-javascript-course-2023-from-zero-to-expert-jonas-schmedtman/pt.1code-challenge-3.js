// Test Data
// Dolphins Score : 96, 108, 9
// Koalas Score: 88, 91, 110

function getWinner(A, B) {
    const dolphins = Math.round(A.reduce((a, b) => a + b) / A.length);
    const koalas = Math.round(B.reduce((a, b) => a + b) / A.length);

    console.log(`Dolphins = ${dolphins}`, `Koalas = ${koalas}`);

    if (dolphins > koalas && dolphins >= 100) {
        console.log('Dolphins Win!');
    } else if (koalas > dolphins && koalas >= 100) {
        console.log('Koalas Win!');
    } else if (dolphins == koalas && dolphins >= 100 && koalas >= 100) {
        console.log('DRAW!');
    } else {
        console.log('No team wins the trophy!');
    }
}

getWinner([96, 108, 89], [88, 91, 110]); // No Team Wins
// getWinner([97, 112, 101], [109, 95, 123]); // Koalas Win!
// getWinner([97, 112, 101], [109, 95, 106]); //DRAW!
