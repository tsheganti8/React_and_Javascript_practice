function lastThreeCharacters(str){
    if(str.length < 3 ) return str;
    
    let last = str.slice(-3);
    return last + str + last;
}

//2. Starts with String function

function checkJava(str){
    check = "Java";
    
    if(str.startsWith(check)){
        return true;
    }
    else return false;
    
 }
 
 
 
 console.log(checkJava("Javacrazy"));
 console.log(checkJava("Hello"));
 console.log(checkJava("AmazingJava"));
 console.log(checkJava("Javabat"));