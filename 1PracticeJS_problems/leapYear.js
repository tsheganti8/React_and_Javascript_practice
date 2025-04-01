// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
   
const date = new Date();
const year = date.getFullYear();
const leapDays = year =>  ((year % 4 === 0 && year % 100 != 0) ||(year % 400 === 0)) ? 366 : 365;


console.log("Is it a leap year?", leapDays(year) === 366 ? "Yes, it's a leap year" : "No, it's not a leap year");



