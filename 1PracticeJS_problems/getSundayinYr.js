let day = 1;
let month = 1;
let year = 2014;
let result = 0;

for(let i = year; i < 2050; i++){
    const date = new Date(i, month, day);
   if(date.getDay() === 0){
       result++;
   }
}



console.log("Number of SUndays on January 1st between 2014 and 2050:", result);

