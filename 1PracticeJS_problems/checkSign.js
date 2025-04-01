function checkSign(num1, num2){
    const sign = Math.sign(num1) || Math.sign(num2);
    
     if((Math.sign(num1) === 1 &&  Math.sign(num2) === -1 ) || 
     (Math.sign(num2) === 1 &&  Math.sign(num1) === -1 )){
        return true;
    }
    else return false;
}

console.log(checkSign(1, -2));
console.log(checkSign(-4, 5));
console.log(checkSign(0, 1));
console.log(checkSign(-2, -3));