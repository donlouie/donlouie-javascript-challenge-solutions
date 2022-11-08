function diceGame() {
// Generate random number 1-6
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

// Change immage attribute
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Change h1 Text Content according to Result
if (randomNumber1 > randomNumber2)
document.querySelector("h1").textContent = "Player 1 Wins";
else if (randomNumber1 < randomNumber2)
document.querySelector("h1").textContent = "Player 2 Wins";
else 
document.querySelector("h1").textContent = "Draw";

}

