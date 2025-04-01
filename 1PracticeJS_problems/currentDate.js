// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
   
const d = new Date();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let day = d.getDate();

if(day < 10){
    day = "0" + day;
}
if(month < 10){
    month = "0" + month;
}


console.log("Expected Output:", month + "-" + day + "-" + year);
console.log("Expected Output:", month + "/" + day + "/" + year);
console.log("Expected Output:", day + "-" + month + "-" + year);
console.log("Expected Output:", day + "/" + month + "/" + year);


