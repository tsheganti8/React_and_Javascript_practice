function conversion(c , f){
    if(f != undefined){
      return ((f - 32)/9) * 5
    }
    else {
       return ((c * 9 / 5) + 32);
    }

}
 console.log("Celsius to Fahrenheit:", conversion(0, undefined)); 
 console.log("Fahrenheit to Celsius:", conversion(undefined, 100)); 