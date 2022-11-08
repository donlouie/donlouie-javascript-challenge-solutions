//Leap Year

function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if (year % 4 == 0 || year % 400 == 0){
  console.log("Leap year.");
} else  {
if (year % 4 !== 0 || year % 100 !== 0 || year % 400 !== 0);
  console.log("Not leap year.")
}

/**************Don't change the code below****************/    

}
isLeap(1989);


///////////////////////////////////////////////////////////////////////////
//Another Solution 
function isLeap(year) {   

  if((year % 4 === 0) || (year % 100 !== 0 && year % 400 === 0)) {

    return "Leap year.";

  }

  else{

    return "Not leap year.";

  }

}


///////////////////////////////////////////////////////////////////////////
//Another Solution
function isLeap(year){
	if (year % 4 === 0 ){ 
	 if (year % 100 === 0){
	  if (year % 400 === 0){
			return "Leap year.";
		} else {
			return "Not leap year.";
		}
	 } else {
		return "Leap year.";
	}
} else {
	return "Not leap year."
}
}


///////////////////////////////////////////////////////////////////////////
//Another Solution
return (!(year%4) && year%100 || !(year%400)) ? 'Leap year.' : 'Not leap year.';
 
// Or
 
return ((!(year%4) && year%100 || !(year%400)) ? 'L' : 'Not l') + 'eap year.';