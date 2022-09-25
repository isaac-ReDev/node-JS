// const minimist = require('monimist');
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const name = args["name"]
const work = args["work"]

const obj ={
    userName: name,
    userWork: work,
}

// console.log(typeof name) 
// console.log(typeof work) 

console.log(obj)