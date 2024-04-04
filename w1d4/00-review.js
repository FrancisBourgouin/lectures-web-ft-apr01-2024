// Existential questions!

// Loops!

// C-Style For, most generic version
// It can work with numeric values

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 0-9

// For .. of
// Iterate over lists, we want to access every value of an array

const arr = ["Luffy", "Do Flamingo"];

for (let i = 0; i < arr.length; i++) {
  const name = arr[i];

  console.log(name);
}

for (const name of arr) {
  console.log(name);
}

// For .. in
// Iterate any object-like structure, will use keys

for (let i = 0; i < Object.keys(something).length; i++) {
  const key = Object.keys(something)[i];

  console.log(key);
}

for (const key in something) {
  console.log(key);
}


// while / do while

while(Math.random() > 0.5){

}

let condition = true

while(condition){
  conditon = false
}

// .forEach method

// IS A SECRET!!!!