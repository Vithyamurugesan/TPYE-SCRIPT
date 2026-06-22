// Original Array
let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

// push() - Add at end
arr.push(60);
console.log("push():", arr);

// pop() - Remove last
arr.pop();
console.log("pop():", arr);

// unshift() - Add at beginning
arr.unshift(5);
console.log("unshift():", arr);

// shift() - Remove first
arr.shift();
console.log("shift():", arr);

// sort() - Sort array
let numbers = [40, 10, 30, 20];
numbers.sort();
console.log("sort():", numbers);

let animal=['lion','tiger','cheetah']
animal.sort();
console.log(animal);

// concat() - Join arrays
let arr2 = [70, 80];
let combined = arr.concat(arr2);
console.log("concat():", combined);

// indexOf() - First matching index
console.log("indexOf(30):", arr.indexOf(30));

// lastIndexOf() - Last matching index
let dup = [10, 20, 30, 20, 40];
console.log("lastIndexOf(20):", dup.lastIndexOf(20));

// includes() - Check element exists
console.log("includes(40):", arr.includes(40));

// join() - Convert to string
console.log("join('-'):", arr.join("-"));

// slice() - Copy part of array
console.log("slice(1,4):", arr.slice(1, 4));

// splice() - Remove/Add elements
let sp = [1, 2, 3, 4, 5];
sp.splice(2, 1, 100); // Remove 1 element at index 2 and add 100
console.log("splice():", sp);

// fill() - Fill with value
let fillArr = [1, 2, 3, 4];
fillArr.fill(9);
console.log("fill():", fillArr);

// copyWithin() - Copy part of array
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("copyWithin():", copyArr);

// toString() - Convert to string
console.log("toString():", arr.toString());

// toLocaleString() - Locale string
console.log("toLocaleString():", arr.toLocaleString());