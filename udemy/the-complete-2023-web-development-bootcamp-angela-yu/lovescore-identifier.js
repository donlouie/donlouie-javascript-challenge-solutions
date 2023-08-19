// Love Calculator

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100)+1; //1-100

var n1 = prompt("What is your name?: ");
var n2 = prompt("What is their name?: ");

if (loveScore > 70 ) {
     alert( n1 + " and " + n2 + ", Your Love Score is : " + loveScore + ", You love each other like Kanya loves Kanye. ");
    } 
if (loveScore > 30 && loveScore <= 70){
    alert( n1 + " and " + n2 + ", Your Love Score is : " + loveScore);
}
if (loveScore <= 30){
    alert( n1 + " and " + n2 + ", Your Love Score is : " + loveScore + ", You go together like water and oil") ;
}









    /*else {
     alert( n1 + " and " + n2 + ", Your Love Score is : " + n);
    }



