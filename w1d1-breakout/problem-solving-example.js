// Build a function that will return the sum of all the numbers in an array

// Example: [1,2,3,4] => 10

// Function name: calculateArraySum
// STEPS: Declare the function

// INPUT: A list of numbers (Array)
// STEPS: Create a buffer variable to store the temporary sum
// STEPS: Iterate over the values of the array
//  STEPS: For every value, I'd like to do the following:
//  STEPS: Increment my buffer variable by the current value
// STEPS: Return our buffer variable
// OUTPUT: Number (sum of all values)



const calculateArraySum = function (listOfNumbers) {
  let sum = 0;
  for (const number of listOfNumbers) {
    sum += number;
  }
  return sum;
};

const exampleArray = [1, 1337, 9001, 42];

const result = calculateArraySum(exampleArray);

console.log(`The sum of this array ${exampleArray} is ${result}`)
// const checkIfOdd = function(number){
//   return number % 2 === 1
// }
