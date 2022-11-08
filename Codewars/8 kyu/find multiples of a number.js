function findMultiples(integer, limit) {
	//your code here
	const multiples = [];

	for (let i = 1; i <= limit; i = i + 1) {
		if (integer * i <= limit) {
			multiples.push(integer * i);
		}
	}
	return multiples;
}

console.log(findMultiples(5, 25));

// Other Solution
// Solution #1
/*
function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}
*/

// Solution #2
/*
function findMultiples(int,limit){
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}
*/
