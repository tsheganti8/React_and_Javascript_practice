const checkLastDigit = (num1, num2, num3) =>{
    num1 = num1.toString().slice(-1);
    num2 = num2.toString().slice(-1);
    num3 = num3.toString().slice(-1);
    if (num1 === num2 && num2 === num3 && num3 ===num1){
        return true;
    }return false;
}

console.log(checkLastDigit(45, 55, 65));
console.log(checkLastDigit(22, 32, 42));
console.log(checkLastDigit(55, 66, 77));