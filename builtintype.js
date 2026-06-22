"use strict";
let num = 10;
let hexa = 0X67CF;
let octal = 0O344;
let binary = 0b1100;
console.log(num);
console.log(hexa);
console.log(octal);
console.log(binary);
let message = "good morning";
let color = "red";
let sentence = "hello,welcome to the world of typescript";
console.log(message);
console.log(color);
console.log(sentence);
let boolvar = true;
let boolvar1 = Boolean(true);
let isDone = true;
let isPending = Boolean(false);
console.log(isDone);
console.log(isPending);
console.log(typeof (isDone));
console.log(typeof (isPending));
let a;
let b = null; //b is a variable type of null
console.log(typeof (a));
console.log(typeof (b)); //object
const secret = Symbol("secret");
const user = {
    name: "Alice",
    [secret]: "top-secret-token"
};
console.log(user[secret]);
const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);
