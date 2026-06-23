"use strict";
function displayName(name, greeting = "Hello") {
    return greeting + '' + name + '!';
}
console.log(displayName("Karthick"));
console.log(displayName('Karthick', "Hi"));
console.log(displayName('Sachin'));
