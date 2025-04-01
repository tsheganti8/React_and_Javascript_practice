function checkFifty(num1, num2){

    return num1 === 50 || num2 === 50 ||  (num1 + num2 === 50); 
}
    
console.log(checkFifty(5, 50));
console.log(checkFifty(40, 10));
console.log(checkFifty(69, 85));
console.log(checkFifty(92, 154));