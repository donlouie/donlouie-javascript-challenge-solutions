/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
*/
// * Example
/*
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
*/

function stringClean(s) {
	return s.replace(/[0-9]/g, '');
}
console.log(stringClean('! !'));
console.log(stringClean('123456789'));
console.log(stringClean('This looks5 grea8t!'));

// Other Solution
// Solution #1
/*
function stringClean(s){
 while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
   while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
     while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
       while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
          while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
             while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
                while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
                   while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
                      while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
                         while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
 return s
}
*/
