function withinTwenty(num1){

    return num1 > 100 && num1 <  120  || num1 > 400 && num1 < 420; 
    }
    
    console.log(withinTwenty(115));
    console.log(withinTwenty(411));
    console.log(withinTwenty(200));
    console.log(withinTwenty(500));



    /*
    function isWithin20Of100Or400(num) {
    return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

// Test cases
console.log(isWithin20Of100Or400(90));  // true (within 20 of 100)
console.log(isWithin20Of100Or400(120)); // true (within 20 of 100)
console.log(isWithin20Of100Or400(80));  // false (not within 20 of 100)
console.log(isWithin20Of100Or400(380)); // true (within 20 of 400)
console.log(isWithin20Of100Or400(420)); // true (within 20 of 400)
console.log(isWithin20Of100Or400(440)); // false (not within 20 of 400) */