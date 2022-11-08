/**
 *?
 If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
 Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
 where N is the sheep's position in the queue.
 */
//* Example
//! warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
//! warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  } else {
    let index = queue.findIndex((x) => x == 'wolf');
    return `Oi! Sheep number ${
      queue.length - index - 1
    }! You are about to be eaten by a wolf!`;
  }
}

console.log(
  warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
  ])
);

/**
 ** Other solutions
 ** Solution #1
 function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

** Solution #2
function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}
 */
