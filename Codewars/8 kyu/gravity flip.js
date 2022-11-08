const flip = (d, a) => {
    //TODO
    if (d === 'R') {
        return a.sort((a, b) => {
            return a - b;
        });
    } else if (d === 'L') {
        return a.sort((a, b) => {
            return b - a;
        });
    }
};

// console.log(flip('R', [3, 2, 1, 2]));
//[1, 2, 2, 3]
// console.log(flip('L', [1, 4, 5, 3, 5]));
//[5, 5, 4, 3, 1]
console.log(flip('R', [13, 2, 4, 7, 93]));
//[ 2, 4, 7, 13, 93 ]

//Other Solutions
//Solution #1
/* const flip = (d, a) => a.sort((x, y) => (d === 'R' ? x - y : y - x));
 */

//Solution #2
/*const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}
*/
