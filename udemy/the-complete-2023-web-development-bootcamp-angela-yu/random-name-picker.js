// Random Name Picker

function whosPaying(names) {
    
const n = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
const random = Math.floor(Math.random() * n.length);
return (random, n[random]) + " is going to buy lunch today!";    

}

whosPaying();


///////////////////////////////////////////////////////////////////////////
//Another Solution

function whosPaying(names){

	var numberOfPeople = names.length;
	var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
	var randomPerson = names[randomPersonPosition];

	return randomPerson + " is going to buy lunch today!"''
}