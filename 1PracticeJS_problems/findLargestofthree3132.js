function findLargest(num1, num2, num3){
    let largest = Math.max(num1, num2, num3);
    return largest;
}


console.log(findLargest(45, 66, 98));
console.log(findLargest(1, 8, 10));
console.log(findLargest(6, 8, 2));
console.log(findLargest(50, 22, 35));


//2. Find closest to 100
function closestTo100(num1, num2){
    return Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;
}


console.log(closestTo100(45, 66));
console.log(closestTo100(1, 8));
console.log(closestTo100(99, 105));
console.log(closestTo100(150, 122));