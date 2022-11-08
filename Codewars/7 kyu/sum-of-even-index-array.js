function evenLast(numbers) {
  const i = numbers[numbers.length - 1];
  let evenSum = 0;

  if (numbers && numbers.length) {
    numbers.filter((value, index) => {
      if (index % 2 == 0) {
        evenSum += value;
      }
    }, 0);
    return evenSum * i;
  } else {
    return 0;
  }
}

console.log(evenLast([2, 3, 4, 5]));
//=> 30

/**
 ** Other solutions
 ** Solution #1
 const evenLast = ( arr ) => 
      arr.filter((e,i) => i % 2 === 0).reduce((a, b) => a + b, 0) * arr[arr.length-1] || 0 
 */
