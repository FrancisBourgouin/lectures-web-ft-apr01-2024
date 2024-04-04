const list = ["Maksym", "Jordan", "Sergio", "Miguel"];
const anotherList = ["Poulet", "Pollo", "Chicken"];

const sayGoodMorningToEveryone = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`Bon matin ${name}!`);
  }
};

sayGoodMorningToEveryone(list);
sayGoodMorningToEveryone(anotherList);

// Is sayGoodMorningToEveryone reusable ? Yes but not really too

const sayBye = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`Bye ${name}!`);
  }
};

// Maybe we could merge the functions together !

const saySomething = (listOfNames, thingWeWantToSay) => {
  for (const name of listOfNames) {
    console.log(`${thingWeWantToSay} ${name}!`);
  }
};

saySomething(list, "Something something");

const defABadIdea = (listOfNames, thingToSayBeforeThename, thingToSayAfterTheName) => {
  for (const name of listOfNames) {
    console.log(`${thingToSayBeforeThename} ${name} ${thingToSayAfterTheName}`);
  }
};

// WHAT IF!
// Function placeholder ?!
// listOfNames should be an array, but we don't worry about it
// Functions are objects!

// const list = ["Maksym", "Jordan", "Sergio", "Miguel"];

const betterSaySomething = (listOfNames, action) => {
  for (const name of listOfNames) {
    // Do we worry about listOfNames ? No!

    action(name);
  }
};

const sayGoodMorning = name => console.log(`Good morning ${name}!`)
const sayBonMatin = name => console.log(`Bon matin ${name}!`)

betterSaySomething(list, console.log); // console.log is THE callback of betterSaySomething
betterSaySomething(list, sayGoodMorning);
betterSaySomething(list, sayBonMatin);


// Higher Order Function: Is a function that needs another function to work
// OR
// Higher Order Function: Is a function that returns a function definition (WE'LL SEE THAT IN W3-4)


// Callback: A relationship status between a function and a HOF