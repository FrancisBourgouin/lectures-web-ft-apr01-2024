let num1 = 5;
let num2 = num1;

console.log(num1, num2);
// Expected outcome: 5,5

num1 = 10;

console.log(num1, num2);
// Expected outcome: 10,5 ?
// Expected outcome: 10,10 ?

const obj1 = { a: 1 };
const obj2 = obj1;
const obj3 = { a: 1 };

console.log(obj1, obj2);
// Expected outcome: {a:1}, {a:1}

obj1.a = 10;

console.log(obj1, obj2);
console.log(obj1 === obj2);
console.log(obj1 === obj3);
// Expected outcome: {a:10}, {a:1}
// Expected outcome: {a:10}, {a:10}

// When we work with primitives (Strings, Numbers), we assign the value directly
// When we work with Structural types (Object, Array, ...), we assign a reference to the structure
