"use strict";
//array
let fruits = ['Apple', 'Orange', 'Banana'];
let number = [1, 2, 3];
console.log(fruits[1]);
for (var index in fruits)
    console.log(fruits[index]);
for (var i = 0; i < fruits.length; i++)
    console.log(fruits[i]);
//define tuple
let ourTuple;
//initialize tuple
ourTuple = [5, false, "Coding god was here"];
console.log(ourTuple);
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(typeof (Direction));
//String enum auto increment is not working
var Appstatus;
(function (Appstatus) {
    Appstatus["ACTIVE"] = "ACT";
    Appstatus["INACTIVE"] = "INACT";
    Appstatus["ONHOLD"] = "HLD";
    Appstatus["ONSTOP"] = "STOP";
})(Appstatus || (Appstatus = {}));
console.log(Appstatus);
console.log(typeof (Appstatus));
