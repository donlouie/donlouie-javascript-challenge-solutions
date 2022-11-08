//? Write a function returnDay() that takes a param(num 1 to 7) and returns day of the week
//? if num is less than 1, or greater than 7, return null
//* Example
//! returnDay(1) => 'Monday'
//! returnDay(4) => 'Thursday'
//! returnDay(0) => 'null'

const dayOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function returnDay(day) {
  if (day >= 1 && day <= 7) {
    console.log(dayOfWeek[day - 1]);
  } else {
    console.log('null');
  }
}

returnDay(7);
