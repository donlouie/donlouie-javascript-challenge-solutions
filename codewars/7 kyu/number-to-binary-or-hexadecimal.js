//? Converting numbers to their bianry or hexadecimal representation
//* Example
//! even => binary
//! odd => hex
function evensAndOdds(num){
    return num % 2 == 0 ? num.toString(2) : parseInt(num, 10).toString(16);
}

console.log(evensAndOdds(13))
//! => 10

/**
 ** Other solutions
 ** Solution #1
 ** const evensAndOdds = n => n.toString(n%2 ? 16 : 2);
 */