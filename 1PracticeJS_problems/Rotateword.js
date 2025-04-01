// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
   
function Rotate(word){
    let newWord = "";
    for(let i = 0; i< word.length; i++){
      word = word.substring(1) + word[0];
       console.log(word);
        
    }
   
}
Rotate("w3resource");



