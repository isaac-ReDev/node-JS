function a(){
    console.log("log A");
    b()
}

function b(){
    console.log("log B");
}

function c(){
    console.log("log c");
    a()
}

c()
