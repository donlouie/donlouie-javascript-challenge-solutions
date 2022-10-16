function well(x) {
    const counts = {};
    x.forEach(function (e) {
        counts[e] = (counts[e] || 0) + 1;
    });

    if (counts.good <= 2) {
        return 'Publish!';
    } else if (counts.good >= 3) {
        return 'I smell a series!';
    } else {
        return 'Fail!';
    }
}

console.log(well(['bad', 'bad', 'bad'])); //Fail!
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // Publish!
console.log(
    well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
); // I smell a series!

// Other Solution
// Solution #1
/*
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}
*/

//Solution #2
/*
function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}
*/
