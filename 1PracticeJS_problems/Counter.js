//Given an integer n, return a counter function. This counter function initially returns n 
//and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        const counter = createCounter(10)
        for (var n=10; n<12; n++);
    };
};
createCounter(); 


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

