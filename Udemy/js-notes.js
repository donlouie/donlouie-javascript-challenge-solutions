function Audio(fileLocation){
	this.fileLocation = fileLocation;
	this.play = function() {
		// Tap into the audio hardware
		// Check the file at fileLocation exists
		// Check the file at fileLocation is a sound file
		// Play the file at fileLocation
	}
}

///////////////////////////////////////////////////////////////////////////
// Higher Order Function + Callback Function
document.addEventListener("keypress", respondToKey(event));

function respondToKey(event){
	console.log("Key pressed.");
	}
	
///////////////////////////////////////////////////////////////////////////
// Constructor Function
function BellBoy (name, age, hasWorkPermit, languages) {
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
}

	// Initialise Object
	var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

///////////////////////////////////////////////////////////////////////////
// Constructor Function +  Method
function BellBoy (name, age, hasWorkPermit, languages) {
	this.name = name;
	this.age = age;
	this.hasWorkPermit = hasWorkPermit;
	this.languages = languages;
	this.moveSuitcase = function() {
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
	}
}


///////////////////////////////////////////////////////////////////////////
//Object with associated Function
var bellBoy1 = {
	name: "Timmy",
	age: 19,
	hasWorkPermit: true,
	languages: ["French", "English"],

	moveSuitcase: function(){
		alert("May I take your suitcase?");
		pickUpSuitcase();
		move();
	}
}

	// Call method
	bellBoy1.moveSuitcase();


///////////////////////////////////////////////////////////////////////////
// Understanding Callbacks and How to Respond to Events
function anotherAddEventListener(typeOfEvent, callback) {

	// Detect Event Code

var eventThatHappened = {
	eventType: "keypress",
	key: "p",
	durationOfKeypress: 2
}

if (eventThatHappened.eventType === typeOfEvent) {
callback(eventThatHappened);
}

}

	// 
	anotherAddEventListener("keypress", function(event){
		console.log(event);
	}).

		// Proper Code
		document.addEventListener("keypress", function(event){
			console.log(event);
		});