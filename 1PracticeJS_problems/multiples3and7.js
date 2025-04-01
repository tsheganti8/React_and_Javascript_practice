function Multiple(num){
    if(num % 3 === 0 || num % 7 === 0){
        return true;
    }
   else return false;
}

console.log(Multiple(49));
console.log(Multiple(9));
console.log(Multiple(4));
console.log(Multiple(28));