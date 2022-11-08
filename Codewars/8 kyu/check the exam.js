function checkExam(array1, array2) {
	// good luck
	let score = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) {
			score += 4;
		} else if (array2[i] === '') {
			score += 0;
		} else {
			score -= 1;
		}
	}

	if (score < 0) {
		score = 0;
	}
	return score;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
//checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6

console.log(checkExam(['b', 'b', 'c', 'b', 'a'], ['', '', 'c', '', 'c']));
// 3

// Other Solution
// Solution #1
/*
function checkExam(array1, array2) {
  const reducer = (a, e, idx) => {
    if (e === "") {
      return a;  
    }
    
    if (e === array1[idx]) {
      return a += 4;
    }
    
    return --a;
  }
  const score = array2.reduce(reducer, 0);
  return score < 0 ? 0 : score;
}
*/

// Solution #2
/*

function checkExam(array1, array2) {
var score = 0;
  
  for (var i = 0; i < array1.length; i++){
  
    if (array1[i] == array2[i]) {
    
    score += 4;
    
    }
    
    else if (array2[i] === ""){

      score += 0
  
    }
    
     
    else {
    
    score -= 1
    
    }

  
  }
  
  if (score < 0) {
  
    score = 0
    
  }  
 
 return score
 
}
*/
