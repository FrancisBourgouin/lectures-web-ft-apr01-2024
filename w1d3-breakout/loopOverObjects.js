// How to loop on objects!

const someObj = { a: 1, b: 2, c: 3 };

// Transform someObj into an array structure

Object.values(someObj); // [1,2,3]
const keyList = Object.keys(someObj); // [a,b,c]
Object.entries(someObj); //[[a,1],[b,2],[c,3]]

for (const key of keyList) {
  console.log(key, someObj[key]);
}

for (const key in someObj) {
  console.log(key, someObj[key]);
}
