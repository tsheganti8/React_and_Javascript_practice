function firstChar(string){
    if(string.length == 0 || string.length <= 1) return false;
    
    let first = string.charAt(0);
    
    return first + string + first;
   
}

console.log(firstChar("hello"));
console.log(firstChar(""));
console.log(firstChar("cannes"));
console.log(firstChar("patty"));