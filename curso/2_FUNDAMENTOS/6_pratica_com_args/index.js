// const minimist = require('monimist');
const minimist = require("minimist");


//* modulo externo
const args = minimist(process.argv.slice(2));

//* modulo interno
const reqquireSoma = require('./soma')
const soma = reqquireSoma.soma
const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

console.log(soma(a,b));

