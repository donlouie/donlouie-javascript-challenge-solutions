/*
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

const computerToPhone = (numbers) => {
	const keypadComputer = Array.from(numbers, (char) => parseInt(char));
	const keypadMapping = {
		7: '1',
		8: '2',
		9: '3',
		4: '4',
		5: '5',
		6: '6',
		1: '7',
		2: '8',
		3: '9',
		0: '0',
	};

	const keypadPhone = [];
	for (let i = 0; i < keypadComputer.length; i++) {
		const phoneDigit = keypadMapping[keypadComputer[i]];

		if (phoneDigit !== undefined) {
			keypadPhone.push(phoneDigit);
		} else {
			keypadPhone.push(computerDigit.toString());
		}
	}

	return keypadPhone.join('');
};

console.log(computerToPhone('123'));

// Other Solution
// Solution 1
/*
const computerToPhone = (nums) => {
  const PC_TO_PHONE = {
    1: 7,
    2: 8,
    3: 9,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3,
    0: 0,
  };

  let result = [...nums].map((digit) => PC_TO_PHONE[digit]).join('');

  return result;
};
*/
