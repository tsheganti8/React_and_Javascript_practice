function Swap(string){
    if(string.length == 0 || string.length <= 1) return false;
    
    let first = string.charAt(0);
    let last = string.charAt(string.length - 1);
    
    return last + string.slice(1, -1) + first;
   
}

console.log(Swap("hello"));
console.log(Swap(""));
console.log(Swap("cannes"));
console.log(Swap("patty"));