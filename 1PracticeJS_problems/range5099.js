//2.numbers
function Range5099(num1, num2){
    let range = [];
    for(let i = 50; i<= 99; i++){
        range.push(i);
    }
    return range.includes(num1) && range.includes(num2);
}

console.log(Range5099(56, 78));
console.log(Range5099(66, 99));
console.log(Range5099(22, 54));
console.log(Range5099(32, 22));

// 2. Three numbers - return true if one or more are in range.
function Range5099(num1, num2, num3){
    let range = [];
    for(let i = 50; i<= 99; i++){
        range.push(i);
    }
    return range.includes(num1) || range.includes(num2) || range.includes(num3);
}

console.log(Range5099(56, 78, 88));
console.log(Range5099(66, 99, 77));
console.log(Range5099(22, 54, 92));
console.log(Range5099(32, 22, 42));