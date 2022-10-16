/*
Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 4 or less.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
*/

var a = { Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' }, // Fire!
	b = { Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' }; // Shiver me timbers!

const cannonsReady = (gunners) => {
	//your solution here
	return Object.values(gunners).includes('nay')
		? 'Shiver me timbers!'
		: 'Fire!';
};

console.log(cannonsReady(a));
console.log(cannonsReady(b));

// Other solutions
// Solution 1
/*
const cannonsReady = (gunners) => {
  return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}
*/
