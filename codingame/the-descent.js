/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
  const highest = 0; //tracks highest mountain height
  const mountainFire = 0; //tracks the mountain to shoot
  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline()); // represents the height of one mountain.
    if (highest < mountainH) {
      //If mountainH is bigger than highest (initialized to 0 then...
      highest = mountainH; //mountainH becomes new highest.
      mountainFire = i; //the index # of mountain (i) saved to mountainFire so we can shoot it.
    }
  }

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  // console.log('4');     // The index of the mountain to fire on.
  console.log(mountainFire);
}
