// // Arrow Functions
// // These 3 all do the same
// function add(arg1, arg2) {
//   return arg1 + arg2;
// }

// const add1 = function(arg1, arg2) {
//   return arg1 + arg2;
// }

// const add2 = (arg1, arg2) => {
//   return arg1 + arg2;
// }

// const add3 = (arg1, arg2) => arg1 + arg2;


// const calculator = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => a / b,
// }

// calculator.add(1, 2); // 3

// const array = [1, 2, 3, 4, 5];

// const doubled = array.map((value) => value * 2);

// const doubled2 = array.map(function(value) {
//   return value * 2;
// });


// // Hoisting example
// // Call the functions
// console.log(add(4, 5));  // 9
// // makeNoise();  // Error: makeNoise is not defined
// // Function declaration: hoisted, can be called before declaration
// function add(num1, num2) {
// 	return num1 + num2;  // Returns the sum of num1 and num2
// }

// // Function expression: not hoisted, must be defined before it can be used
// const makeNoise = function () {
// 	console.log("Kabow!");  // Logs "Kabow!" to the console
// };

// // Call the functions
// add(4, 5);  // 9
// makeNoise();  // Prints "Kabow!"

// IIFE with local scope
(function () {
	let message = "Hello, world!";  // Variable 'message' inside the IIFE
	console.log(message);  // 'Hello, world!' is logged to the console
})();

// Trying to access 'message' outside of its scope will result in an error
console.log(message);  // Error: message is not defined

// IIFE used for creating a private scope and revealing public methods
let counter = (function() {
  let count = 0;  // Private variable 'count'

  function increment() {  // Private function to increment count
    count++;
    console.log(`Count: ${count}`);  // Log the current count
  }

  function reset() {  // Private function to reset count
    count = 0;
    console.log('Counter reset.');  // Log the reset action
  }

  // Publicly exposed methods
  return {
    reset: reset,
  };
})();

// Call the public methods
// counter.increment();  // Count: 1
// console.log(counter.increment);  // undefined

// Global Scope
let globalVar = "I am global";  // This variable is in the global scope, accessible everywhere in the code

function checkGlobalScope() {
  // Local Scope
  let localVar = "I am local";  // This variable is in the local scope, accessible only within this function
  console.log(globalVar);  // Accessible here because globalVar is in the global scope
  console.log(localVar);  // Accessible here because we are inside the function where localVar is defined
}

// checkGlobalScope();
// console.log(localVar);  // Uncaught ReferenceError: localVar is not defined (because localVar is not in the global scope)


// Scoping Difference and Scope Chain
// Lexical scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions

function outerFunction() {
  let outerVar = 'I am from outer';

  function innerFunction() {
    let innerVar = 'I am from inner';
    console.log(outerVar);  // 'outerVar' is accessible here due to lexical scoping
    console.log(innerVar);
  }

  innerFunction();
  console.log(innerVar);  // Error: innerVar is not accessible here
}

// outerFunction();

// Recursion
function countDown(number) {
  console.log(number);
  if (number > 0) {  // Base condition to stop recursion
    countDown(number - 1);
  }
}

countDown(5);  // Demonstrates recursion by counting down from 5 to 0

const val = 5;

const greaterThan2 = val > 2 ? 'Yes' : 'No';