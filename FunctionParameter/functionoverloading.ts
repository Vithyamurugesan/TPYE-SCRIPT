function addMO(a:String,b:string):String;
function addMO(a:number,b:number):Number;
function addMO(a:any,b:any):any{
    return a+b;
}

console.log(addMO("Hello","Steve"));
console.log(addMO(10,20));