function somefn(){
    if(true){
        var localVar=1000
        console.log("1.",localVar)
    }
    console.log("2.",localVar)
    function nested(){
        console.log("3.",localVar)
    }
}
somefn();

