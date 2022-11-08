//Count charLength from prompt
var userString = prompt("Input words here");
var charactersLeft = 200 - wordLength;
var wordLength = userString.length;

alert("You have written " + wordLength + " characters, you have " + charactersLeft + " characters left.");

// /  APP BREWERY SOLUTION 
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters remaining.");
    
// / APP BREWERY SOLUTION #2
var tweet = prompt("Compose your tweet:");
alert("You have written " + tweet.length + " characters, you have " + (140-tweet.length) + " characters remaining.");