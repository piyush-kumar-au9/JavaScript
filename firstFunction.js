// Functions in JavaScript are variables
// There are multiple way to define function in JS

// Type 1
// This variation supports hoisting
function sum(a, b){
    return a+b;
}

// Type 2
var product = function(a, b){
    return a*b;
}

// Type 3 - instead of const we can also use var and let here 
// [const | let | var] function_name = (parameters) => {}
const sub = (a,b) => {
    return a-b;
}

// Function calling
console.log("Sum of the numbers: ",sum(10,5));
console.log("Product of the numbers: ", product(10,5));
console.log("Difference of the numbers: ", sub(10,5));



// Function Hoisting - But it will only work with the type 1 not with others types of function declaration
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
hoisitngExample("My first Hoisting");
function hoisitngExample(word){
    return ("Target " + word);
}