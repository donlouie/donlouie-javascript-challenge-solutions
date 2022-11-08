//* cap => maximum size excluding the driver
//* on => number of people on bus excluding driver
//* wait => number of people waiting to get on the bus excluding the driver

function enough(cap, on, wait) {
  // your code here
  const passengerTotal = on + wait;

  return cap < passengerTotal ? passengerTotal - cap : 0;
}

console.log(enough(100, 60, 50));
// => 10
//enough(10, 5, 5), => 0

/**
 ** Other Solution
 ** Solution #1
  function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
 */
