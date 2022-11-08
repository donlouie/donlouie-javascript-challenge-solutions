function solution(nums) {
	return nums != null ? nums.sort((a, b) => a - b) : [];
}

console.log(solution([1, 2, 5, 10, 50])); //[1,2,5,10,50]
console.log(solution(null));

// Other Solution
// Solution #1
/*
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}
*/
