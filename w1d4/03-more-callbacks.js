// Higher Order Function: Is a function that needs another function to work
// OR
// Higher Order Function: Is a function that returns a function definition (WE'LL SEE THAT IN W3-4)

// Callback: A relationship status between a function and a HOF
// Brings reusability to another level!

const listOfNumbers = [1, 3, 5, 7, 11];
const listOfPotatoes = ["Yukon Gold", "Irish Cobbler", "Russett"];

// result = {name:"YG", type:"potato"}

const forEveryElement = (list, action) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const index = i;

    // All you can eat buffet!
    // We provide item, index, list
    action(item, index, list);
  }
};

const showDouble = (number) => console.log(number * 2);
const showTriple = (number) => console.log(number * 3);

const showValueAndlist = (number, index, list) =>
  console.log(`The number ${number} is at position ${index} in the array ${list}`);

forEveryElement(listOfNumbers, showDouble);
forEveryElement(listOfNumbers, showValueAndlist);

listOfNumbers.forEach((number) => console.log(number * 5));

listOfNumbers.forEach(function (number) {
  console.log(number * 5);
});

// Create a new array of elements out of an original array

const createNewArrayFromOriginal = (list, elementModifier) => {
  const newArray = [];
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    const modifiedItem = elementModifier(item, index, list);
    newArray.push(modifiedItem);
  }
  return newArray;
};

const result = createNewArrayFromOriginal(listOfPotatoes, (name) => ({
  name: name,
  type: "potato",
}));

console.log(result);

const result1 = createNewArrayFromOriginal(
  listOfNumbers,
  (number, index) => number * index
);
console.log(result1);

// Complex conditions!

// for(){
//   if(){

//   }else{

//   }
// }

const chillParents = (grade) => {
  if (grade.subject === "music") {
    // This is an exception clause / escape clause
    // They will at least 80
    return grade.score >= 80; // true if over, false if under
  }

  return grade.score > 50;
  // As long as it's over 50, we cool.
};

const strictParents = (grade) => grade.score > 90;

const randomParents = () => Math.random() > 0.5;

// A function that will check if the parent is happy or not about your grades
// A grade will be shaped like so : {score:90, subject:"math"}

const simulateParentReaction = (grade, parentEvaluate) => {
  const isHappy = parentEvaluate(grade);

  if (isHappy) {
    return "GOOD JOB.";
  }

  return "SON I AM DISAPPOINT";
};

const grade1 = { subject: "maths", score: 95 };
const grade2 = { subject: "music", score: 55 };
const grade3 = { subject: "french", score: 75 };

const grades = [grade1, grade2, grade3];

const parentReaction = simulateParentReaction(grade2, randomParents);

console.log(parentReaction);


const simulateChillParentsReaction = (grade) => simulateParentReaction(grade, chillParents)

const chillParentReactions = createNewArrayFromOriginal(grades, simulateChillParentsReaction)
// const chillParentReactions = createNewArrayFromOriginal(grades, (grade) => simulateParentReaction(grade, chillParents))

console.log(chillParentReactions)