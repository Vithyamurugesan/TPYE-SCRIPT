//array
let fruits:String[]=['Apple','Orange','Banana'];
let number:Array<number> =[1,2,3];
console.log(fruits[1]);

for(var index in fruits)
    console.log(fruits[index])

for(var i=0;i<fruits.length;i++)
    console.log(fruits[i])

//define tuple
let ourTuple:[number,boolean,string]
//initialize tuple
ourTuple=[5,false,"Coding god was here"];
console.log(ourTuple);


//enum
enum Direction{
    Up=1,
    Down,
    Left,
    Right,
}
console.log(Direction)
console.log(typeof(Direction))

//String enum auto increment is not working

enum Appstatus{
    ACTIVE='ACT',
    INACTIVE='INACT',
    ONHOLD='HLD',
    ONSTOP='STOP'
}
console.log(Appstatus)
console.log(typeof(Appstatus))