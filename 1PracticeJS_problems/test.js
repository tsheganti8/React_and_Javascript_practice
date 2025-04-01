//contructors methods, instance methods & static methods
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        return(`Hello I am ${this.name}!`);
    }
}
    const person1 = new Person('Alice');
    console.log(person1.greet());

//Generators and yields values.
console.log("Generators practice");
function* Generators(){
    yield 1;
    yield 2;
    yield 3;
}
const gen = Generators();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Closure functions- function which retains access to its lexical scope
console.log(" Closure practice");
function outer(){
    let message = 'Hello,';
    return function inner(name){
        return message + name;
    };
    
}
 
let greet = outer();
console.log(greet('Alice'));

//higher order functions
console.log(" higher order functions ");

function multiplyByTwo(x){
    return x*2;
}

function OperateBy(x, operation){
    return operation(x);
}

console.log(OperateBy(5,multiplyByTwo));

console.log(" closures ");
function outer(){
    let count = 0;
    return function(){
        return ++count;
    };
}

let counter = outer();
console.log(counter());
console.log(counter());


const x = 2;
let y = 4;

function update(arg) {
  return Math.random() + y * arg;
}

y = 3; // Ensures result is between 6 and 7
const result = update(x);

