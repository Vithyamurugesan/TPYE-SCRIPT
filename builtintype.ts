let num:number=10;
let hexa:number=0X67CF;
let octal:number=0O344;
let binary:number=0b1100;
console.log(num);
console.log(hexa);
console.log(octal);
console.log(binary);

let message="good morning"
let color="red"
let sentence="hello,welcome to the world of typescript"
console.log(message)
console.log(color)
console.log(sentence)


let boolvar:boolean=true;
let boolvar1=Boolean(true);

let isDone:boolean=true;
let isPending=Boolean(false);
console.log(isDone);
console.log(isPending)
console.log(typeof(isDone))
console.log(typeof(isPending))

let a:undefined
let b:null=null                  //b is a variable type of null

console.log(typeof(a))
console.log(typeof(b))  //object

const secret=Symbol("secret");
const user={
    name:"Alice",
    [secret]:"top-secret-token"
};
console.log(user[secret]);
const symbols=Object.getOwnPropertySymbols(user);
console.log(symbols);