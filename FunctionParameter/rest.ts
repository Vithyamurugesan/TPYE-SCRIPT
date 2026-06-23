function sumfun(a:number,...b:number[]):number{
    let result=a;
    for(var i=0;i<b.length;i++){
        result+=b[i];
    }
    return result;
}
let result1=sumfun(3,5);
let result2=sumfun(3,5,6,7);
