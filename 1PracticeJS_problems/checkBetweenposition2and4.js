/* Check Character Between 2nd and 4th Positions in String

Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

The program checks if a specified character is present in a given string between the 2nd and 4th positions 
(i.e., indices 1 to 3). It returns true if the character exists in that range and false otherwise. */
const checkBetween2and4 = (str, char)  =>{
    for (let i = 1; i <= 3 && i < str.length ; i++) {
        if(str.charAt(i) === char) {
            return true;
        }
    } 
    return false;
}

console.log(checkBetween2and4("Python", "y")); // true (index 1)
console.log(checkBetween2and4("JavaScript", "a")); // true (index 1)
console.log(checkBetween2and4("Console", "o")); // true (index 3)
console.log(checkBetween2and4("Console", "C")); // false (index 0)
console.log(checkBetween2and4("Console", "e")); // false (index 5)
console.log(checkBetween2and4("JavaScript", "S")); // false (index 4)