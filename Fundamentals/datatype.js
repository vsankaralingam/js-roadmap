 // JavaScript Data Types

// JavaScript is dynamically typed – variables can hold any type

let msg = "Hello";
msg = 123; // Valid: now it's a number

// Numbers: for both integers and floats

let num = 42;
num = 3.14;

// Special numeric values

console.log(1 / 0);         // Infinity
console.log("abc" / 2);     // NaN (Not a Number)

// BigInt: for large integers beyond 2^53 - 1

const bigNum = 123456789012345678901234567890123n;

// Strings: text values wrapped in quotes

let str1 = "Double quotes";
let str2 = 'Single quotes';
let user = "Sankara";
console.log(`Hello, ${user}`); // Template string with variable

// Boolean: true or false values

let isAvailable = true;
let isEmpty = false;
console.log(10 > 5); // true

// Null: represents empty or unknown

let result = null;

// Undefined: variable declared but not assigned

let temp;
console.log(temp); // undefined

// Symbol: for unique object keys

const sym = Symbol("id");

// Object: used for structured data

let person = {
  name: "Lingam",
  age: 25,
};

// typeof operator – returns a string describing the type

console.log(typeof "text");     // string

console.log(typeof 100);        // number

console.log(typeof bigNum);     // bigint

console.log(typeof null);       // object

console.log(typeof person);     // object

console.log(typeof alert);      // function

