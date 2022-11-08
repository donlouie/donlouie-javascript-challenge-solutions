// Fibonacci Generator 

function fibonacciGenerator(n) {

    var fibonacciArray = [];
    var firstNumber = 0, secondNumber = 1;

    for (var i = 0; i < n; i++) {

        if (i === 0) {
            fibonacciArray.push(firstNumber);

        } else if (i === 1) {

            fibonacciArray.push(secondNumber);


        } else {

            var nextNumber = firstNumber + secondNumber;

            firstNumber = secondNumber;

            secondNumber = nextNumber;

            fibonacciArray.push(nextNumber);

        }

    }

    return fibonacciArray;

}
fibonacciGenerator(3);


///////////////////////////////////////////////////////////////////////////
// Solution #2
function fibonacciGenerator (n) {

  var output = [];
  if ( n === 1 ){
    output = [0];
  }
  else if ( n === 2){
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++){
    output.push(output[output.length - 2] + output[output.length - 1]);
  }
  }
  return output
}
output = fibonacciGenerator(3);
console.log(output);