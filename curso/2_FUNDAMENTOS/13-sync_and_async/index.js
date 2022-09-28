// console.count("couter1");
// console.count("couter2");
// console.count("couter3");
// setTimeout(() => {
//     console.count("couter4");
// },1000);
// console.count("couter5");
// console.count("couter6");


const fs = require('fs');

console.log("Start");

fs.writeFile("arquivo.txt", "oi", function(err){
    setTimeout(() => {
        console.log("fiole criated!")
    },5000)
});

console.log("End");
