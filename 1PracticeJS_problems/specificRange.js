// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function findSpecificRange(num1, num2){
    let range1 = [];
    let range2 = [];
    for(let i = 40; i <= 60; i++){
       range1.push(i);
    }
    for(let j = 70; j<= 100; j++){
            range2.push(j);
    }
    let rangeSet1 = new Set(range1);
    let rangeSet2 = new Set(range2);
        
    if (rangeSet1.has(num1) && rangeSet1.has(num2) || rangeSet2.has(num1) && rangeSet2.has(num2)){
            return true;
    }
    else return false;
    
}
console.log(findSpecificRange(71, 40));
console.log(findSpecificRange(51, 60));
console.log(findSpecificRange(85, 99));
console.log(findSpecificRange(20, 40));
console.log(findSpecificRange(70, 30));
console.log(findSpecificRange(22, 35));