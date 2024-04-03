console.log("Hello there!");

// What's the difference between [], . ?

// [] works everytime

// dot notation, 60% of the time, it works all the time
// dot notation, Drax in Guardians of the Galaxy

const someObj = {
  name: "Pequeno Pollo",
  age: 42,
  address: {
    main: {
      home: {
        streetNumber: 5555,
        streetName: "Happy St",
        postalCode: "J0J 0J0",
      },
    },
  },
};

const key = "name";

someObj.key; // => undefined ?

someObj[key];
someObj["n" + "a" + "m" + "e"]; // Executed first, then will look the key!

someObj["address"]["main"]["home"]["streetNumber"]; // Signal to Noise Ratio => high

someObj.address.main.home.streetNumber; // Signal to Noise Ratio => low

// Create a "bookmark"
const userAddress = someObj.address.main.home;

console.log(`The user lives at: ${userAddress.streetNumber} ${userAddress.streetName}`);

userAddress.streetNumber = 1234;

console.log(someObj.address.main);

// Everything in JS (besides primitives) are objects
