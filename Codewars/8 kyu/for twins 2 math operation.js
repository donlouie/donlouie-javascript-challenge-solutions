// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

//radius - bottle's radius (always > 0);
//bottleLength - total bottle length (always > 0);
//rimLength - length from bottle top to brick (always < bottleLength);
//And return volume of ice brick that magician managed to put into a bottle.

// Examples:
/*
radius = 1
bottle_length = 10
rim_length = 2

volume = 16
*/

// pi = 3.14

const iceBrickVolume = (radius, bottleLength, rimLength) => {
	// Your code should be here ;)
	return (bottleLength - rimLength) * radius * 2 * radius;
};

console.log(iceBrickVolume(1, 10, 2));
