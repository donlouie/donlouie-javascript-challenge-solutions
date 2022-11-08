// Beer Song

var numberOfBottles = 3;

function beerSong() {
    
while (numberOfBottles >= 0 && numberOfBottles < 6){
    if (numberOfBottles > 1) {
        console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.");
        numberOfBottles--;
        console.log("Take one down, pass it around, " + numberOfBottles + " more bottles of beer on the wall.");
    } else if (numberOfBottles === 1) {
            console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer.");
            numberOfBottles--;
            console.log("Take one down, pass it around, no more bottles of beer on the wall.");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
            break;
        }
    }
}

///////////////////////////////////////////////////////////////////////////
// Another Solution

var numberOfBottles = 99

while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}