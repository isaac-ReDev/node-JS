function soma(a,b){
    // return args.reduce( (accum, currentIndex) => {
    //         accum += currentIndex;
    // } )
    return a + b
}

function mult(...args){
    return args.reduce((acc, currentIndex) => {
        acc *= currentIndex;
    });
}

module.exports = {
    soma,
}