function difference(num1){

    let num2 = 19;   
    let res = Math.abs(num1 - num2);
    
    return num1 > num2 ? res * 3 : res; 
}


console.log(difference(5));
console.log(difference(10));
console.log(difference(29));
console.log(difference(46));