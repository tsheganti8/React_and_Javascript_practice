// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function guessGame(){
    let input =Math.floor(Math.random() * 10) + 1;
    let userGuess = parseInt(prompt("Guess a number between 1 and 10 :"));
    
       if(userGuess === input){
           console.log("Good Work");
       }else {
       console.log( "Not Matched. The correct number was:" + input) ; 
       
       }
}


guessGame();



console.log("Try programiz.pro");