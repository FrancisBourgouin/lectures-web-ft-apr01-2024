// Why do we want to use functions?

// Less repetitive code
// Save time
// Easier reading
// Avoid repetition if possible (DRY)

// Definitions vs. Expressions

// Function definition / declaration
// Hoisting

let hello = "Hello!";
someFunction("Wazzaa!");

function someFunction(param1) {
  console.log("User says:", param1);
}

someFunction(hello);

// Function expression
// functionExpression("Wazzaa!")

const functionExpression = function (param1) {
  console.log(param1);
};

functionExpression(hello);

function someFunction(param1) {
  console.log("MWAGHAHAHAHAHAHAHA");
}

// Concept of an anonymous function!
// Throwaway function
//

(function (param1) {
  console.log(param1);
})();

// IIFE - Immediatly invoked function expression
// Helps with scoping

(function (param1) {
  console.log(param1);
})();

// Arrow function!

const someArrowFunction = (param1) => {
  console.log(param1);
};

const someArrowFunctionAgain = (param1) => console.log(param1);

// const generateRandomNumber = (maxValue) => Math.round(Math.random() * maxValue);

const generateRandomNumber = (maxValue) => {
  return Math.round(Math.random() * maxValue);
}

console.log(generateRandomNumber(10));
