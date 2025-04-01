// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
   
// var triangle = {
//     a : 5,
//     b : 6,
//     c : 7
// };

function findArea(a, b, c){
    let s = (a + b + c)/2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

const triangle = findArea(5, 6, 7);

console.log("Area of Triangle:", triangle);


