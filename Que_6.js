//Write a JavaScript function that takes a year as input and checks if it is a leap year. 
//Return true if it is a leap year, and false otherwise. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)
function isLeapYear(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            return true;
          } else {
            return false;  
          }
        } else {
          return true; 
        }
      } else {
        return false;  
      }
}
console.log(isLeapYear(1904));