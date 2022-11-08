// ? Time <= 24hrs  =  True
// ? Time > 24hrs = False

function determineTime(durations) {
	let time = 0;
	for (let i = 0; i < durations.length; i++) {
		let hms = durations[i].toString();
		a = hms.split(':');

		let s = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

		time += s;
	}
	return time <= 86400 ? true : false;
}

console.log(determineTime(['00:30:00', '02:30:00', '00:15:00'])); // true
console.log(determineTime([])); //true
console.log(determineTime(['12:00:00', '12:00:00'])); // true
console.log(determineTime(['06:00:00', '12:00:00', '06:30:00'])); // false

// Other Solution
// Solution #1
/*
function determineTime(durations){
   let sec = 0;
   let str = [];
   for (let i = 0; i < durations.length; i++) {
     str = durations[i].split(":");
     sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
    }
    return sec/3600 <=24 ? true : false;
}
*/
